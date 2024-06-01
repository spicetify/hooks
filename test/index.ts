/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

// @ts-ignore
const check = ({ props, name }: { props: Array<string>; name: string; }) => {
	const object = name.split(".").reduce((pobj, k) => pobj[k], globalThis as any);
	const nonExistantProps = props.filter(prop => !object[prop]);
	const nonReportedProps = Object.keys(object).filter(key => props.indexOf(key) === -1);

	console.group(
		`[${name}]: ${props.length - nonExistantProps.length}/${props.length} props EXIST.`,
	);

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

export const test = () => { };
