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
