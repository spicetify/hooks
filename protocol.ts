/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import type { ModuleInstance, ModuleBase } from "./module.ts";

// @deno-types="./static.ts"
import { LOCAL_PROXY_HOST } from "./static.js";
// @deno-types="./util.ts"
import { stringifyUrlSearchParams } from "./util.js";

const workerProtocol = "https://bespoke.delusoire.workers.dev/protocol/";
const websocketUrl = `ws://${LOCAL_PROXY_HOST}/rpc`;
const protocol = "spicetify:";

export const isOpen = () => daemonConn;

let daemonConn: WebSocket | undefined;
let lastDeamonConnAttempt = 0;
function tryConnectToDaemon() {
	const timestamp = Date.now();
	if (timestamp - lastDeamonConnAttempt < 5 * 60 * 1000) {
		return Promise.resolve();
	}
	lastDeamonConnAttempt = timestamp;
	const ws = new WebSocket(websocketUrl);
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
	const frame = protocol + hash + ":";
	const uri = frame + action + "?" + stringifyUrlSearchParams(options);

	let cancelSubscription: () => void;

	const handleIncomingMessage = (m: string) => {
		if (m.startsWith(frame)) {
			const payload = m.slice(frame.length);
			resolve(payload === "1");
			cancelSubscription();
		}
	};

	daemonConn ?? (await tryConnectToDaemon());
	if (daemonConn) {
		daemonConn.send(uri);
		const listener = (e: any) => handleIncomingMessage(e.data);
		cancelSubscription = () => daemonConn?.removeEventListener("message", listener);
		daemonConn.addEventListener("message", listener);
	} else {
		open(workerProtocol + uri);
		cancelSubscription = () => nsUrlHandlers.delete(hash);
		nsUrlHandlers.set(hash, handleIncomingMessage);
	}

	setTimeout(() => {
		reject(new Error("RPC timed out"));
		cancelSubscription();
	}, 30000);

	return promise;
};

export const ModuleManager = {
	async add(instance: ModuleInstance) {
		return await sendProtocolMessage("add", {
			id: instance.getIdentifier(),
			artifacts: instance.artifacts,
			checksum: instance.checksum,
		});
	},
	async install(instance: ModuleInstance) {
		return await sendProtocolMessage("install", { id: instance.getIdentifier() });
	},
	async fastInstall(instance: ModuleInstance) {
		return await sendProtocolMessage("fast-install", {
			id: instance.getIdentifier(),
			artifacts: instance.artifacts,
			checksum: instance.checksum,
		});
	},
	async enable(instance: ModuleInstance) {
		return await sendProtocolMessage("enable", { id: instance.getIdentifier() });
	},
	async fastEnable(instance: ModuleInstance) {
		return await sendProtocolMessage("fast-enable", {
			id: instance.getIdentifier(),
			artifacts: instance.artifacts,
			checksum: instance.checksum,
		});
	},
	async disable(module: ModuleBase<any>) {
		return await sendProtocolMessage("enable", { id: `${module.getIdentifier()}@` });
	},
	async delete(instance: ModuleInstance) {
		return await sendProtocolMessage("delete", { id: instance.getIdentifier() });
	},
	async fastDelete(instance: ModuleInstance) {
		return await sendProtocolMessage("fast-delete", { id: instance.getIdentifier() });
	},
	async remove(instance: ModuleInstance) {
		return await sendProtocolMessage("remove", { id: instance.getIdentifier() });
	},
	async fastRemove(instance: ModuleInstance) {
		return await sendProtocolMessage("fast-remove", { id: instance.getIdentifier() });
	},
};

export function handleProtocol(uri: string) {
	const uuidStart = "spicetify:".length;
	const uuidLength = 36;
	const hash = uri.slice(uuidStart, uuidStart + uuidLength);
	nsUrlHandlers.get(hash)?.(uri);
}
