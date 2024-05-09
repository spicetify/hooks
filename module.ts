/* Copyright © 2024
 *      Delusoire <deluso7re@outlook.com>
 *
 * This file is part of bespoke/hooks.
 *
 * bespoke/hooks is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * bespoke/hooks is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with bespoke/hooks. If not, see <https://www.gnu.org/licenses/>.
 */

import { createTransformer } from "./transform.js";
import { deepMerge, fetchJSON } from "./util.js";

type ModuleIdentifier = string;
type StoreIdentifier = string;

interface MetadataURL {
	local?: string;
	remote?: string;
}

type Author = string;
type Name = string;
type Version = string;

type ByAuthors = Record<Author, ByNames>;
type ByNames = Record<Name, ByVersions>;
interface ByVersions {
	enabled: Version;
	metadatas: Record<Version, MetadataURL>;
}

interface Vault {
	modules: ByAuthors;
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
	dependencies: string[];
	spotifyVersions?: string;
}

const dummy_metadata = Object.freeze({
	name: "Placeholder",
	tags: [],
	preview: "https://www.getdummyimage.com/400/400",
	version: "v0",
	authors: ["John Doe", "Jane Doe"],
	description: "This is a dummy Module",
	readme: "https://example.com",
	entries: {},
	dependencies: [],
	isDummy: true,
});

export class Module {
	static registry = new Map<ModuleIdentifier, Module>();

	static getModules() {
		return Array.from(Module.registry.values());
	}

	static async enableAllLoadableMixins() {
		console.time("onSpotifyPreInit");
		const modules = Module.getModules();
		await Promise.all(modules.map(module => module.getEnabledLoadableModule()?.enableMixins()));
		console.timeEnd("onSpotifyPreInit");
	}

	static async enableAllLoadable() {
		console.time("onSpotifyPostInit");
		const modules = Module.getModules();
		await Promise.all(modules.map(module => module.getEnabledLoadableModule()?.enable()));
		console.timeEnd("onSpotifyPostInit");
	}

	constructor(
		public author: string,
		public name: string,
		public enabled: string | null,
		public loadableModuleByVersion: Record<Version, LoadableModule>,
	) {
		const identifier = this.getModuleIdentifier();
		if (Module.registry.has(identifier)) {
			throw new Error(`A module with the same identifier "${identifier}" is already registered`);
		}
		Module.registry.set(identifier, this);
	}

	static async fromVault(author: string, name: string, enabled: string | null, metadataURLsByVersion: Record<Version, MetadataURL>) {
		if (!enabled?.length) {
			enabled = null;
		}

		const loadableModuleByVersion = Object.fromEntries(
			await Promise.all(
				Object.entries(metadataURLsByVersion).map(async ([version, metadatas]) => [
					version,
					await LoadableModule.fromMetadataURLs(metadatas, `${author}/${name}/${version}` === enabled),
				]),
			),
		);

		return new Module(author, name, enabled, loadableModuleByVersion);
	}

	public getModuleIdentifier() {
		return `${this.author}/${this.name}`;
	}

	public getEnabledLoadableModule(): LoadableModule {
		// @ts-ignore
		return this.loadableModuleByVersion[this.enabled];
	}

	// ?
	public updateEnabled(enabled: string | null, syncWithFS = false) {
		this.enabled = enabled;
		syncWithFS && ModuleManager.enable({ authors: [this.author], name: this.name, version: enabled } as Metadata);
	}
}

export class MixinModule {
	private _transformer = createTransformer(this);

	get transformer() {
		return this._transformer;
	}

	public awaitedMixins = new Array<Promise<void>>();

	static INTERNAL = new MixinModule({
		name: "internal",
		tags: ["internal"],
		preview: "",
		version: "dev",
		authors: ["internal"],
		readme: "",
		entries: {},
		description: "internal",
		dependencies: [],
	});

	constructor(public metadata: Metadata) {}
}

export class LoadableModule extends MixinModule {
	public unloadJS: (() => Promise<void>) | null = null;
	public unloadCSS: (() => void) | null = null;
	private mixinsEnabled = false;
	private loading: Promise<void> | undefined;
	private dependants = new Set<LoadableModule>();
	private enabled = false;

	public getName() {
		return this.metadata.name;
	}

	public getAuthor() {
		return this.metadata.authors[0];
	}

	constructor(
		metadata: Metadata,
		public localMetadataURL?: string,
		public remoteMetadataURL?: string,
	) {
		super(metadata);
	}

	static async fromMetadataURLs(metadatas: MetadataURL, shouldEnableAtStartup = false) {
		const metadata = shouldEnableAtStartup && metadatas.local ? await fetchJSON<Metadata>(metadatas.local) : dummy_metadata;

		const m = new LoadableModule(metadata, metadatas.local, metadatas.remote);
		// @ts-ignore
		if (metadata.isDummy) {
			const url = metadatas.local ?? metadatas.remote;
			if (url) {
				fetchJSON<Metadata>(url).then(metadata => m.updateMetadata(metadata));
			}
		}

		return m;
	}

	// ?
	public updateMetadata(metadata: Metadata) {
		this.metadata = metadata;
	}

	public getModuleIdentifier() {
		return `${this.getAuthor()}/${this.getName()}`;
	}

	private getRelPath(rel: string) {
		return `/modules/${this.getModuleIdentifier()}/../${rel}`;
	}

	private async loadMixins() {
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
		Promise.all(this.awaitedMixins).then(() => console.timeEnd(`${this.getModuleIdentifier()}#awaitMixins`));
	}

	private async loadJS() {
		const entry = this.metadata.entries.js;
		if (!entry) {
			return;
		}

		this.unloadJS = async () => {
			this.unloadJS = null;
		};

		console.time(`${this.getModuleIdentifier()}#loadJS`);

		try {
			const fullPath = this.getRelPath(entry);
			const module = await import(fullPath);
			const dispose = await module.default?.(this);
			const unloadJS = this.unloadJS;
			this.unloadJS = async () => {
				await dispose?.();
				await unloadJS();
			};
		} catch (e) {
			this.unloadJS();
			console.error(`Error loading ${this.getModuleIdentifier()}:`, e);
		}

		console.timeEnd(`${this.getModuleIdentifier()}#loadJS`);
	}

	private loadCSS() {
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
			this.unloadCSS = () => {
				this.unloadCSS = null;
				document.getElementById(id)?.remove();
			};
		}
	}

	private canEnableRecur(mixinPhase = false) {
		if (!mixinPhase && !this.mixinsEnabled && this.metadata.entries.mixin) {
			return false;
		}
		if (!this.enabled) {
			for (const dependency of this.metadata.dependencies) {
				const module = Module.registry.get(dependency)?.getEnabledLoadableModule();
				if (!module?.canEnableRecur(mixinPhase)) {
					return false;
				}
			}
		}
		return true;
	}

	private async enableMixinsRecur() {
		if (this.mixinsEnabled) {
			return this.loading;
		}
		this.mixinsEnabled = true;
		let finishLoading: () => void;
		this.loading = new Promise(res => {
			finishLoading = res;
		});

		await Promise.all(
			this.metadata.dependencies.map(dependency => {
				const module = Module.registry.get(dependency)!.getEnabledLoadableModule()!;
				module.dependants.add(this);
				return module.enableMixinsRecur();
			}),
		);

		await this.loadMixins();

		// @ts-ignore
		finishLoading();
		this.loading = undefined;
	}

	private async enableRecur(syncWithFS = false) {
		if (this.enabled) {
			return this.loading;
		}
		this.enabled = true;
		let finishLoading: () => void;
		this.loading = new Promise(res => {
			finishLoading = res;
		});

		await Promise.all(
			this.metadata.dependencies.map(dependency => {
				const module = Module.registry.get(dependency)!.getEnabledLoadableModule()!;
				return module.enableRecur(syncWithFS);
			}),
		);

		Module.registry.get(this.getModuleIdentifier())!.updateEnabled(this.metadata.version, syncWithFS);
		await this.loadCSS();
		await Promise.all(this.awaitedMixins);
		await this.loadJS();

		// @ts-ignore
		finishLoading();
		this.loading = undefined;
	}

	private canDisableRecur() {
		if (this.enabled) {
			for (const dependant of this.dependants) {
				if (!dependant.canDisableRecur()) {
					return false;
				}
			}
		}
		return true;
	}

	private async disableRecur(syncWithFS = false) {
		if (!this.enabled) {
			return this.loading;
		}
		this.enabled = false;
		let finishLoading: () => void;
		this.loading = new Promise(res => {
			finishLoading = res;
		});

		await Promise.all(Array.from(this.dependants).map(dependant => dependant.disableRecur()));

		Module.registry.get(this.getModuleIdentifier())!.updateEnabled(null, syncWithFS);
		await this.unloadCSS?.();
		await this.unloadJS?.();

		// @ts-ignore
		finishLoading();
		this.loading = undefined;
	}

	async enableMixins() {
		if (this.mixinsEnabled) {
			await this.loading;
			return false;
		}
		if (this.canEnableRecur(true)) {
			await this.enableMixinsRecur();
			return true;
		}

		console.warn("Can't enable mixins for", this.getModuleIdentifier(), " reason: Dependencies not met");
		return false;
	}

	async enable(send = false) {
		if (this.enabled) {
			await this.loading;
			return false;
		}
		if (this.canEnableRecur(false)) {
			await this.enableRecur(send);
			return true;
		}

		console.warn("Can't enable", this.getModuleIdentifier(), " reason: Dependencies not met");
		return false;
	}

	async disable(syncWithFS = false) {
		if (!this.enabled) {
			await this.loading;
			return false;
		}
		if (this.canDisableRecur()) {
			await this.disableRecur(syncWithFS);
			return true;
		}

		console.warn("Can't disable", this.getModuleIdentifier(), " reason: Module required by enabled dependencies");
		return false;
	}

	async dispose(syncWithFS = false) {
		await this.disable();
		for (const dependency of this.metadata.dependencies) {
			const module = Module.registry.get(dependency)!.getEnabledLoadableModule()!;
			module.dependants.delete(this);
		}
		Module.registry.delete(this.getModuleIdentifier());
		syncWithFS && ModuleManager.remove(this.metadata);
	}
}

const bespokeProtocol = "https://bespoke.delusoire.workers.dev/protocol/";
const bespokeScheme = "bespoke";

let daemonConn: WebSocket | undefined;
async function tryConnectToDaemon() {
	const ws = new WebSocket("ws://localhost:7967/protocol");
	let cb: { res: (e: Event) => void; rej: (e: Event) => void };
	const p = new Promise((res, rej) => {
		cb = { res, rej };
	});
	ws.onopen = e => cb.res(e);
	ws.onclose = e => cb.rej(e);
	return p
		.then(() => {
			daemonConn = ws;
		})
		.catch(() => {
			daemonConn = undefined;
		});
}
tryConnectToDaemon();

// TODO: Use protocol buffers instead?
const sendProtocolMessage = (...messages: string[]) => {
	const buffer = messages.join(":");
	if (daemonConn) {
		daemonConn.send(buffer);
	} else {
		open(bespokeProtocol + buffer);
	}
};

function getModuleIdentifierFromMetadata(metadata: Metadata) {
	return `${metadata.authors[0]}:${metadata.name}`;
}

function getStoreIdentifierFromMetadata(metadata: Metadata): StoreIdentifier {
	return `${getModuleIdentifierFromMetadata(metadata)}:${metadata.version}`;
}

export const ModuleManager = {
	add(murl: string) {
		sendProtocolMessage(bespokeScheme, "add", murl);
	},
	remove(metadata: Metadata) {
		sendProtocolMessage(bespokeScheme, "remove", getStoreIdentifierFromMetadata(metadata));
	},
	enable(metadata: Metadata) {
		sendProtocolMessage(bespokeScheme, "enable", getStoreIdentifierFromMetadata(metadata));
	},
	disable(metadata: Metadata) {
		sendProtocolMessage(bespokeScheme, "disable", getStoreIdentifierFromMetadata(metadata));
	},
};

const lock: Vault = deepMerge(await fetchJSON("/modules/vault.json"), await fetchJSON("/hooks/repo.json"));
await Promise.all(
	Object.entries(lock.modules).flatMap(([author, byNames]) =>
		Object.entries(byNames).flatMap(([name, { enabled, metadatas }]) => Module.fromVault(author, name, enabled, metadatas)),
	),
);
