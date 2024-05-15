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

import mixin, { applyTransforms } from "./mixins.js";
import { MixinLoader, Module } from "./module.js";

await mixin( MixinLoader.INTERNAL.transformer );
await Module.enableAllLoadableMixins();

await Promise.all( [ "/vendor~xpui.js", "/xpui.js" ].map( applyTransforms ).map( async p => import( await p ) ) );

await Promise.all( MixinLoader.INTERNAL.awaitedMixins );
await Module.enableAllLoadable();
