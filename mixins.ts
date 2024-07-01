/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { nsUrlHandlers } from "./protocol.js";
import { SourceFile } from "./transform.js";
import type { Transformer } from "./transform.ts";
import { matchLast } from "./util.js";
import { RootModule } from "/hooks/module.js";

type CHUNKS = Record<string, PromiseWithResolvers<void>>;

declare global {
	var __applyTransforms: typeof applyTransforms;
	var __interceptNavigationControlMessage: typeof interceptNavigationControlMessage;
	var __onScriptLoaded: (path: string) => void;
	var CHUNKS: CHUNKS;
}

export const applyTransforms = (path: string) => {
	const source = SourceFile.from(path);
	console.info("loadResource", source);
	return source.getObjectURL();
};
globalThis.__applyTransforms = applyTransforms;

const spotifyAppScheme = "spotify:app:";
function interceptNavigationControlMessage(e: Event): boolean {
	const uri: string = (e as any).data.data;
	if (!uri.startsWith(spotifyAppScheme)) {
		return false;
	}

	const url = new URL(uri.slice(spotifyAppScheme.length));
	if (url.protocol !== "rpc:") {
		return false;
	}

	if (url.pathname.startsWith("reload")) {
		const modules = url.searchParams.getAll("module");
		if (modules.length === 0) {
			document.location.reload();
		} else {
			(async function () {
				for (const identifier of modules) {
					const instance = RootModule.INSTANCE.getChild(identifier)?.getEnabledInstance();
					if (!instance) {
						continue;
					}

					if (await instance.unload()) {
						await instance.load();
					}
				}
			})();
		}
	} else if (url.pathname.startsWith("spicetify")) {
		const uuidStart = "spicetify:".length;
		const uuidLength = 36;
		const hash = url.pathname.slice(uuidStart, uuidStart + uuidLength);
		nsUrlHandlers.get(hash)?.(url.pathname);
	}

	return true;
}
globalThis.__interceptNavigationControlMessage = interceptNavigationControlMessage;
export const CHUNKS: CHUNKS = globalThis.CHUNKS = {};
globalThis.__onScriptLoaded = (path: string) => {
	CHUNKS[path] ??= Promise.withResolvers();
	setTimeout(CHUNKS[path].resolve);
};

export default async function (transformer: Transformer) {
	transformer(
		(emit) => (str) => {
			str = str.replace(
				/(([a-zA-Z_\$][\w\$]*)=([a-zA-Z_\$][\w\$]*)\.p\+\3\.u\([a-zA-Z_\$][\w\$]*\))/,
				"$1,$2=await __applyTransforms($2)",
			);
			const i = str.search('"Loading chunk "');
			const { index } = matchLast(
				str.slice(0, i),
				/=\([a-zA-Z_\$][\w\$]*,[a-zA-Z_\$][\w\$]*\)=>\{/g,
			);
			str = `${str.slice(0, index! + 1)}async${str.slice(index! + 1)}`;

			str = str.replace(
				/(new Promise\(\()(\([a-zA-Z_\$][\w\$]*,[a-zA-Z_\$][\w\$]*\)=>\{var ([a-zA-Z_\$][\w\$]*)=([a-zA-Z_\$][\w\$]*)\.miniCssF\([a-zA-Z_\$][\w\$]*\),([a-zA-Z_\$][\w\$]*)=\4\.p\+\3)/,
				"$1async$2,$5=await __applyTransforms($5)",
			);

			emit();
			return str;
		},
		{
			glob: /^\/xpui\.js/,
		},
	);

	transformer(
		(emit) => (str) => {
			str = str.replace(/(\("[^"]+sentry.io)/, ",$1");
			emit();
			return str;
		},
		{
			glob: /^\/xpui\.js/,
		},
	);

	transformer(
		(emit) => (str) => {
			str = str.replace(/("incognito-enabled":[a-zA-Z_\$][\w\$]*)/, '$1,employee:"1"');
			str = str.replace(
				/([a-zA-Z_\$][\w\$]*)\("app\.enable-developer-mode",([a-zA-Z_\$][\w\$]*)\)/,
				'$1("app.enable-developer-mode",$2);$1("app-developer",$2?2:0)',
			);
			emit();
			return str;
		},
		{
			glob: /^\/xpui\.js/,
		},
	);

	transformer(
		(emit) => (str) => {
			str = str.replace(
				/(([a-zA-Z_\$][\w\$]*)\.data\.type===(?:[a-zA-Z_\$][\w\$]*\.){2}NAVIGATION)&&/,
				"$1&&!__interceptNavigationControlMessage($2)&&",
			);
			emit();
			return str;
		},
		{
			glob: /^\/xpui\.js/,
		},
	);

	transformer(
		(emit) => (str, path) => {
			str += `;\n__onScriptLoaded("${path}");`;
			emit();
			return str;
		},
		{
			glob: /\.js$/,
			noAwait: true,
		},
	);
}
