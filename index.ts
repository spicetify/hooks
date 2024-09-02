/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

// @deno-types="./mixins.ts"
import mixin, { applyTransforms } from "./mixins.js";
// @deno-types="./module.ts"
import {
	enableAllLoadable,
	enableAllLoadableMixins,
	INTERNAL_MIXIN_LOADER,
	INTERNAL_TRANSFORMER,
	loadLocalModules,
	loadRemoteModules,
} from "./module.js";
// @deno-types="./util.ts"
import { registerReactDevtoolsHook } from "./util.js";

registerReactDevtoolsHook();

await Promise.all([mixin(INTERNAL_TRANSFORMER), loadLocalModules()]);
console.time("onSpotifyPreInit");
await enableAllLoadableMixins();
console.timeEnd("onSpotifyPreInit");

console.time("onSpotifyInit");
await Promise.all(
	["/vendor~xpui.js", "/xpui.js"].map(applyTransforms).map(async (p) => import(await p)),
);
console.timeEnd("onSpotifyInit");

console.time("onSpotifyPostInit");
await Promise.all(INTERNAL_MIXIN_LOADER.awaitedMixins);
await enableAllLoadable();
console.timeEnd("onSpotifyPostInit");

requestIdleCallback(loadRemoteModules);
