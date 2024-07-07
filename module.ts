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
	preview: string;
	version: string;
	authors: string[];
	description: string;
	readme: string;
	entries: {
		js?: string;
		css?: string;
	};
	hasMixins: boolean;
	dependencies: Record<string, string>;
}

const getLoadableChildrenInstances = () =>
	RootModule.INSTANCE.getChildren().map((module) => module.getEnabledInstance()).filter(
		(instance) => instance?.canLoad(),
	) as LocalModuleInstance[];

export const enableAllLoadableMixins = () =>
	Promise.all(getLoadableChildrenInstances().map((instance) => instance.loadMixins()));

export const enableAllLoadable = () =>
	Promise.all(getLoadableChildrenInstances().map((instance) => instance.load()));

export abstract class Module<
	C extends Module<any>,
	I extends ModuleInstance<Module<C, I>> = ModuleInstance<Module<C, any>>,
> {
	public instances = new Map<Version, I>();

	constructor(
		public parent: Module<Module<C, I>> | null,
		protected children: Record<ModuleIdentifier, C>,
		private identifier: ModuleIdentifier,
	) {}

	public getIdentifier(): ModuleIdentifier {
		return this.identifier;
	}

	public abstract newChild(identifier: ModuleIdentifier, module: _Module): Promise<C>;

	public getChild(identifier: ModuleIdentifier): C | undefined {
		return this.children[identifier];
	}

	public async getChildOrNew(identifier: ModuleIdentifier): Promise<C> {
		return this.getChild(identifier) ?? await this.newChild(identifier, { enabled: "", v: {} });
	}

	public setChild(identifier: ModuleIdentifier, child: C) {
		this.children[identifier] = child;
	}

	public removeChild(identifier: ModuleIdentifier) {
		delete this.children[identifier];
	}

	public getChildren() {
		return Object.values(this.children);
	}

	public getDescendants(identifier: ModuleIdentifier): Array<Module<any, ModuleInstance<any>>> {
		if (identifier === this.identifier) {
			return [this];
		}
		return this.getChildren().filter((child) => child.identifier.startsWith(identifier)).flatMap((child) =>
			child.getDescendants(identifier)
		);
	}

	public *getAllDescendantsByBreadth(): Generator<Module<Module<any>>> {
		const i: Array<Module<Module<any>>> = [this];

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
		const reducedIdentifier = this.identifier.slice(this.parent.identifier.length);
		return [...ancestry, reducedIdentifier];
	}

	public abstract newInstance(version: Truthy<Version>, store: _Store): Promise<I>;

	public async init(versions: _Module["v"]) {
		await Promise.all(
			Object.entries(versions)
				.map(([version, store]) => this.newInstance(version, store)),
		);

		this.parent!.setChild(this.identifier, this);

		return this;
	}
}

export class RootModule extends Module<LocalModule, never> {
	override newChild(identifier: ModuleIdentifier, module: _Module): Promise<LocalModule> {
		const localModule = new LocalModule(this, {}, identifier, module.enabled);

		return localModule.init(module.v);
	}

	override newInstance(version: Truthy<Version>, store: _Store): Promise<never> {
		throw new Error("RootModule can't have instances");
	}
	public static INSTANCE = new RootModule();

	private constructor() {
		super(null, {}, "");
		Object.freeze(this.instances);
	}
}

export class RemoteModule extends Module<RemoteModule, RemoteModuleInstance> {
	static fromModule(
		parent: Module<any>,
		identifier: ModuleIdentifier,
		module: _Module,
	): Promise<RemoteModule> {
		const remoteModule = new RemoteModule(parent, {}, identifier);

		return remoteModule.init(module.v);
	}

	override newChild(identifier: ModuleIdentifier, module: _Module) {
		return RemoteModule.fromModule(this, identifier, module);
	}

	override async newInstance(version: Truthy<Version>, { artifacts, checksum }: _Store) {
		const remoteModuleInstance = new RemoteModuleInstance(this, version, null, artifacts, checksum);

		this.instances.set(version, remoteModuleInstance);

		return remoteModuleInstance;
	}
}

export class LocalModule extends Module<RemoteModule, LocalModuleInstance> {
	constructor(
		parent: RootModule,
		children: Record<ModuleIdentifier, RemoteModule>,
		identifier: ModuleIdentifier,
		public enabled: Version,
	) {
		super(parent, children, identifier);
	}

	override newChild(identifier: ModuleIdentifier, module: _Module) {
		return RemoteModule.fromModule(this, identifier, module);
	}

	override async newInstance(version: Truthy<Version>, { artifacts, installed, checksum }: _Store) {
		const localModuleInstance = new LocalModuleInstance(this, version, null, artifacts, checksum, installed);

		this.instances.set(version, localModuleInstance);

		if (localModuleInstance.isEnabled()) {
			await localModuleInstance.onEnable();
		}

		return localModuleInstance;
	}

	public canEnable(instance: LocalModuleInstance) {
		const enabledInstance = this.getEnabledInstance();
		return !instance.isEnabled() && instance.isInstalled() &&
			(!enabledInstance || this.canDisable(enabledInstance));
	}

	public enable(instance: LocalModuleInstance) {
		if (!this.canEnable(instance)) {
			return Promise.resolve(false);
		}

		return instance.transition.new(async () => {
			const ok = await ModuleManager.enable(instance);
			if (ok) {
				this.enabled = instance.getVersion();
				await instance.onEnable();
			}
			return ok;
		});
	}

	public canDisable(instance: LocalModuleInstance) {
		return instance.isEnabled() && !instance.isLoaded();
	}

	public disable() {
		const enabledInstance = this.getEnabledInstance();
		if (!enabledInstance || !this.canDisable(enabledInstance)) {
			return Promise.resolve(false);
		}

		return enabledInstance.transition.new(async () => {
			const ok = await ModuleManager.disable(this);
			if (ok) {
				this.enabled = "";
				this.children = {};
			}
			return ok;
		});
	}

	public getEnabledVersion(): Version {
		return this.enabled;
	}

	public getEnabledInstance(): LocalModuleInstance | undefined {
		return this.getEnabledVersion() ? this.instances.get(this.getEnabledVersion()!)! : undefined;
	}
}

export interface MixinLoader {
	awaitedMixins: Promise<void>[];
}

export abstract class ModuleInstance<M extends Module<any> = Module<any>> {
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
		const remoteMetadataURL = remoteArtifactURL.replace(/\.zip$/, ".metadata.json");
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

export class RemoteModuleInstance extends ModuleInstance<RemoteModule> {
	public getMetadataURL() {
		return this.getRemoteMetadataURL();
	}

	public async add() {
		if (!(await ModuleManager.add(this))) {
			return null;
		}

		const localModule = await RootModule.INSTANCE.getChildOrNew(this.getModuleIdentifier());
		const store: _Store = { installed: false, artifacts: this.artifacts, checksum: this.checksum };
		return await localModule.newInstance(this.version, store);
	}
}

export class LocalModuleInstance extends ModuleInstance<LocalModule> implements MixinLoader {
	public async loadProviders() {
		const vault = await fetchJson<_Vault>(this.getRelPath("vault.json")!).catch(() => null);
		const provider = vault?.modules ?? {};

		Object.keys(provider)
			// TODO: revisit this check
			.filter((i) => i.startsWith(this.getModuleIdentifier()))
			.forEach(async (identifier) => this.module.newChild(identifier, provider[identifier]));
	}

	private _transformer = createTransformer(this);
	get transformer() {
		return this._transformer;
	}

	public awaitedMixins = new Array<Promise<void>>();

	_unloadJs: (() => Promise<void>) | null = null;
	_unloadCss: (() => void) | null = null;
	private preloaded = false;
	private loaded = false;
	private jsIndex: any;

	public transition = new Transition();
	private dependants = new Set<LocalModuleInstance>();

	public isLoaded() {
		return this.loaded;
	}

	public isInstalled() {
		return this.installed;
	}

	constructor(
		module: LocalModule,
		version: Truthy<Version>,
		metadata: Metadata | null,
		artifacts: Array<string>,
		checksum: string,
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
		return `/modules/${this.getModuleIdentifier()}/metadata.json`;
	}

	public getMetadataURL() {
		return this.getLocalMetadataURL() ?? this.getRemoteMetadataURL();
	}

	async #loadJsMixins() {
		await this.#loadJsIndex();
		if (!this.jsIndex) {
			return;
		}

		console.time(`${this.getModuleIdentifier()}#loadJsMixins`);
		await this.jsIndex.loadMixins?.(this.transformer);
		console.timeEnd(`${this.getModuleIdentifier()}#loadJsMixins`);

		console.groupCollapsed(`${this.getModuleIdentifier()}#awaitJsMixins`);
		console.info(...this.awaitedMixins);
		console.groupEnd();

		console.time(`${this.getModuleIdentifier()}#awaitJsMixins`);
		Promise.all(this.awaitedMixins).then(() =>
			console.timeEnd(`${this.getModuleIdentifier()}#awaitJsMixins`)
		);
	}

	async #loadJs() {
		if (!this.preloaded) {
			await this.#loadJsIndex();
		}
		if (!this.jsIndex) {
			return;
		}

		this._unloadJs = async () => {
			this._unloadJs = null;
		};

		console.time(`${this.getModuleIdentifier()}#loadJs`);
		try {
			const dispose = await this.jsIndex.load?.(this);
			const unloadJS = this._unloadJs;
			this._unloadJs = async () => {
				await dispose?.();
				await unloadJS();
			};
		} catch (e) {
			this._unloadJs();
			console.error(`Error loading \`${this.getModuleIdentifier()}\`:`, e);
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

	private canPreloadRecur() {
		return this.canLoadRecur(true);
	}

	private canLoadRecur(isPreload = false, range = ">=0.0.0-0") {
		if (!this.metadata) {
			throw `can't load \`${this.getModuleIdentifier()}\` because it has no metadata`;
		}
		if (!isPreload && !this.preloaded && this.metadata.hasMixins) {
			throw `can't load \`${this.getModuleIdentifier()}\` because it has unloaded mixins`;
		}
		if (!this.loaded) {
			if (!this.isEnabled() || !this.installed || !satisfies(this.version, range)) {
				throw `can't load \`${this.getModuleIdentifier()}\` because it is not enabled, installed, or satisfies the range \`${range}\``;
			}
			for (const [dependency, range] of Object.entries(this.metadata.dependencies)) {
				if (dependency === "spotify") {
					return satisfies(SPOTIFY_VERSION, range);
				}
				const module = RootModule.INSTANCE.getChild(dependency)?.getEnabledInstance();
				if (!module?.canLoadRecur(isPreload, range)) {
					return false;
				}
			}
		}
		return true;
	}

	private async preloadRecur() {
		if (this.preloaded) {
			return this.transition.block();
		}
		this.preloaded = true;
		const resolve = this.transition.extend();

		await Promise.all(
			Object.keys(this.metadata!.dependencies).map((dependency) => {
				const module = RootModule.INSTANCE.getChild(dependency)!.getEnabledInstance()!;
				return module.preloadRecur();
			}),
		);

		await this.#loadJsMixins();

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
				const module = RootModule.INSTANCE.getChild(dependency)!.getEnabledInstance()!;
				module.dependants.add(this);
				return module.loadRecur();
			}),
		);

		await this.#loadCss();
		await Promise.all(this.awaitedMixins);
		await this.#loadJs();

		resolve();
	}

	// ? As is, this always returns true. Recur Impl for easier future modification
	private canUnloadRecur() {
		if (this.loaded) {
			for (const dependant of this.dependants) {
				if (!dependant.canUnloadRecur()) {
					return false;
				}
			}
		}
		return true;
	}

	private async unloadRecur() {
		if (!this.loaded) {
			return this.transition.block();
		}
		this.loaded = false;
		this.preloaded = false;
		const resolve = this.transition.extend();

		for (const dependency of Object.keys(this.metadata!.dependencies)) {
			const module = RootModule.INSTANCE.getChild(dependency)!.getEnabledInstance()!;
			module.dependants.delete(this);
		}
		await Promise.all(Array.from(this.dependants).map((dependant) => dependant.unloadRecur()));

		await this._unloadJs?.();
		await this._unloadCss?.();

		resolve();
	}

	async loadMixins() {
		await this.transition.block();
		if (this.preloaded) {
			return false;
		}
		try {
			if (this.canPreloadRecur()) {
				await this.preloadRecur();
				return true;
			}
		} catch (e) {
			console.error(`Can't inject mixins for \`${this.getModuleIdentifier()}\`, reason:\n`, e);
		}
		return false;
	}

	public canInstallRemove() {
		return !this.installed;
	}

	public async install() {
		await this.transition.block();

		if (!this.canInstallRemove()) {
			return null;
		}

		const resolve = this.transition.extend();

		if (!(await ModuleManager.install(this))) {
			return null;
		}

		this.installed = true;
		resolve();

		return this;
	}

	public isEnabled() {
		return this.getVersion() === this.module.getEnabledVersion();
	}

	public async onEnable() {
		if (this.installed) {
			await this.loadProviders();
			const storeUrl = this.getMetadataURL()!;
			const metadata = await fetchJson<Metadata>(storeUrl);
			this.updateMetadata(metadata);
		}
	}

	public canLoad() {
		return this.canDelete() && this.isEnabled();
	}

	public async load() {
		await this.transition.block();
		if (this.loaded) {
			return false;
		}
		try {
			if (this.canLoadRecur(false)) {
				await this.loadRecur();
				return true;
			}
		} catch (e) {
			console.error(`Can't load \`${this.getModuleIdentifier()}\`, reason:\n`, e);
		}
		return false;
	}

	public canUnload() {
		return this.loaded && !this.isEnabled();
	}

	public async unload() {
		await this.transition.block();
		if (!this.canUnload()) {
			return false;
		}
		try {
			if (this.canUnloadRecur()) {
				await this.unloadRecur();
				return true;
			}
		} catch (e) {
			console.error(`Can't unload \`${this.getModuleIdentifier()}\`, reason:\n`, e);
		}
		return false;
	}

	public canDelete() {
		return this.installed && !this.loaded;
	}

	public async delete() {
		await this.transition.block();

		if (!this.canDelete()) {
			return null;
		}

		const resolve = this.transition.extend();

		if (!(await ModuleManager.delete(this))) {
			return null;
		}

		this.installed = false;
		resolve();

		return this;
	}

	public async remove() {
		if (!this.canInstallRemove()) {
			return null;
		}

		if (!(await ModuleManager.remove(this))) {
			return null;
		}

		this.module.instances.delete(this.getVersion());
		if (this.module.instances.size === 0) {
			this.module.parent = null;
			RootModule.INSTANCE.removeChild(this.module.getIdentifier());
		}
		return this;
	}
}

export const INTERNAL_MIXIN_LOADER: MixinLoader = {
	awaitedMixins: [],
};

export const INTERNAL_TRANSFORMER = createTransformer(INTERNAL_MIXIN_LOADER);

const vaults = [
	await fetchJson<_Vault>("/modules/vault.json"),
	await fetchJson<_Vault>("https://raw.githubusercontent.com/spicetify/modules/main/vault.json"),
	await fetchJson<_Vault>("https://raw.githubusercontent.com/spicetify/pkgs/main/vault.json"),
];
const provider = vaults.reduce<_Vault["modules"]>((acc, vault) => deepMerge(acc, vault.modules), {});
await Promise.all(
	Object.keys(provider).map(async (identifier) =>
		RootModule.INSTANCE.newChild(identifier, provider[identifier])
	),
);
