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

/*
import { internalRegisterTransform } from "./index.js";


internalRegisterTransform({
	transform: emit => str => {
		// https://github.com/styled-components/styled-components/blob/22e8b7f233e12500a68be4268b1d79c5d7f2a661/packages/styled-components/src/models/ComponentStyle.ts#L88
		str = str.replace(/(\w+ [\w$_]+)=([\w$_]+\([\w$_]+>>>0\))/, "$1=__getStyledClassName(arguments,this,$2)");
		globalThis.__getStyledClassName = (
			[executionContext]: [Record<string, any>],
			componentStyle: any, // ComponentStyle from styled-components
			name: string,
		) => {
			if (!executionContext) return name;

			const truncatedClassName = /(?:\w+__)?(\w+)(?:-\w+)+/.exec(componentStyle.componentId)[1];

			const isValidString = (v: unknown) => typeof v === "string" && v.length > 0;
			const isValidNumber = (v: unknown) => typeof v === "number";
			const parseProp = ([k, v]: [string, unknown]) => ((isValidString(v) || isValidNumber(v)) && `${k}_${v}`) || (v && k);

			const includedKeys = [
				"role",
				"variant",
				"semanticColor",
				"iconColor",
				"color",
				"weight",
				"buttonSize",
				"iconSize",
				"position",
				"data-encore-id",
				"$size",
				"$iconColor",
			];

			const boolCastedKeys = ["iconLeading", "iconTrailing", "iconOnly"];

			const stringCastedKeys = [/padding/, /blocksize/];

			const restrictedBoolKeys = [/^aria-/, /^className$/, /^style$/, /^dir$/, /^key$/, /^ref$/, /^as$/, /^$autoMirror$/, /^$/];

			const parsePair = ([k, v]: [string, any]) => {
				if (!includedKeys.includes(v)) {
					if (v && boolCastedKeys.includes(k)) {
						return k;
					}
					if (v === true && restrictedBoolKeys.every(r => !r.test(k))) {
						return k;
					}
					if (isValidString(v) && stringCastedKeys.some(r => r.test(k))) {
						return `${k}_${v}`;
					}
					return;
				}
				return parseProp([k, v]);
			};

			return `${truncatedClassName}-${Object.entries(executionContext)
				.map(parsePair)
				.filter(Boolean)
				.sort()
				.join("-")
				.replaceAll("$", "")
				.replace(/[^\w-]/g, "_")}${name}`;
		};
		emit();
		return str;
	},
	glob: /^\/vendor~xpui\.js/,
});
*/
