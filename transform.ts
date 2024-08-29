/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import type { MixinLoader } from "./module.ts";

// @deno-types="./util/fetch.ts"
import { fetchText } from "./util/fetch.js";

const MimeTypes = {
	".js": "application/javascript",
	".css": "text/css",
} as const;

export class SourceFile {
	objectURL?: string;
	transforms = new Array<(input: string) => string>();

	static SOURCES = new Map<string, SourceFile>();

	private constructor(private path: string) { }

	static from(path: string) {
		return SourceFile.SOURCES.get(path) ?? new SourceFile(path);
	}

	async getObjectURL() {
		if (this.objectURL) return this.objectURL;
		const trs = transforms.filter(([glob]) => glob.test(this.path));
		if (!trs.length) {
			return this.path;
		}
		const content = await fetchText(this.path);
		const modifiedContent = trs.reduce(
			(p, [, transform]) => transform(p, this.path),
			content!,
		);
		const ext = this.path.slice(this.path.lastIndexOf("."));
		// @ts-ignore
		const type: string | undefined = MimeTypes[ext];
		if (!type) {
			return this.path;
		}
		const blob = new Blob([modifiedContent], { type });
		this.objectURL = URL.createObjectURL(blob);
		return this.objectURL;
	}
}

export type Thunk<A> = (value: A) => void;

export type MixinProps = {
	glob?: RegExp;
	wait?: boolean;
};

export type Transformer = ReturnType<typeof createTransformer>;

export const createTransformer = (module: MixinLoader) =>
	<A = void>(
		transform: (emit: Thunk<A>) => (input: string, path: string) => string,
		{ glob = /(?:)/, wait = true }: MixinProps,
	) => {
		const { promise, resolve } = Promise.withResolvers<A>();

		transforms.push([glob, transform(resolve)]);

		// @ts-ignore
		promise.transform = transform;

		if (wait) {
			module.awaitedMixins.push(promise as Promise<void>);
		}

		return promise;
	};

export const transforms = new Array<
	[RegExp, (input: string, path: string) => string]
>();
