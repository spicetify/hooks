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
	remotes: Array<string>;
	v: Record<Version, _Store>;
}

interface _Store {
	installed: boolean;
	artifacts: Array<string>;
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

const dummy_metadata = Object.freeze({
	name: "Placeholder",
	tags: [],
	preview: "https://www.getdummyimage.com/400/400",
	version: "0",
	authors: ["John Doe", "Jane Doe"],
	description: "This is a dummy Module",
	readme: "https://example.com",
	entries: {},
	dependencies: {},
	isDummy: true,
});

export class Module {
	private static registry = new Map<ModuleIdentifier, Module>();

	public static get(identifier: ModuleIdentifier) {
		return this.registry.get(identifier);
	}

	public static getOrCreate(identifier: ModuleIdentifier) {
		return this.registry.get(identifier) ?? new Module(identifier, "");
	}

	public static getAll() {
		return Array.from(Module.registry.values());
	}

	static async enableAllLoadableMixins() {
		console.time("onSpotifyPreInit");
		const modules = Module.getAll();
		await Promise.all(modules.map(module => module.getEnabledInstance()?.loadMixins()));
		console.timeEnd("onSpotifyPreInit");
	}

	static async enableAllLoadable() {
		console.time("onSpotifyPostInit");
		const modules = Module.getAll();
		await Promise.all(modules.map(module => module.getEnabledInstance()?.load()));
		console.timeEnd("onSpotifyPostInit");
	}

	public instances = new Map<Version, ModuleInstance>();

	constructor(
		private identifier: ModuleIdentifier,
		private enabled: Version,
	) {
		if (Module.registry.has(identifier)) {
			throw new Error(`A module with the same identifier "${identifier}" is already registered`);
		}
		Module.registry.set(identifier, this);
	}

	static async fromVault([identifier, { enabled, remotes, v: versions }]: [
		ModuleIdentifier,
		_Module,
	]) {
		if (!enabled) enabled = "";

		const m = new Module(identifier, enabled);

		await Promise.all(
			Object.entries(versions).map(async ([version, store]) => {
				const mi = await m.createInstance(version, store.installed);
				mi._addArtifacts(store.artifacts);
				return mi;
			}),
		);

		requestIdleCallback(() =>
			Promise.all(remotes.map(fetchJSON<Record<string, Array<string>>>))
				.then(repos => repos.reduce((a, b) => deepMerge(b, a), {}))
				.then(async versions => {
					for (const [version, metadatas] of Object.entries(versions)) {
						const mi = await m.getInstanceOrCreate(version);
						mi._addArtifacts(metadatas);
					}
				}),
		);

		return m;
	}

	public getIdentifier(): ModuleIdentifier {
		return this.identifier;
	}

	public getEnabledVersion(): Version {
		return this.enabled;
	}

	public getEnabledInstance(): ModuleInstance | null {
		return this.getEnabledVersion() ? this.instances.get(this.getEnabledVersion()!)! : null;
	}

	public async createInstance(version: Truthy<Version>, installed = false) {
		const shouldEnableAtStartup = version === this.enabled;
		const metadata =
			shouldEnableAtStartup && installed
				? await fetchJSON<Metadata>(`/modules/${this.getIdentifier()}/metadata.json`)
				: dummy_metadata;

		return new ModuleInstance(this, version, metadata, installed);
	}

	public async getInstanceOrCreate(version: Truthy<Version>) {
		return this.instances.get(version) ?? this.createInstance(version);
	}

	// ?
	public async updateEnabled(enabled: Version) {
		this.enabled = enabled;
	}

	public async disable() {
		const ok = await ModuleManager.disable(this);
		if (ok) {
			this.updateEnabled("");
		}
		return ok;
	}
}

export class MixinLoader {
	private _transformer = createTransformer(this);

	get transformer() {
		return this._transformer;
	}

	public awaitedMixins = new Array<Promise<void>>();

	static INTERNAL = new MixinLoader();
}

export class ModuleInstance extends MixinLoader {
	_unloadJS: (() => Promise<void>) | null = null;
	_unloadCSS: (() => void) | null = null;
	private preloaded = false;
	private loaded = false;
	private transition: Promise<void> | undefined;
	private dependants = new Set<ModuleInstance>();

	public artifacts = new Array<string>();

	_addArtifacts(artifacts: string[]) {
		this.artifacts.push(...artifacts);
	}

	public getName() {
		return this.metadata.name;
	}

	public getAuthor() {
		return this.metadata.authors[0];
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

	public isInstalled() {
		return this.installed;
	}

	public getModuleIdentifier() {
		return this.module.getIdentifier();
	}

	public getIdentifier(): StoreIdentifier {
		return `${this.getModuleIdentifier()}/${this.getVersion()}`;
	}

	public getModule(): Module {
		return this.module;
	}

	constructor(
		private module: Module,
		private version: Truthy<Version>,
		public metadata: Metadata,
		private installed: boolean,
	) {
		super();
		module.instances.set(version, this);
	}

	public isLoaded() {
		return this.loaded;
	}

	// ?
	public updateMetadata(metadata: Metadata) {
		this.metadata = metadata;
	}

	public getRelPath(rel: string) {
		return `/modules/${this.getModuleIdentifier()}/${rel}`;
	}

	private async _loadMixins() {
		const entry = this.metadata.entries.mixin;
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
		Promise.all(this.awaitedMixins).then(() =>
			console.timeEnd(`${this.getModuleIdentifier()}#awaitMixins`),
		);
	}

	private async _loadJS() {
		const entry = this.metadata.entries.js;
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
		const entry = this.metadata.entries.css;
		if (entry) {
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
	}

	public isEnabled() {
		return this.getVersion() === this.module.getEnabledVersion();
	}

	private canLoadRecur(isPreload = false, range = ">=0.0.0") {
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
				const module = Module.get(dependency)?.getEnabledInstance();
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
		let finishLoading!: () => void;
		this.transition = new Promise(res => {
			finishLoading = res;
		});

		await Promise.all(
			Object.keys(this.metadata.dependencies).map(dependency => {
				const module = Module.get(dependency)!.getEnabledInstance()!;
				return module.preloadRecur();
			}),
		);

		await this._loadMixins();

		finishLoading();
		this.transition = undefined;
	}

	private async loadRecur() {
		if (this.loaded) {
			return this.transition;
		}
		this.loaded = true;
		let finishTransition!: () => void;
		this.transition = new Promise(res => {
			finishTransition = res;
		});

		await Promise.all(
			Object.keys(this.metadata.dependencies).map(dependency => {
				const module = Module.get(dependency)!.getEnabledInstance()!;
				module.dependants.add(this);
				return module.loadRecur();
			}),
		);

		await this._loadCSS();
		await Promise.all(this.awaitedMixins);
		await this._loadJS();

		finishTransition();
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
		let finishTransition!: () => void;
		this.transition = new Promise(res => {
			finishTransition = res;
		});

		for (const dependency of Object.keys(this.metadata.dependencies)) {
			const module = Module.get(dependency)!.getEnabledInstance()!;
			module.dependants.delete(this);
		}
		await Promise.all(Array.from(this.dependants).map(dependant => dependant.unloadRecur()));

		await this._unloadCSS?.();
		await this._unloadJS?.();

		finishTransition();
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
			" reason: Dependencies not met",
		);
		return false;
	}

	public async add() {
		const remote = this.artifacts[0];
		if (!remote) {
			return false;
		}
		return await ModuleManager.add(this.artifacts[0]);
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

		console.warn("Can't enable", this.getModuleIdentifier(), " reason: Dependencies not met");
		return false;
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
			" reason: Module required by enabled dependencies",
		);
		return false;
	}

	public async dispose() {
		await this.unload();
		if (this.loaded) {
			return false;
		}
		this.module.instances.delete(this.getVersion());
		// if ( Object.keys( this.module.instances ).length === 0 ) {
		//    Module.delete( this.getModuleIdentifier() );
		// }
	}

	public async remove() {
		if (!(await this.dispose())) {
			return false;
		}
		return await ModuleManager.remove(this);
	}

	public async enable() {
		const ok = await ModuleManager.enable(this);
		if (ok) {
			this.getModule().updateEnabled(this.getVersion());
		}
		return ok;
	}
}

const lock: _Vault = await fetchJSON("/modules/vault.json");
await Promise.all(Object.entries(lock.modules).flatMap(Module.fromVault));
