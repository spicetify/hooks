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

// @ts-ignore
const check = ({ props, name }: { props: Array<string>; name: string }) => {
   const object = name.split(".").reduce((pobj, k) => pobj[k], globalThis as any);
   const nonExistantProps = props.filter(prop => !object[prop]);
   const nonReportedProps = Object.keys(object).filter(key => props.indexOf(key) === -1);

   console.group(`[${name}]: ${props.length - nonExistantProps.length}/${props.length} props EXIST.`);

   for (const prop of nonExistantProps) {
      console.warn(
         `${name}[\`${String(
            prop,
         )}\`] is not available. Please open an issue in the Spicetify repository to inform us about it.`,
      );
   }

   for (const prop of nonReportedProps) {
      console.info(`${name}[\`${prop}\`] exists but is not in the method list.`);
   }

   console.groupEnd();
};

export const test = () => {};
