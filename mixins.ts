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

import { Paths } from "./static.js";
import { sources, type Transformer } from "./transform.js";
import { matchLast } from "./util.js";

declare global {
	var __applyTransforms: typeof applyTransforms;
}

export const applyTransforms = (path: string) => {
	const i = Paths.indexOf(path as any);
	const source = sources[i];
	console.info("loadResource", { path, source });
	if (!source) return path;
	return source.getObjectURL();
};

globalThis.__applyTransforms = applyTransforms;

export default function (registerTransform: Transformer) {
	registerTransform({
		transform: emit => str => {
			str = str.replace(/(([a-zA-Z_\$][\w\$]*)=([a-zA-Z_\$][\w\$]*)\.p\+\3\.u\([a-zA-Z_\$][\w\$]*\))/, "$1,$2=await __applyTransforms($2)");
			const i = str.search('"Loading chunk "');
			const { index } = matchLast(str.slice(0, i), /=\([a-zA-Z_\$][\w\$]*,[a-zA-Z_\$][\w\$]*\)=>\{/g);
			str = `${str.slice(0, index! + 1)}async${str.slice(index! + 1)}`;

			str = str.replace(
				/(new Promise\(\()(\([a-zA-Z_\$][\w\$]*,[a-zA-Z_\$][\w\$]*\)=>\{var ([a-zA-Z_\$][\w\$]*)=([a-zA-Z_\$][\w\$]*)\.miniCssF\([a-zA-Z_\$][\w\$]*\),([a-zA-Z_\$][\w\$]*)=\4\.p\+\3)/,
				"$1async$2,$5=await __applyTransforms($5)",
			);

			emit();
			return str;
		},
		glob: /^\/xpui\.js/,
	});

	registerTransform({
		transform: emit => str => {
			str = str.replace(/(\("[^"]+sentry.io)/, ",$1");
			emit();
			return str;
		},
		glob: /^\/xpui\.js/,
	});

	registerTransform({
		transform: emit => str => {
			str = str.replace(/("incognito-enabled":[a-zA-Z_\$][\w\$]*)/, '$1,employee:"1"');
			str = str.replace(
				/([a-zA-Z_\$][\w\$]*)\("app\.enable-developer-mode",([a-zA-Z_\$][\w\$]*)\)/,
				'$1("app.enable-developer-mode",$2);$1("app-developer",$2?2:0)',
			);
			emit();
			return str;
		},
		glob: /^\/xpui\.js/,
	});
}
