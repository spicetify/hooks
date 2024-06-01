/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import type { Module, ModuleInstance } from "./module.js";

const workerProtocol = "https://bespoke.delusoire.workers.dev/protocol/";
const websocketProtocol = "ws://localhost:7967/rpc";
const protocol = "spicetify:";

function createPromise<T>() {
	let cb!: { res: (value: T | PromiseLike<T>) => void; rej: (reason?: any) => void; };
	const p = new Promise<T>((res, rej) => {
		cb = { res, rej };
	});
	return Object.assign(p, cb);
}

let daemonConn: WebSocket | undefined;
let lastDeamonConnAttempt = 0;
function tryConnectToDaemon() {
	const timestamp = Date.now();
	if (timestamp - lastDeamonConnAttempt < 5 * 60 * 1000) {
		return Promise.resolve();
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
const sendProtocolMessage = async (action: string, options: Record<string, string>) => {
	const p = createPromise<boolean>();

	const hash = crypto.randomUUID();
	const base = `${protocol + hash}:`;
	const uri = new URL(base + action);
	// @ts-ignore
	uri.search = new URLSearchParams(options);

	let cancelSubscription: () => void;

	const handleIncomingMessage = (m: string) => {
		if (m.startsWith(base)) {
			const payload = m.slice(base.length);
			p.res(payload === "1");
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
		p.rej(new Error("RPC timed out"));
		cancelSubscription();
	}, 5000);

	return p;
};

export const ModuleManager = {
	add(url: string) {
		return sendProtocolMessage("add", { url });
	},
	remove(moduleInstance: ModuleInstance) {
		return sendProtocolMessage("remove", { id: moduleInstance.getIdentifier() });
	},
	enable(moduleInstance: ModuleInstance) {
		return sendProtocolMessage("enable", { id: moduleInstance.getIdentifier() });
	},
	disable(module: Module) {
		return sendProtocolMessage("enable", { id: `${module.getIdentifier()}/` });
	},
};
