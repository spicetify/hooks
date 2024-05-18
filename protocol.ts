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

import type { Module, ModuleInstance } from "./module.js";

const workerProtocol = "https://bespoke.delusoire.workers.dev/protocol/";
const websocketProtocol = "ws://localhost:7967/rpc";
const protocol = "spicetify:";

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
const sendProtocolMessage = async ( action: string, options: Record<string, string> ) => {
   const p = createPromise<boolean>();

   const uri = new URL( protocol + action );
   // @ts-ignore
   uri.search = new URLSearchParams( options );
   uri.hash = crypto.randomUUID();

   let cancelSubscription: () => void;

   const handleIncomingMessage = ( m: string ) => {
      const u = new URL( m );
      if ( u.protocol === uri.protocol && u.hash === uri.hash ) {
         p.res( u.pathname === "1" );
         cancelSubscription();
      }
   };

   daemonConn ?? ( await tryConnectToDaemon() );
   if ( daemonConn ) {
      daemonConn.send( uri.href );
      const listener = ( e: any ) => handleIncomingMessage( e.data );
      cancelSubscription = () => daemonConn?.removeEventListener( "message", listener );
      daemonConn.addEventListener( "message", listener );
   } else {
      open( workerProtocol + uri.href );
      cancelSubscription = () => nsUrlHandlers.delete( uri.hash );
      nsUrlHandlers.set( uri.hash, handleIncomingMessage );
   }

   setTimeout( () => {
      p.rej( new Error( "RPC timed out" ) );
      cancelSubscription();
   }, 5000 );

   return p;
};

export const ModuleManager = {
   add( url: string ) {
      return sendProtocolMessage( "add", { url } );
   },
   remove( moduleInstance: ModuleInstance ) {
      return sendProtocolMessage( "remove", { id: moduleInstance.getIdentifier() } );
   },
   enable( moduleInstance: ModuleInstance ) {
      return sendProtocolMessage( "enable", { id: moduleInstance.getIdentifier() } );
   },
   disable( module: Module ) {
      return sendProtocolMessage( "enable", { id: module.getIdentifier() + "/" } );
   },
};
