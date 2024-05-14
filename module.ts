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
type Version = string;
type StoreIdentifier = string;
type Truthy<A> = A;


interface _Module {
   enabled: Version;
   remotes: Array<string>;
   v: Record<Version, _Store>;
}

interface _Store {
   installed: string;
   metadatas: Array<string>;
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
   dependencies: string[];
}

const dummy_metadata = Object.freeze( {
   name: "Placeholder",
   tags: [],
   preview: "https://www.getdummyimage.com/400/400",
   version: "0",
   authors: [ "John Doe", "Jane Doe" ],
   description: "This is a dummy Module",
   readme: "https://example.com",
   entries: {},
   dependencies: [],
   isDummy: true,
} );

export class Module {

   static registry = new Map<ModuleIdentifier, Module>();

   static getModules() {
      return Array.from( Module.registry.values() );
   }

   static async enableAllLoadableMixins() {
      console.time( "onSpotifyPreInit" );
      const modules = Module.getModules();
      await Promise.all( modules.map( module => module.getEnabledInstance()?.enableMixins() ) );
      console.timeEnd( "onSpotifyPreInit" );
   }

   static async enableAllLoadable() {
      console.time( "onSpotifyPostInit" );
      const modules = Module.getModules();
      await Promise.all( modules.map( module => module.getEnabledInstance()?.enable() ) );
      console.timeEnd( "onSpotifyPostInit" );
   }

   public instances = new Map<Version, ModuleInstance>();

   constructor(
      private identifier: ModuleIdentifier,
      private enabled: Version,
   ) {
      if ( Module.registry.has( identifier ) ) {
         throw new Error( `A module with the same identifier "${ identifier }" is already registered` );
      }
      Module.registry.set( identifier, this );
   }

   static async fromVault(
      [ identifier, { enabled, remotes, v: versions } ]: [ ModuleIdentifier, _Module ]
   ) {
      if ( !enabled ) {
         enabled = "";
      }

      const m = new Module( identifier, enabled );

      await Promise.all(
         Object.entries( versions ).map(
            async ( [ version, store ] ) => {
               const mi = await m.createInstance( version, store.installed );
               mi._addRemotes( store.metadatas );
               return mi;
            }
         )
      );

      requestIdleCallback( () =>
         Promise.all(
            remotes.map( fetchJSON<Record<string, Array<string>>> )
         ).then( repos =>
            repos.reduce( ( a, b ) => deepMerge( b, a ) )
         ).then( async versions => {
            for ( const [ version, metadatas ] of Object.entries( versions ) ) {
               const mi = await m.getInstanceOrCreate( version );
               mi._addRemotes( metadatas );
            }
         } )
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
      return this.getEnabledVersion() ? this.instances.get( this.getEnabledVersion()! )! : null;
   }

   public async createInstance(
      version: Truthy<Version>,
      installed = "",
      shouldEnableAtStartup = false,
   ) {
      const metadata =
         shouldEnableAtStartup && installed
            ? await fetchJSON<Metadata>( `/modules/${ this.getIdentifier() }/metadata.json` )
            : dummy_metadata;

      return new ModuleInstance( this, version, metadata, installed );
   }

   public async getInstanceOrCreate(
      version: Truthy<Version>,
   ) {
      return this.instances.get( version ) ?? this.createInstance( version );
   }

   // ?
   public async updateEnabled( enabled: Version ) {
      this.enabled = enabled;
   }
}

export class MixinLoader {
   private _transformer = createTransformer( this );

   get transformer() {
      return this._transformer;
   }

   public awaitedMixins = new Array<Promise<void>>();

   static INTERNAL = new MixinLoader( {
      name: "internal",
      tags: [ "internal" ],
      preview: "",
      version: "dev",
      authors: [ "internal" ],
      readme: "",
      entries: {},
      description: "internal",
      dependencies: [],
   } );

   constructor( public metadata: Metadata ) { }
}

export class ModuleInstance extends MixinLoader {
   _unloadJS: ( () => Promise<void> ) | null = null;
   _unloadCSS: ( () => void ) | null = null;
   private preloaded = false;
   private loaded = false;
   private transition: Promise<void> | undefined;
   private dependants = new Set<ModuleInstance>();

   public remotes = new Array<string>();

   _addRemotes( remotes: string[] ) {
      this.remotes.push( ...remotes );
   }

   public getName() {
      return this.metadata.name;
   }

   public getAuthor() {
      return this.metadata.authors[ 0 ];
   }

   public getVersion() {
      return this.version;
   }

   public getModuleIdentifier() {
      return this.module.getIdentifier();
   }

   public getIdentifier(): StoreIdentifier {
      return `${ this.getModuleIdentifier() }/${ this.getVersion() }`;
   }

   constructor(
      private module: Module,
      private version: Truthy<Version>,
      metadata: Metadata,
      private installed: string,
   ) {
      super( metadata );
      module.instances.set( version, this );
   }

   public isEnabled() {
      return this.loaded;
   }

   // ?
   public updateMetadata( metadata: Metadata ) {
      this.metadata = metadata;
   }

   private getRelPath( rel: string ) {
      return `/modules/${ this.getModuleIdentifier() }/${ rel }`;
   }

   private async loadMixins() {
      const entry = this.metadata.entries.mixin;
      if ( !entry ) {
         return;
      }

      console.time( `${ this.getModuleIdentifier() }#loadMixin` );
      const mixin = await import( this.getRelPath( entry ) );
      await mixin.default( this.transformer );
      console.timeEnd( `${ this.getModuleIdentifier() }#loadMixin` );

      console.groupCollapsed( `${ this.getModuleIdentifier() }#awaitMixins` );
      console.info( ...this.awaitedMixins );
      console.groupEnd();

      console.time( `${ this.getModuleIdentifier() }#awaitMixins` );
      Promise.all( this.awaitedMixins ).then( () => console.timeEnd( `${ this.getModuleIdentifier() }#awaitMixins` ) );
   }

   private async loadJS() {
      const entry = this.metadata.entries.js;
      if ( !entry ) {
         return;
      }

      this._unloadJS = async () => {
         this._unloadJS = null;
      };

      console.time( `${ this.getModuleIdentifier() }#loadJS` );

      try {
         const fullPath = this.getRelPath( entry );
         const module = await import( fullPath );
         const dispose = await module.default?.( this );
         const unloadJS = this._unloadJS;
         this._unloadJS = async () => {
            await dispose?.();
            await unloadJS();
         };
      } catch ( e ) {
         this._unloadJS();
         console.error( `Error loading ${ this.getModuleIdentifier() }:`, e );
      }

      console.timeEnd( `${ this.getModuleIdentifier() }#loadJS` );
   }

   private loadCSS() {
      const entry = this.metadata.entries.css;
      if ( entry ) {
         const id = `${ this.getModuleIdentifier() }-styles`;
         const fullPath = this.getRelPath( entry );
         const link = document.createElement( "link" );
         link.id = id;
         link.rel = "stylesheet";
         link.type = "text/css";
         link.href = fullPath;
         document.head.append( link );
         this._unloadCSS = () => {
            this._unloadCSS = null;
            document.getElementById( id )?.remove();
         };
      }
   }

   // TODO: add versioned dependencies check
   // TODO: add check that modules are enabled by cli
   private canLoadRecur( isPreload = false ) {
      if ( !isPreload && !this.preloaded && this.metadata.entries.mixin ) {
         return false;
      }
      if ( !this.loaded ) {
         for ( const dependency of this.metadata.dependencies ) {
            const module = Module.registry.get( dependency )?.getEnabledInstance();
            if ( !module?.canLoadRecur( isPreload ) ) {
               return false;
            }
         }
      }
      return true;
   }

   private async preloadRecur() {
      if ( this.preloaded ) {
         return this.transition;
      }
      this.preloaded = true;
      let finishLoading!: () => void;
      this.transition = new Promise( res => {
         finishLoading = res;
      } );

      await Promise.all(
         this.metadata.dependencies.map( dependency => {
            const module = Module.registry.get( dependency )!.getEnabledInstance()!;
            return module.preloadRecur();
         } ),
      );

      await this.loadMixins();

      finishLoading();
      this.transition = undefined;
   }

   private async loadRecur() {
      if ( this.loaded ) {
         return this.transition;
      }
      this.loaded = true;
      let finishTransition!: () => void;
      this.transition = new Promise( res => {
         finishTransition = res;
      } );

      await Promise.all(
         this.metadata.dependencies.map( dependency => {
            const module = Module.registry.get( dependency )!.getEnabledInstance()!;
            module.dependants.add( this );
            return module.loadRecur();
         } ),
      );

      await this.loadCSS();
      await Promise.all( this.awaitedMixins );
      await this.loadJS();

      finishTransition();
      this.transition = undefined;
   }

   // ? As is, this always returns true. Recur Impl for easier future modification
   private canUnloadRecur() {
      if ( this.loaded ) {
         for ( const dependant of this.dependants ) {
            if ( !dependant.canUnloadRecur() ) {
               return false;
            }
         }
      }
      return true;
   }

   private async unloadRecur() {
      if ( !this.loaded ) {
         return this.transition;
      }
      this.loaded = false;
      let finishTransition!: () => void;
      this.transition = new Promise( res => {
         finishTransition = res;
      } );

      for ( const dependencyIdentifier of this.metadata.dependencies ) {
         const dependency = Module.registry.get( dependencyIdentifier )!.getEnabledInstance()!;
         dependency.dependants.delete( this );
      }
      await Promise.all( Array.from( this.dependants ).map( dependant => dependant.unloadRecur() ) );

      await this._unloadCSS?.();
      await this._unloadJS?.();

      finishTransition();
      this.transition = undefined;
   }

   async enableMixins() {
      if ( this.preloaded ) {
         await this.transition;
         return false;
      }
      if ( this.canLoadRecur( true ) ) {
         await this.preloadRecur();
         return true;
      }

      console.warn( "Can't enable mixins for", this.getModuleIdentifier(), " reason: Dependencies not met" );
      return false;
   }

   public async add() {
      const remote = this.remotes[ 0 ];
      if ( !remote ) {
         return false;
      }
      return await ModuleManager.add( this.remotes[ 0 ] );
   }

   public async enable() {
      if ( this.loaded ) {
         await this.transition;
         return false;
      }
      if ( this.canLoadRecur( false ) ) {
         await this.loadRecur();
         return true;
      }

      console.warn( "Can't enable", this.getModuleIdentifier(), " reason: Dependencies not met" );
      return false;
   }

   public async disable() {
      if ( !this.loaded ) {
         await this.transition;
         return false;
      }
      if ( this.canUnloadRecur() ) {
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
      await this.disable();
      if ( this.loaded ) {
         return false;
      }
      this.module.instances.delete( this.getVersion() );
      if ( Object.keys( this.module.instances ).length === 0 ) {
         Module.registry.delete( this.getModuleIdentifier() );
      }
   }

   public async remove() {
      if ( !await this.dispose() ) {
         return false;
      }
      return await ModuleManager.remove( this );
   }
}

const bespokeProtocol = "https://bespoke.delusoire.workers.dev/protocol/";
const websocketProtocol = "ws://localhost:7967/rpc";
const bespokeScheme = () => `bespoke:${ crypto.randomUUID() }`;

function createPromise<T>() {
   let cb: { res: ( value: T | PromiseLike<T> ) => void; rej: ( reason?: any ) => void; };
   const p = new Promise<T>( ( res, rej ) => {
      cb = { res, rej };
   } );
   // @ts-ignore
   return Object.assign( p, cb );
}

let daemonConn: WebSocket | undefined;
let lastDeamonConnAttempt = 0;
async function tryConnectToDaemon() {
   const timestamp = Date.now();
   if ( timestamp - lastDeamonConnAttempt < 5 * 60 * 1000 ) {
      return;
   }
   lastDeamonConnAttempt = timestamp;
   const ws = new WebSocket( websocketProtocol );
   const p = createPromise<Event>();
   ws.onopen = e => p.res( e );
   ws.onclose = e => p.rej( e );
   return p
      .then( () => {
         daemonConn = ws;
      } )
      .catch( () => {
         daemonConn = undefined;
      } );
}
tryConnectToDaemon();

export const nsUrlHandlers = new Map<string, ( m: string ) => void>();
const sendProtocolMessage = async ( ...messages: string[] ) => {
   const p = createPromise<boolean>();
   const ns = bespokeScheme();
   const buffer = [ ns, ...messages ].join( ":" );

   let cancelSubscription: () => void;

   const handleIncomingMessage = ( m: string ) => {
      if ( m.startsWith( ns ) ) {
         p.res( m.slice( ns.length + 1 ) === "1" );
         cancelSubscription();
      }
   };

   daemonConn ?? ( await tryConnectToDaemon() );
   if ( daemonConn ) {
      daemonConn.send( buffer );
      const listener = ( e: any ) => handleIncomingMessage( e.data );
      cancelSubscription = () => daemonConn?.removeEventListener( "message", listener );
      daemonConn.addEventListener( "message", listener );
   } else {
      open( bespokeProtocol + buffer );
      cancelSubscription = () => nsUrlHandlers.delete( ns );
      nsUrlHandlers.set( ns, handleIncomingMessage );
   }

   setTimeout( () => {
      p.rej( new Error( "RPC timed out" ) );
      cancelSubscription();
   }, 5000 );

   return p;
};

export const ModuleManager = {
   add( murl: string ) {
      return sendProtocolMessage( "add", murl );
   },
   remove( moduleInstance: ModuleInstance ) {
      return sendProtocolMessage( "remove", moduleInstance.getIdentifier() );
   },
   enable( moduleInstance: ModuleInstance ) {
      return sendProtocolMessage( "enable", moduleInstance.getIdentifier() );
   },
   disable( module: Module ) {
      return sendProtocolMessage( "enable", module.getIdentifier() + "/" );
   },
};

const lock: _Vault = await fetchJSON( "/modules/vault.json" );
await Promise.all( Object.entries( lock.modules ).flatMap( Module.fromVault ) );
