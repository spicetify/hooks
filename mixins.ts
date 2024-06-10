/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { nsUrlHandlers } from "./protocol.js";
import { SourceFile, type Transformer } from "./transform.js";
import { matchLast } from "./util.js";

declare global {
	var __applyTransforms: typeof applyTransforms;
	var __interceptNavigationControlMessage: typeof interceptNavigationControlMessage;
	var __onScriptLoaded: (path: string) => void;
	var CHUNKS: Record<string, PromiseWithResolvers<void>>;
}

export const applyTransforms = (path: string) => {
	const source = SourceFile.from(path);
	console.info("loadResource", source);
	return source.getObjectURL();
};
globalThis.__applyTransforms = applyTransforms;

const rpc = "spotify:app:spicetify:";
function interceptNavigationControlMessage(e: Event): boolean {
	const uri: string = (e as any).data.data;
	if (!uri.startsWith(rpc)) {
		return true;
	}
	const trimmedUri = uri.slice(rpc.length);
	if (trimmedUri === "reload") {
		document.location.reload();
	}
	{
		const hash = trimmedUri.slice(0, 47);
		nsUrlHandlers.get(hash)?.(trimmedUri);
	}
	return false;
}
globalThis.__interceptNavigationControlMessage = interceptNavigationControlMessage;

globalThis.CHUNKS = {};
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
				/(([a-zA-Z_\$][\w\$]*)\.data\.type===(?:[a-zA-Z_\$][\w\$]*\.){2}NAVIGATION&&)/,
				"$1__interceptNavigationControlMessage($2)&&",
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
			str += `;\n__onScriptLoaded("${path}")`;
			emit();
			return str;
		},
		{
			glob: /\.js$/,
			noAwait: true,
		},
	);
}
