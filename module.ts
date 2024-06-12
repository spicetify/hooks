/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { ModuleManager } from "./protocol.js";
import { satisfies } from "./semver/satisfies.js";
import { SPOTIFY_VERSION } from "./static.js";
import { createTransformer } from "./transform.js";
import { deepMerge, fetchJSON } from "./util.js";

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
	providers: Array<string>;
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
		mixin?: string;
	};
	dependencies: Record<string, string>;
}

const getEnabledChildrenInstances = () =>
	RootModule.INSTANCE.getChildren().map((module) => module.getEnabledInstance()).filter(
		Boolean,
	) as LocalModuleInstance[];

export const enableAllLoadableMixins = () =>
	Promise.all(getEnabledChildrenInstances().map((instance) => instance.loadMixins()));

export const enableAllLoadable = () =>
	Promise.all(getEnabledChildrenInstances().map((instance) => instance.load()));

export abstract class Module<
	C extends Module<any>,
	I extends ModuleInstance<Module<C, I>> = ModuleInstance<Module<C, any>>,
> {
	public instances = new Map<Version, I>();

	constructor(
		private parent: Module<Module<C, I>>,
		private children: Record<ModuleIdentifier, C>,
		private identifier: ModuleIdentifier,
		private enabled: Version,
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

	public getAllDescendantsByBreadth(): Array<Module<Module<any>>> {
		const i: Array<Module<Module<any>>> = [this];
		const o: Array<Module<Module<any>>> = [];

		while (i.length) {
			const e = i.shift()!;
			o.push(e);
			i.push(...e.getChildren());
		}

		return o;
	}

	public getHeritage(): ModuleIdentifier[] {
		const ancestry = this.parent?.getHeritage() ?? [];
		return [...ancestry, this.identifier];
	}

	public abstract newInstance(version: Truthy<Version>, store: _Store): Promise<I>;

	public getEnabledVersion(): Version {
		return this.enabled;
	}

	public getEnabledInstance(): I | undefined {
		return this.getEnabledVersion() ? this.instances.get(this.getEnabledVersion()!)! : undefined;
	}

	public async updateEnabled(enabled: Version) {
		this.enabled = enabled;
	}

	public async disable() {
		const ok = await ModuleManager.disable(this);
		if (ok) {
			this.updateEnabled("");
			this.children = {};
		}
		return ok;
	}

	public async init(versions: _Module["v"]) {
		await Promise.all(
			Object.entries(versions)
				.map(([version, store]) => this.newInstance(version, store)),
		);

		this.parent.setChild(this.identifier, this);

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
	public static INSTANCE = new RootModule({});

	constructor(children: Record<string, LocalModule>) {
		super(null as any, children, "", "");
		Object.freeze(this.instances);
	}
}

export class RemoteModule extends Module<RemoteModule, RemoteModuleInstance> {
	static fromModule(
		parent: Module<any>,
		identifier: ModuleIdentifier,
		module: _Module,
	): Promise<RemoteModule> {
		const remoteModule = new RemoteModule(parent, {}, identifier, module.enabled);

		return remoteModule.init(module.v);
	}

	override newChild(identifier: ModuleIdentifier, module: _Module) {
		return RemoteModule.fromModule(this, identifier, module);
	}

	override async newInstance(version: Truthy<Version>, { artifacts, providers }: _Store) {
		const remoteModuleInstance = new RemoteModuleInstance(this, version, null, artifacts, providers);

		this.instances.set(version, remoteModuleInstance);

		if (remoteModuleInstance.isEnabled()) {
			requestIdleCallback(async () => remoteModuleInstance.loadProviders());
		}

		return remoteModuleInstance;
	}
}

export class LocalModule extends Module<RemoteModule, LocalModuleInstance> {
	override newChild(identifier: ModuleIdentifier, module: _Module) {
		return RemoteModule.fromModule(this, identifier, module);
	}

	override async newInstance(version: Truthy<Version>, { artifacts, installed, providers }: _Store) {
		const shouldEnableAtStartup = version === this.getEnabledVersion();
		const metadata = shouldEnableAtStartup && installed
			? await fetchJSON<Metadata>(`/modules/${this.getIdentifier()}/metadata.json`)
			: null;

		const localModuleInstance = new LocalModuleInstance(
			this,
			version,
			metadata,
			artifacts,
			providers,
			installed,
		);

		this.instances.set(version, localModuleInstance);

		if (localModuleInstance.isEnabled()) {
			requestIdleCallback(() => localModuleInstance.loadProviders());
		}

		return localModuleInstance;
	}
}

export interface MixinLoader {
	awaitedMixins: Promise<void>[];
}

export class ModuleInstance<M extends Module<any> = Module<any>> {
	public getName() {
		return this.metadata?.name ?? null;
	}

	public getAuthor() {
		return this.metadata?.authors[0] ?? null;
	}

	public getVersion() {
		return this.version;
	}

	public getRemoteArtifact(): string | undefined {
		return this.artifacts[0];
	}

	public getRemoteMetadata() {
		return this.getRemoteArtifact()?.replace(/\.zip$/, ".metadata.json");
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
		public providers: Array<string>,
	) {}

	// ?
	public updateMetadata(metadata: Metadata) {
		this.metadata = metadata;
	}

	public isEnabled() {
		return this.getVersion() === this.module.getEnabledVersion();
	}

	public async loadProviders() {
		const vaults = await Promise.all(this.providers.map(fetchJSON<_Vault>));
		const provider = vaults.reduce(
			(acc, vault) => deepMerge(vault.modules, acc),
			{} as _Vault["modules"],
		);

		// TODO: revisit this check
		Object.keys(provider).filter((i) => i.startsWith(this.getModuleIdentifier())).forEach(async (
			identifier,
		) => this.module.newChild(identifier, provider[identifier]));
	}

	public enable() {
		this.getModule().updateEnabled(this.getVersion());
		this.loadProviders();
	}
}

export class RemoteModuleInstance extends ModuleInstance<RemoteModule> {
	public async add() {
		if (!(await ModuleManager.add(this))) {
			return null;
		}

		const localModule = await RootModule.INSTANCE.getChildOrNew(this.getModuleIdentifier());
		const store: _Store = { installed: true, artifacts: this.artifacts, providers: this.providers };
		return await localModule.newInstance(this.version, store);
	}
}

export class LocalModuleInstance extends ModuleInstance<LocalModule> implements MixinLoader {
	private _transformer = createTransformer(this);

	get transformer() {
		return this._transformer;
	}

	public awaitedMixins = new Array<Promise<void>>();

	_unloadJS: (() => Promise<void>) | null = null;
	_unloadCSS: (() => void) | null = null;
	private preloaded = false;
	private loaded = false;
	private transition: Promise<void> | undefined;
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
		providers: Array<string>,
		private installed: boolean,
	) {
		super(module, version, metadata, artifacts, providers);
	}

	public getRelPath(rel: string) {
		return `/modules/${this.getModuleIdentifier()}/${rel}`;
	}

	private async _loadMixins() {
		const entry = this.metadata?.entries.mixin;
		if (!entry) {
			return;
		}

		console.time(`${this.getModuleIdentifier()}#loadMixin`);
		const mixin = await import(this.getRelPath(entry));
		await mixin.default(this.transformer);
		console.timeEnd(`${this.getModuleIdentifier()}#loadMixin`);

		console.groupCollapsed(`${this.getModuleIdentifier()}#awaitMixins`);
		console.info(...this.awaitedMixins);
		console.groupEnd();

		console.time(`${this.getModuleIdentifier()}#awaitMixins`);
		Promise.all(this.awaitedMixins).then(() => console.timeEnd(`${this.getModuleIdentifier()}#awaitMixins`));
	}

	private async _loadJS() {
		const entry = this.metadata?.entries.js;
		if (!entry) {
			return;
		}

		this._unloadJS = async () => {
			this._unloadJS = null;
		};

		console.time(`${this.getModuleIdentifier()}#loadJS`);

		try {
			const fullPath = this.getRelPath(entry);
			const module = await import(fullPath);
			const dispose = await module.default?.(this);
			const unloadJS = this._unloadJS;
			this._unloadJS = async () => {
				await dispose?.();
				await unloadJS();
			};
		} catch (e) {
			this._unloadJS();
			console.error(`Error loading ${this.getModuleIdentifier()}:`, e);
		}

		console.timeEnd(`${this.getModuleIdentifier()}#loadJS`);
	}

	private _loadCSS() {
		const entry = this.metadata?.entries.css;
		if (!entry) {
			return;
		}

		const id = `${this.getModuleIdentifier()}-styles`;
		const fullPath = this.getRelPath(entry);
		const link = document.createElement("link");
		link.id = id;
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = fullPath;
		document.head.append(link);
		this._unloadCSS = () => {
			this._unloadCSS = null;
			document.getElementById(id)?.remove();
		};
	}

	private canLoadRecur(isPreload = false, range = ">=0.0.0") {
		if (!this.metadata) {
			return false;
		}
		if (!isPreload && !this.preloaded && this.metadata.entries.mixin) {
			return false;
		}
		if (!this.loaded) {
			if (!this.isEnabled() || !satisfies(this.version, range)) {
				return false;
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
			return this.transition;
		}
		this.preloaded = true;
		const { promise, resolve } = Promise.withResolvers<void>();
		this.transition = promise;

		await Promise.all(
			Object.keys(this.metadata!.dependencies).map((dependency) => {
				const module = RootModule.INSTANCE.getChild(dependency)!.getEnabledInstance()!;
				return module.preloadRecur();
			}),
		);

		await this._loadMixins();

		resolve();
		this.transition = undefined;
	}

	private async loadRecur() {
		if (this.loaded) {
			return this.transition;
		}
		this.loaded = true;
		const { promise, resolve } = Promise.withResolvers<void>();
		this.transition = promise;

		await Promise.all(
			Object.keys(this.metadata!.dependencies).map((dependency) => {
				const module = RootModule.INSTANCE.getChild(dependency)!.getEnabledInstance()!;
				module.dependants.add(this);
				return module.loadRecur();
			}),
		);

		await this._loadCSS();
		await Promise.all(this.awaitedMixins);
		await this._loadJS();

		resolve();
		this.transition = undefined;
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
			return this.transition;
		}
		this.loaded = false;
		const { promise, resolve } = Promise.withResolvers<void>();
		this.transition = promise;

		for (const dependency of Object.keys(this.metadata!.dependencies)) {
			const module = RootModule.INSTANCE.getChild(dependency)!.getEnabledInstance()!;
			module.dependants.delete(this);
		}
		await Promise.all(Array.from(this.dependants).map((dependant) => dependant.unloadRecur()));

		await this._unloadCSS?.();
		await this._unloadJS?.();

		resolve();
		this.transition = undefined;
	}

	async loadMixins() {
		if (this.preloaded) {
			await this.transition;
			return false;
		}
		if (this.canLoadRecur(true)) {
			await this.preloadRecur();
			return true;
		}

		console.warn(
			"Can't enable mixins for",
			this.getModuleIdentifier(),
			"reason: Dependencies not met",
		);
		return false;
	}

	public async load() {
		if (this.loaded) {
			await this.transition;
			return false;
		}
		if (this.canLoadRecur(false)) {
			await this.loadRecur();
			return true;
		}

		console.warn("Can't enable", this.getModuleIdentifier(), "reason: Dependencies not met");
		return false;
	}

	public override async enable() {
		const ok = await ModuleManager.enable(this);
		if (ok) {
			super.enable();
		}
		return ok;
	}

	public async unload() {
		if (!this.loaded) {
			await this.transition;
			return false;
		}
		if (this.canUnloadRecur()) {
			await this.unloadRecur();
			return true;
		}

		console.warn(
			"Can't disable",
			this.getModuleIdentifier(),
			"reason: Module required by enabled dependencies",
		);
		return false;
	}

	public async remove() {
		if (!(await ModuleManager.remove(this))) {
			return null;
		}

		this.module.instances.delete(this.getVersion());
		if (Object.keys(this.module.instances).length === 0) {
			RootModule.INSTANCE.removeChild(this.getModuleIdentifier());
		}
		return this;
	}
}

export const INTERNAL_MIXIN_LOADER: MixinLoader = {
	awaitedMixins: [],
};

export const INTERNAL_TRANSFORMER = createTransformer(INTERNAL_MIXIN_LOADER);

const lock: _Vault = await fetchJSON("/modules/vault.json");
await Promise.all(Object.entries(lock.modules).flatMap((m) => RootModule.INSTANCE.newChild(...m)));
