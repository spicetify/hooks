/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import type { MixinLoader } from "./module.js";
import { Paths } from "./static.js";
import { fetchText } from "./util.js";

export class SourceFile {
	objectURL?: string;
	transforms = new Array<(input: string) => string>();
	constructor(public path: string) { }

	mixin(transform: (input: string) => string) {
		this.transforms.push(transform);
	}

	async getObjectURL() {
		if (this.objectURL) return this.objectURL;
		const content = await fetchText(this.path);
		const modifiedContent = this.transforms.reduce((p, transform) => transform(p), content);
		const [ext] = this.path.match(/\..+$/) ?? [];
		const types = {
			".js": "application/javascript",
			".css": "text/css",
		};
		const type = types[ext as keyof typeof types];
		const blob = new Blob([modifiedContent], { type });
		this.objectURL = URL.createObjectURL(blob);
		return this.objectURL;
	}
}

export const sources = Paths.map(path => new SourceFile(path));

export type Thunk<A> = (value: A) => void;
export type MixinProps<A> = {
	then?: (emitted: A) => void;
	glob?: RegExp;
	noAwait?: boolean;
};
export type Transformer = ReturnType<typeof createTransformer>;

export const createTransformer =
	(module: MixinLoader) =>
		<A = void>(
			tr: (emit: Thunk<A>) => (input: string) => string,
			{ then = () => { }, glob = /(?:)/, noAwait = false }: MixinProps<A>,
		) => {
			const p = new Promise<A>(resolve => {
				const _sources = Paths.map((path, i) => glob.test(path) && sources[i]).filter(
					Boolean,
				) as SourceFile[];
				for (const source of _sources) {
					source.mixin(tr(resolve));
				}
			}).then(then);
			// @ts-ignore
			p.transform = tr;
			noAwait || module.awaitedMixins.push(p);
		};
