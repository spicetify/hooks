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

interface Store {
   local: boolean;
   remote: string | null;
}

type Author = string;
type Name = string;
type Version = string;

type ByAuthors = Record<Author, ByNames>;
type ByNames = Record<Name, ByVersions>;
interface ByVersions {
   enabled: Version;
   v: Record<Version, Store>;
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
      private author: string,
      private name: string,
      public enabled: string | null,
      public loadableModuleByVersion: Record<Version, LoadableModule>,
   ) {
      const identifier = this.getModuleIdentifier();
      if (Module.registry.has(identifier)) {
         throw new Error(`A module with the same identifier "${identifier}" is already registered`);
      }
      Module.registry.set(identifier, this);
   }

   static async fromVault(
      author: string,
      name: string,
      enabled: string | null,
      metadataURLsByVersion: Record<Version, Store>,
   ) {
      if (!enabled?.length) {
         enabled = null;
      }

      const loadableModuleByVersion = Object.fromEntries(
         await Promise.all(
            Object.entries(metadataURLsByVersion).map(async ([version, store]) => {
               if (!store.remote?.length) {
                  store.remote = null;
               }
               return [
                  version,
                  await LoadableModule.fromModule(author, name, version, store, version === enabled),
               ];
            }),
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
   public async updateEnabled(enabled: string | null, syncWithFS: boolean) {
      this.enabled = enabled?.length ? enabled : null;
      if (syncWithFS) {
         await ModuleManager.enable(
            new LoadableModule(this.author, this.name, this.enabled ?? "", null as any, null as any, null),
         );
      }
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

   public getDisplayName() {
      return this.name;
   }

   public getName() {
      return this.name;
   }

   public getAuthor() {
      return this.author;
   }

   public getVersion() {
      return this.version;
   }

   constructor(
      private author: string,
      private name: string,
      private version: string,
      metadata: Metadata,
      public installed: boolean,
      public remoteMetadataURL: string | null,
   ) {
      super(metadata);
   }

   static async fromModule(
      author: string,
      name: string,
      version: string,
      store: Store,
      shouldEnableAtStartup = false,
   ) {
      const { local, remote } = store;
      const metadata =
         shouldEnableAtStartup && local
            ? await fetchJSON<Metadata>(`/modules/${author}/${name}/metadata.json`)
            : dummy_metadata;

      return new LoadableModule(author, name, version, metadata, local, remote?.length ? remote : null);
   }

   public isEnabled() {
      return this.enabled;
   }

   // ?
   public updateMetadata(metadata: Metadata) {
      this.metadata = metadata;
   }

   public getModuleIdentifier(): ModuleIdentifier {
      return `${this.getAuthor()}/${this.getName()}`;
   }

   public getStoreIdentifier(): StoreIdentifier {
      return `${this.getModuleIdentifier()}/${this.getVersion()}`;
   }

   private getRelPath(rel: string) {
      return `/modules/${this.getModuleIdentifier()}/${rel}`;
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

   // TODO: add check for spotifyVersions
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
      let finishLoading!: () => void;
      this.loading = new Promise(res => {
         finishLoading = res;
      });

      await Promise.all(
         this.metadata.dependencies.map(dependency => {
            const module = Module.registry.get(dependency)!.getEnabledLoadableModule()!;
            return module.enableMixinsRecur();
         }),
      );

      await this.loadMixins();

      finishLoading();
      this.loading = undefined;
   }

   private async enableRecur(syncWithFS = false) {
      if (this.enabled) {
         return this.loading;
      }
      this.enabled = true;
      let finishLoading!: () => void;
      this.loading = new Promise(res => {
         finishLoading = res;
      });

      await Promise.all(
         this.metadata.dependencies.map(dependency => {
            const module = Module.registry.get(dependency)!.getEnabledLoadableModule()!;
            module.dependants.add(this);
            return module.enableRecur(syncWithFS);
         }),
      );

      await Module.registry.get(this.getModuleIdentifier())!.updateEnabled(this.getVersion(), syncWithFS);
      await this.loadCSS();
      await Promise.all(this.awaitedMixins);
      await this.loadJS();

      finishLoading();
      this.loading = undefined;
   }

   // ? As is, this always returns true. Recur Impl for easier future modification
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
      let finishLoading!: () => void;
      this.loading = new Promise(res => {
         finishLoading = res;
      });

      for (const dependencyIdentifier of this.metadata.dependencies) {
         const dependency = Module.registry.get(dependencyIdentifier)!.getEnabledLoadableModule()!;
         dependency.dependants.delete(this);
      }
      await Promise.all(Array.from(this.dependants).map(dependant => dependant.disableRecur()));

      await Module.registry.get(this.getModuleIdentifier())!.updateEnabled(null, syncWithFS);
      await this.unloadCSS?.();
      await this.unloadJS?.();

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

   public async enable(syncWithFS = false) {
      if (this.enabled) {
         await this.loading;
         return false;
      }
      if (this.canEnableRecur(false)) {
         const previouslyEnabledLoadedModule = Module.registry
            .get(this.getModuleIdentifier())!
            .getEnabledLoadableModule();
         if (previouslyEnabledLoadedModule) {
            if (!syncWithFS) {
               return false;
            }
            await previouslyEnabledLoadedModule.disable(true);
            if (previouslyEnabledLoadedModule.enabled) {
               return false;
            }
         }
         await this.enableRecur(syncWithFS);
         return true;
      }

      console.warn("Can't enable", this.getModuleIdentifier(), " reason: Dependencies not met");
      return false;
   }

   public async disable(syncWithFS = false) {
      if (!this.enabled) {
         await this.loading;
         return false;
      }
      if (this.canDisableRecur()) {
         await this.disableRecur(syncWithFS);
         return true;
      }

      console.warn(
         "Can't disable",
         this.getModuleIdentifier(),
         " reason: Module required by enabled dependencies",
      );
      return false;
   }

   public async add(syncWithFS = false) {
      let module = Module.registry.get(this.getModuleIdentifier());
      if (module?.loadableModuleByVersion[this.getVersion()]) {
         return false;
      }
      if (syncWithFS) {
         await ModuleManager.add(this.remoteMetadataURL!);
      }
      if (!module) {
         const author = this.getAuthor();
         const name = this.getName();
         module = new Module(author, name, null, { [this.getVersion()]: this });
      }
      module.loadableModuleByVersion[this.getVersion()] = this;
      return true;
   }

   public async remove(syncWithFS = false) {
      await this.disable();
      if (this.enabled) {
         return false;
      }
      const moduleIdentifier = this.getModuleIdentifier();
      const module = Module.registry.get(moduleIdentifier)!;
      delete module.loadableModuleByVersion[this.getVersion()];
      if (Object.keys(module.loadableModuleByVersion).length === 0) {
         Module.registry.delete(moduleIdentifier);
      }
      if (syncWithFS) {
         await ModuleManager.remove(this);
      }
      return true;
   }
}

const bespokeProtocol = "https://bespoke.delusoire.workers.dev/protocol/";
const websocketProtocol = "ws://localhost:7967/rpc";
const bespokeScheme = () => `bespoke:${crypto.randomUUID()}`;

function createPromise<T>() {
   let cb: { res: (value: T | PromiseLike<T>) => void; rej: (reason?: any) => void };
   const p = new Promise<T>((res, rej) => {
      cb = { res, rej };
   });
   // @ts-ignore
   return Object.assign(p, cb);
}

let daemonConn: WebSocket | undefined;
let lastDeamonConnAttempt = 0;
async function tryConnectToDaemon() {
   const timestamp = Date.now();
   if (timestamp - lastDeamonConnAttempt < 5 * 60 * 1000) {
      return;
   }
   lastDeamonConnAttempt = timestamp;
   const ws = new WebSocket(websocketProtocol);
   const p = createPromise<Event>();
   ws.onopen = e => p.res(e);
   ws.onclose = e => p.rej(e);
   return p
      .then(() => {
         daemonConn = ws;
      })
      .catch(() => {
         daemonConn = undefined;
      });
}
tryConnectToDaemon();

export const nsUrlHandlers = new Map<string, (m: string) => void>();
const sendProtocolMessage = async (...messages: string[]) => {
   const p = createPromise<boolean>();
   const ns = bespokeScheme();
   const buffer = [ns, ...messages].join(":");

   let cancelSubscription: () => void;

   const handleIncomingMessage = (m: string) => {
      if (m.startsWith(ns)) {
         p.res(m.slice(ns.length + 1) === "1");
         cancelSubscription();
      }
   };

   daemonConn ?? (await tryConnectToDaemon());
   if (daemonConn) {
      daemonConn.send(buffer);
      const listener = (e: any) => handleIncomingMessage(e.data);
      cancelSubscription = () => daemonConn?.removeEventListener("message", listener);
      daemonConn.addEventListener("message", listener);
   } else {
      open(bespokeProtocol + buffer);
      cancelSubscription = () => nsUrlHandlers.delete(ns);
      nsUrlHandlers.set(ns, handleIncomingMessage);
   }

   setTimeout(() => {
      p.rej(new Error("RPC timed out"));
      cancelSubscription();
   }, 5000);

   return p;
};

export const ModuleManager = {
   add(murl: string) {
      return sendProtocolMessage("add", murl);
   },
   remove(loadableModule: LoadableModule) {
      return sendProtocolMessage("remove", loadableModule.getStoreIdentifier());
   },
   enable(loadableModule: LoadableModule) {
      return sendProtocolMessage("enable", loadableModule.getStoreIdentifier());
   },
};

const lock: Vault = deepMerge(await fetchJSON("/modules/vault.json"), await fetchJSON("/hooks/repo.json"));
await Promise.all(
   Object.entries(lock.modules).flatMap(([author, byNames]) =>
      Object.entries(byNames).flatMap(([name, { enabled, v: metadatas }]) =>
         Module.fromVault(author, name, enabled, metadatas),
      ),
   ),
);
