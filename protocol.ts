/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import type { LocalModuleInstance, Module, ModuleInstance, RemoteModuleInstance } from "./module.js";
import { stringifyUrlSearchParams } from "./util.js";

const workerProtocol = "https://bespoke.delusoire.workers.dev/protocol/";
const websocketProtocol = "ws://localhost:7967/rpc";
const protocol = "spicetify:";

let daemonConn: WebSocket | undefined;
let lastDeamonConnAttempt = 0;
function tryConnectToDaemon() {
	const timestamp = Date.now();
	if (timestamp - lastDeamonConnAttempt < 5 * 60 * 1000) {
		return Promise.resolve();
	}
	lastDeamonConnAttempt = timestamp;
	const ws = new WebSocket(websocketProtocol);
	const { promise, resolve, reject } = Promise.withResolvers<Event>();
	ws.onopen = (e) => resolve(e);
	ws.onclose = (e) => reject(e);
	return promise
		.then(() => {
			daemonConn = ws;
		})
		.catch(() => {
			daemonConn = undefined;
		});
}
tryConnectToDaemon();

export const nsUrlHandlers = new Map<string, (m: string) => void>();
const sendProtocolMessage = async (action: string, options: Record<string, string | string[]>) => {
	const { promise, resolve, reject } = Promise.withResolvers<boolean>();

	const hash = crypto.randomUUID();
	const base = `${protocol + hash}:`;
	const uri = new URL(base + action);
	uri.search = stringifyUrlSearchParams(options);

	let cancelSubscription: () => void;

	const handleIncomingMessage = (m: string) => {
		if (m.startsWith(base)) {
			const payload = m.slice(base.length);
			resolve(payload === "1");
			cancelSubscription();
		}
	};

	daemonConn ?? (await tryConnectToDaemon());
	if (daemonConn) {
		daemonConn.send(uri.href);
		const listener = (e: any) => handleIncomingMessage(e.data);
		cancelSubscription = () => daemonConn?.removeEventListener("message", listener);
		daemonConn.addEventListener("message", listener);
	} else {
		open(workerProtocol + uri.href);
		cancelSubscription = () => nsUrlHandlers.delete(base);
		nsUrlHandlers.set(base, handleIncomingMessage);
	}

	setTimeout(() => {
		reject(new Error("RPC timed out"));
		cancelSubscription();
	}, 5000);

	return promise;
};

export const ModuleManager = {
	async add(instance: RemoteModuleInstance) {
		return await sendProtocolMessage("add", {
			id: instance.getIdentifier(),
			artifacts: instance.artifacts,
			providers: instance.providers,
		});
	},
	async install(instance: LocalModuleInstance) {
		return await sendProtocolMessage("install", { id: instance.getIdentifier() });
	},
	async enable(instance: LocalModuleInstance) {
		return await sendProtocolMessage("enable", { id: instance.getIdentifier() });
	},
	async disable(module: Module<any>) {
		return await sendProtocolMessage("enable", { id: `${module.getIdentifier()}@` });
	},
	async delete(instance: LocalModuleInstance) {
		return await sendProtocolMessage("delete", { id: instance.getIdentifier() });
	},
	async remove(instance: LocalModuleInstance) {
		return await sendProtocolMessage("remove", { id: instance.getIdentifier() });
	},
};
