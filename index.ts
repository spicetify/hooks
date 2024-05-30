/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import mixin, { applyTransforms } from "./mixins.js";
import { MixinLoader, Module } from "./module.js";

await mixin(MixinLoader.INTERNAL.transformer);
await Module.enableAllLoadableMixins();

await Promise.all(
	["/vendor~xpui.js", "/xpui.js"].map(applyTransforms).map(async p => import(await p)),
);

await Promise.all(MixinLoader.INTERNAL.awaitedMixins);
await Module.enableAllLoadable();
