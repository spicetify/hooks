/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ModuleManager } from "./protocol.js";
import { satisfies } from "./semver/satisfies.js";
import { SPOTIFY_VERSION } from "./static.js";
import { createTransformer } from "./transform.js";
import { deepMerge, fetchJson, proxy, Transition } from "./util.js";

export type ModuleIdentifier = string;
export type Version = string;
export type StoreIdentifier = string;
type Truthy<A> = A;

interface _Module {
	enabled: Version;
	v: Record<Version, _Store>;
}

interface _Store {
	installed: boolean;
	artifacts: Array<string>;
	checksum: string;
}

interface _Vault {
	modules: Record<ModuleIdentifier, _Module>;
}

export interface Metadata {
	name: string;
	tags: string[];
	preview?: string;
	version: string;
	authors: string[];
	description: string;
	readme?: string;
	entries: {
		js?: string;
		css?: string;
	};
	hasMixins: boolean;
	dependencies: Record<string, string>;
}

export abstract class ModuleBase<
	C extends ModuleBase<C, any>,
	I extends ModuleInstanceBase<ModuleBase<C, I>> = ModuleInstanceBase<
		ModuleBase<C, any>
	>,
> {
	public instances = new Map<Version, I>();

	constructor(
		public parent: ModuleBase<ModuleBase<C, I>> | null,
		protected children: Record<ModuleIdentifier, C>,
		private identifier: ModuleIdentifier,
	) {
		this.parent?.setChild(this.identifier, this);
	}

	public getIdentifier(): ModuleIdentifier {
		return this.identifier;
	}

	public abstract newDescendant(
		identifier: ModuleIdentifier,
		module: _Module,
	): Promise<C>;

	public getDescendant(identifier: ModuleIdentifier): C | null {
		for (const child of this.getChildren()) {
			if (identifier.startsWith(child.identifier)) {
				if (identifier.length === child.identifier.length) {
					return child;
				}
				return child.getDescendant(identifier);
			}
		}
		return null;
	}

	public getLastParentOf(identifier: ModuleIdentifier): C | null {
		for (const child of this.getChildren()) {
			if (identifier.startsWith(child.identifier)) {
				return child.getLastParentOf(identifier);
			}
		}
		// @ts-ignore :(
		return this;
	}

	public async getDescendantOrNew(identifier: ModuleIdentifier): Promise<C> {
		return this.getDescendant(identifier) ??
			this.newDescendant(identifier, { enabled: "", v: {} });
	}

	private setChild(identifier: ModuleIdentifier, child: C) {
		this.children[identifier] = child;
	}

	public removeChild(identifier: ModuleIdentifier) {
		delete this.children[identifier];
	}

	public getChildren() {
		return Object.values(this.children);
	}

	public *getDescendantsByDepth(): Generator<C> {
		for (const child of this.getChildren()) {
			yield child;
			yield* child.getDescendantsByDepth();
		}
	}

	public *getDescendantsByBreadth(): Generator<C> {
		const i: Array<ModuleBase<ModuleBase<any>>> = [this];

		while (i.length) {
			const e = i.shift()!;
			// @ts-ignore
			yield* e.getChildren();
			i.push(...e.getChildren());
		}
	}

	public getHeritage(): ModuleIdentifier[] {
		if (!this.parent) {
			return [this.identifier];
		}
		const ancestry = this.parent.getHeritage();
		const reducedIdentifier = this.identifier.slice(
			this.parent.identifier.length,
		);
		return [...ancestry, reducedIdentifier];
	}

	public abstract newInstance(
		version: Truthy<Version>,
		store: _Store,
		local: boolean,
	): Promise<I>;

	public async init(versions: _Module["v"], local: boolean) {
		await Promise.all(
			Object.entries(versions)
				.filter(([version]) => !this.instances.has(version))
				.map(([version, store]) => this.newInstance(version, store, local)),
		);

		return this;
	}
}

export class RootModule extends ModuleBase<Module, never> {
	override newInstance(): Promise<never> {
		throw new Error("RootModule can't have instances");
	}
	public static INSTANCE = new RootModule();

	private constructor() {
		super(null, {}, "");
		Object.freeze(this.instances);
	}

	override newDescendant(
		identifier: ModuleIdentifier,
		module: _Module,
		local = false,
	) {
		return Module.prototype.newDescendant.call(
			this,
			identifier,
			module,
			local,
		);
	}
}

export class Module extends ModuleBase<Module, ModuleInstance> {
	constructor(
		parent: RootModule | Module,
		children: Record<ModuleIdentifier, Module>,
		identifier: ModuleIdentifier,
		public enabled: Version,
	) {
		super(parent, children, identifier);
	}

	override newDescendant(
		identifier: ModuleIdentifier,
		module: _Module,
		local = false,
	) {
		if (this.getDescendant(identifier)) {
			throw new Error(`Module ${identifier} already exists`);
		}

		const parent = this.getLastParentOf(identifier) as Module;
		const descendant = new Module(
			parent,
			{},
			identifier,
			local ? module.enabled : "",
		);
		for (const child of parent.getChildren()) {
			if (
				child.getIdentifier().startsWith(identifier) && child != descendant
			) {
				child.parent = descendant;
			}
		}

		return descendant.init(module.v, local);
	}

	override async newInstance(
		version: Truthy<Version>,
		{ artifacts, installed, checksum }: _Store,
		local = false,
	) {
		const instance = new ModuleInstance(
			this,
			version,
			null,
			artifacts,
			checksum,
			local,
			installed,
		);

		this.instances.set(version, instance);

		if (instance.isEnabled()) {
			await instance.onEnable();
		}

		return instance;
	}

	public canEnable(instance: ModuleInstance) {
		const enabledInstance = this.getEnabledInstance();
		return instance.canDelete() &&
			(!enabledInstance || this.canDisable(enabledInstance));
	}

	public enable(instance: ModuleInstance): Promise<boolean> {
		return instance.transition.new(async () => {
			if (!this.canEnable(instance)) {
				return false;
			}

			const ok = await ModuleManager.enable(instance);
			if (ok) {
				await this.forceEnable(instance);
			}
			return ok;
		});
	}

	async forceEnable(instance: ModuleInstance) {
		this.enabled = instance.getVersion();
		await instance.onEnable();
	}

	public async fastEnable(instance: ModuleInstance): Promise<boolean> {
		return instance.transition.new(async () => {
			const enabledInstance = this.getEnabledInstance();
			await enabledInstance?.transition.block();

			if (
				instance.isEnabled() ||
				(enabledInstance && !this.canDisable(enabledInstance))
			) {
				return false;
			}

			const ok = await ModuleManager.fastEnable(instance);
			if (ok) {
				instance.forceAdd();
				instance.forceInstall();
				await this.forceEnable(instance);
			}
			return ok;
		});
	}

	public canDisable(instance: ModuleInstance) {
		return instance.isEnabled() && !instance.isLoaded();
	}

	public disable(): Promise<boolean> {
		const enabledInstance = this.getEnabledInstance();
		if (!enabledInstance) {
			return Promise.resolve(false);
		}

		return enabledInstance.transition.new(async () => {
			if (!this.canDisable(enabledInstance)) {
				return false;
			}

			const ok = await ModuleManager.disable(this);
			if (ok) {
				this.forceDisable();
			}
			return ok;
		});
	}

	forceDisable() {
		this.enabled = "";
		this.children = {};
	}

	public getEnabledVersion(): Version {
		return this.enabled;
	}

	public getEnabledInstance(): ModuleInstance | undefined {
		return this.getEnabledVersion()
			? this.instances.get(this.getEnabledVersion()!)!
			: undefined;
	}
}

export interface MixinLoader {
	awaitedMixins: Promise<void>[];
}

export abstract class ModuleInstanceBase<
	M extends ModuleBase<M> = ModuleBase<any>,
> {
	public getName() {
		return this.metadata?.name;
	}

	public getVersion() {
		return this.version;
	}

	public getRemoteArtifactURL(): string | null {
		return this.artifacts[0] ?? null;
	}

	public getRemoteMetadataURL(): string | null {
		const remoteArtifactURL = this.getRemoteArtifactURL() ?? null;
		if (!remoteArtifactURL) {
			return null;
		}
		const remoteMetadataURL = remoteArtifactURL.replace(
			/\.zip$/,
			".metadata.json",
		);
		return proxy(remoteMetadataURL)[0].url;
	}

	public getModuleIdentifier() {
		return this.module.getIdentifier();
	}

	public getIdentifier(): StoreIdentifier {
		return `${this.getModuleIdentifier()}@${this.getVersion()}`;
	}

	public getModule() {
		return this.module;
	}

	constructor(
		protected module: M,
		protected version: Truthy<Version>,
		public metadata: Metadata | null,
		public artifacts: Array<string>,
		public checksum: string,
	) {}

	// ?
	public updateMetadata(metadata: Metadata) {
		this.metadata = metadata;
	}

	abstract getMetadataURL(): string | null;
}

export class ModuleInstance extends ModuleInstanceBase<Module>
	implements MixinLoader {
	public async loadProviders() {
		const vault = await fetchJson<_Vault>(this.getRelPath("vault.json")!)
			.catch(() => null);
		const provider = vault?.modules ?? {};

		Object.keys(provider)
			// TODO: revisit this check
			.filter((i) => i.startsWith(this.getModuleIdentifier()))
			.forEach(async (identifier) => {
				const module = await this.module.getDescendantOrNew(identifier);
				await module.init(provider[identifier].v, false);
			});
	}

	private _transformer = createTransformer(this);
	get transformer() {
		return this._transformer;
	}

	public awaitedMixins = new Array<Promise<void>>();

	_unloadJs: (() => Promise<void>) | null = null;
	_unloadCss: (() => void) | null = null;
	private mixinsLoaded = false;
	private loaded = false;
	private jsIndex: any;

	public transition = new Transition();
	private dependants = new Set<ModuleInstance>();

	public isLoaded() {
		return this.loaded;
	}

	public isLocal() {
		return this.added;
	}

	public isInstalled() {
		return this.installed;
	}

	constructor(
		module: Module,
		version: Truthy<Version>,
		metadata: Metadata | null,
		artifacts: Array<string>,
		checksum: string,
		private added: boolean,
		private installed: boolean,
	) {
		super(module, version, metadata, artifacts, checksum);
	}

	public getRelPath(rel: string) {
		if (!this.installed || !this.isEnabled()) {
			return null;
		}
		return `/modules/${this.getModuleIdentifier()}/${rel}`;
	}

	public getLocalMetadataURL() {
		if (!this.installed) {
			return null;
		}
		return `/store/${this.getModuleIdentifier()}/${this.getVersion()}/metadata.json`;
	}

	public getMetadataURL() {
		return this.getLocalMetadataURL() ?? this.getRemoteMetadataURL();
	}

	async #loadMixins() {
		await this.#loadJsIndex();
		if (!this.jsIndex) {
			return;
		}

		console.time(`${this.getModuleIdentifier()}#loadMixins`);
		try {
			await this.jsIndex.mixin?.(this.transformer);
		} catch (e) {
			console.error(
				new Error(
					`Error loading mixins for \`${this.getModuleIdentifier()}\``,
					{ cause: e },
				),
			);
		}
		console.timeEnd(`${this.getModuleIdentifier()}#loadMixins`);

		console.groupCollapsed(`${this.getModuleIdentifier()}#awaitMixins`);
		console.info(...this.awaitedMixins);
		console.groupEnd();

		console.time(`${this.getModuleIdentifier()}#awaitMixins`);
		Promise.all(this.awaitedMixins).then(() =>
			console.timeEnd(`${this.getModuleIdentifier()}#awaitMixins`)
		);
	}

	async #preloadJs() {
		if (!this.mixinsLoaded) {
			await this.#loadJsIndex();
		}
		if (!this.jsIndex) {
			return;
		}

		this._unloadJs = async () => {
			this._unloadJs = null;
		};

		console.time(`${this.getModuleIdentifier()}#preloadJs`);
		try {
			const predispose = await this.jsIndex.preload?.(this);
			const unloadJs = this._unloadJs;
			this._unloadJs = async () => {
				await predispose?.();
				await unloadJs();
			};
		} catch (e) {
			await this._unloadJs!();
			console.error(
				new Error(
					`Error preloading javascript for \`${this.getModuleIdentifier()}\``,
					{ cause: e },
				),
			);
		}
		console.timeEnd(`${this.getModuleIdentifier()}#preloadJs`);
	}

	async #loadJs() {
		if (!this.jsIndex) {
			return;
		}

		if (!this._unloadJs) {
			return;
		}

		console.time(`${this.getModuleIdentifier()}#loadJs`);
		try {
			const dispose = await this.jsIndex.load?.(this);
			const predispose = this._unloadJs!;
			this._unloadJs = async () => {
				await dispose?.();
				await predispose();
			};
		} catch (e) {
			await this._unloadJs!();
			console.error(
				new Error(
					`Error loading javascript for \`${this.getModuleIdentifier()}\``,
					{ cause: e },
				),
			);
		}
		console.timeEnd(`${this.getModuleIdentifier()}#loadJs`);
	}

	#loadCss() {
		const entry = this.metadata?.entries.css;
		if (!entry) {
			return;
		}

		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = this.getRelPath(entry)!;
		document.head.append(link);
		this._unloadCss = () => {
			this._unloadCss = null;
			link?.remove();
		};
	}

	async #loadJsIndex() {
		const { js } = this.metadata?.entries ?? {};
		if (!js) {
			return;
		}

		const now = Date.now();
		const uniqueEntry = `${this.getRelPath(js)!}?t=${now}`;
		this.jsIndex = await import(uniqueEntry);
	}

	private canLoadMixinsRecur() {
		return this.canLoadRecur(true);
	}

	private canLoadJsRecur() {
		return this.canLoadRecur(false);
	}

	private canLoadRecur(isPreload: boolean, range = ">=0.0.0-0") {
		if (!this.metadata) {
			throw `can't load \`${this.getModuleIdentifier()}\` because it has no metadata`;
		}
		if (!isPreload && !this.mixinsLoaded && this.metadata.hasMixins) {
			throw `can't load \`${this.getModuleIdentifier()}\` because it has unloaded mixins`;
		}
		if (!this.loaded) {
			if (!this.canLoad() || !satisfies(this.version, range)) {
				throw `can't load \`${this.getModuleIdentifier()}\` because it is not enabled, installed, or satisfies the range \`${range}\``;
			}
			for (
				const [dependency, range] of Object.entries(
					this.metadata.dependencies,
				)
			) {
				if (dependency === "spotify") {
					return satisfies(SPOTIFY_VERSION, range);
				}
				const module = RootModule.INSTANCE.getDescendant(dependency)
					?.getEnabledInstance();
				if (!module?.canLoadRecur(isPreload, range)) {
					return false;
				}
			}
		}
		return true;
	}

	private canUnloadJsRecur() {
		// if (this.loaded) {
		// 	for (const dependant of this.dependants) {
		// 		if (!dependant.canUnloadJsRecur()) {
		// 			return false;
		// 		}
		// 	}
		// }
		return true;
	}

	private async loadMixinsRecur() {
		if (this.mixinsLoaded) {
			return this.transition.block();
		}
		this.mixinsLoaded = true;
		const resolve = this.transition.extend();

		await Promise.all(
			Object.keys(this.metadata!.dependencies).map((dependency) => {
				const module = RootModule.INSTANCE.getDescendant(dependency)!
					.getEnabledInstance()!;
				return module.loadMixinsRecur();
			}),
		);

		await this.#loadMixins();

		resolve();
	}

	private async loadRecur() {
		if (this.loaded) {
			return this.transition.block();
		}
		this.loaded = true;
		const resolve = this.transition.extend();

		await Promise.all(
			Object.keys(this.metadata!.dependencies).map((dependency) => {
				const module = RootModule.INSTANCE.getDescendant(dependency)!
					.getEnabledInstance()!;
				module.dependants.add(this);
				return module.loadRecur();
			}),
		);

		await this.#loadCss();
		await Promise.all(this.awaitedMixins);
		await this.#loadJs();

		resolve();
	}

	private async unloadRecur() {
		if (!this.loaded) {
			return this.transition.block();
		}
		this.loaded = false;
		const resolve = this.transition.extend();

		for (const dependency of Object.keys(this.metadata!.dependencies)) {
			const module = RootModule.INSTANCE.getDescendant(dependency)!
				.getEnabledInstance()!;
			module.dependants.delete(this);
		}
		await Promise.all(
			Array.from(this.dependants).map((dependant) =>
				dependant.unloadRecur()
			),
		);

		await this._unloadJs?.();
		await this._unloadCss?.();

		resolve();
	}

	async _loadMixins() {
		await this.transition.block();
		if (this.mixinsLoaded) {
			return false;
		}
		try {
			if (this.canLoadMixinsRecur()) {
				await this.loadMixinsRecur();
				return true;
			}
		} catch (e) {
			console.error(
				new Error(
					`Can't inject mixins for \`${this.getModuleIdentifier()}\``,
					{ cause: e },
				),
			);
		}
		return false;
	}

	public canAdd() {
		return !this.added;
	}

	public add(): Promise<this | null> {
		return this.transition.new(async () => {
			if (!this.canAdd()) {
				return null;
			}

			if (!(await ModuleManager.add(this))) {
				return null;
			}

			this.forceAdd();

			return this;
		});
	}

	forceAdd() {
		this.added = true;
	}

	public canInstallRemove() {
		return this.added && !this.installed;
	}

	public async install(): Promise<this | null> {
		return this.transition.new(async () => {
			if (!this.canInstallRemove()) {
				return null;
			}

			if (!(await ModuleManager.install(this))) {
				return null;
			}

			this.forceInstall();

			return this;
		});
	}

	forceInstall() {
		this.installed = true;
	}

	public async fastInstall(): Promise<this | null> {
		return this.transition.new(async () => {
			if (this.isInstalled()) {
				return null;
			}

			if (!(await ModuleManager.fastInstall(this))) {
				return null;
			}

			this.forceAdd();
			this.forceInstall();

			return this;
		});
	}

	public isEnabled() {
		return this.isInstalled() &&
			(this.getVersion() === this.module.getEnabledVersion());
	}

	public async onEnable() {
		if (this.installed) {
			await this.loadProviders();
			await this.ensureMetadata();
		}
	}

	public canLoad() {
		return this.isEnabled() && !this.loaded;
	}

	public async load(): Promise<boolean> {
		await this.transition.block();
		if (!this.canLoad()) {
			return false;
		}
		try {
			if (this.canLoadJsRecur()) {
				await this.#preloadJs();
				await this.loadRecur();
				return true;
			}
		} catch (e) {
			console.error(
				new Error(`Can't load \`${this.getModuleIdentifier()}\``, {
					cause: e,
				}),
			);
		}
		return false;
	}

	public canUnload() {
		return this.loaded;
	}

	public async unload(): Promise<boolean> {
		await this.transition.block();
		if (!this.canUnload()) {
			return false;
		}
		try {
			if (this.canUnloadJsRecur()) {
				await this.unloadRecur();
				return true;
			}
		} catch (e) {
			console.error(
				new Error(`Can't unload \`${this.getModuleIdentifier()}\``, {
					cause: e,
				}),
			);
		}
		return false;
	}

	public canDelete() {
		return this.isInstalled() && !this.isEnabled();
	}

	public async delete(): Promise<this | null> {
		return this.transition.new(async () => {
			if (!this.canDelete()) {
				return null;
			}

			if (!(await ModuleManager.delete(this))) {
				return null;
			}

			this.forceDelete();

			return this;
		});
	}

	forceDelete() {
		this.installed = false;
	}

	public async fastDelete(): Promise<this | null> {
		return this.transition.new(async () => {
			if (!this.isInstalled() || this.isLoaded()) {
				return null;
			}

			if (!(await ModuleManager.fastDelete(this))) {
				return null;
			}

			this.getModule().forceDisable();
			this.forceDelete();

			return this;
		});
	}

	public async remove(): Promise<this | null> {
		return this.transition.new(async () => {
			if (!this.canInstallRemove()) {
				return null;
			}

			if (!(await ModuleManager.remove(this))) {
				return null;
			}

			this.forceRemove();

			return this;
		});
	}

	forceRemove() {
		this.added = false;
	}

	public async fastRemove(): Promise<this | null> {
		return this.transition.new(async () => {
			if (!this.isLocal() || this.isLoaded()) {
				return null;
			}

			if (!(await ModuleManager.fastRemove(this))) {
				return null;
			}

			this.getModule().forceDisable();
			this.forceDelete();
			this.forceRemove();

			return this;
		});
	}

	public async dispose() {
		this.module.instances.delete(this.getVersion());
		if (this.module.instances.size === 0) {
			this.module.parent!.removeChild(this.getModuleIdentifier());
			this.module.parent = null;
		}
	}
	public async ensureMetadata() {
		if (!this.metadata) {
			try {
				const storeUrl = this.getMetadataURL()!;
				const metadata = await fetchJson<Metadata>(storeUrl);
				this.updateMetadata(metadata);
			} catch (e) {
				throw new Error(
					`couldn't load metadata for module '${this.getIdentifier()}'`,
					{ cause: e },
				);
			}
		}
	}
}

export const INTERNAL_MIXIN_LOADER: MixinLoader = {
	awaitedMixins: [],
};

export const INTERNAL_TRANSFORMER = createTransformer(INTERNAL_MIXIN_LOADER);

export async function loadLocalModules() {
	const localModules = [
		await fetchJson<_Vault>("/modules/vault.json"),
	].reduceRight<_Vault["modules"]>(
		(acc, vault) => deepMerge(acc, vault.modules),
		{},
	);

	return Promise.all(
		Object.keys(localModules).map((identifier) =>
			RootModule.INSTANCE.newDescendant(
				identifier,
				localModules[identifier],
				true,
			)
		),
	);
}

export async function loadRemoteModules() {
	const remoteModules = [
		await fetchJson<_Vault>(
			"https://raw.githubusercontent.com/spicetify/modules/main/vault.json",
		),
		await fetchJson<_Vault>(
			"https://raw.githubusercontent.com/spicetify/pkgs/main/vault.json",
		),
	].reduceRight<_Vault["modules"]>(
		(acc, vault) => deepMerge(acc, vault.modules),
		{},
	);

	await Promise.all(
		Object.keys(remoteModules).map(async (identifier) => {
			const module = await RootModule.INSTANCE.getDescendantOrNew(
				identifier,
			);
			await module.init(remoteModules[identifier].v, false);
		}),
	);
}

const getLoadableChildrenInstances = () =>
	Array.from(RootModule.INSTANCE.getDescendantsByBreadth())
		.map((module) => (module as Module).getEnabledInstance())
		.filter(
			(instance) => instance?.canLoad(),
		) as ModuleInstance[];

export const enableAllLoadableMixins = () =>
	Promise.all(
		getLoadableChildrenInstances().map((instance) => instance._loadMixins()),
	);

export const enableAllLoadable = () =>
	Promise.all(
		getLoadableChildrenInstances().map((instance) => instance.load()),
	);
