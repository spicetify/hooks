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

import { internalRegisterTransform } from "./index.js";

internalRegisterTransform({
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
