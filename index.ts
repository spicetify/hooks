/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export type { LocalModuleInstance as Module } from "./module.ts";

import mixin, { applyTransforms } from "./mixins.js";
import {
	enableAllLoadable,
	enableAllLoadableMixins,
	INTERNAL_MIXIN_LOADER,
	INTERNAL_TRANSFORMER,
} from "./module.js";

await mixin(INTERNAL_TRANSFORMER);
console.time("onSpotifyPreInit");
await enableAllLoadableMixins();
console.timeEnd("onSpotifyPreInit");

await Promise.all(
	["/vendor~xpui.js", "/xpui.js"].map(applyTransforms).map(async (p) => import(await p)),
);

await Promise.all(INTERNAL_MIXIN_LOADER.awaitedMixins);
console.time("onSpotifyPostInit");
await enableAllLoadable();
console.timeEnd("onSpotifyPostInit");
