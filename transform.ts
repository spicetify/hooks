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

import type { MixinModule } from "./module.js";
import { Paths } from "./static.js";
import { fetchText } from "./util.js";

export class SourceFile {
   objectURL?: string;
   transforms = new Array<(input: string) => string>();
   constructor(public path: string) {}

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
   (module: MixinModule) =>
   <A = void>(
      tr: (emit: Thunk<A>) => (input: string) => string,
      { then = () => {}, glob = /(?:)/, noAwait = false }: MixinProps<A>,
   ) => {
      const p = new Promise<A>(resolve => {
         const _sources = Paths.map((path, i) => glob.test(path) && sources[i]).filter(Boolean) as SourceFile[];
         for (const source of _sources) {
            source.mixin(tr(resolve));
         }
      }).then(then);
      // @ts-ignore
      p.transform = tr;
      noAwait || module.awaitedMixins.push(p);
   };
