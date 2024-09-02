/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

type Predicate<A> = (input: A) => boolean;

export function findBy(...tests: Array<string | RegExp | Predicate<any>>) {
	const testFns = tests.map((test): Predicate<any> => {
		switch (typeof test) {
			case "string":
				return (x) => x.toString().includes(test);
			case "function":
				return (x) => test(x);
			default: // assume regex
				return (x) => test.test(x.toString());
		}
	});
	const testFn = (x: any) => testFns.map((t) => t(x)).every(Boolean);
	return <A>(xs: A[]) => xs.find(testFn)!;
}

// assumption: str[start] === pair[0]
export const findMatchingPos = (
	str: string,
	start: number,
	direction: 1 | -1,
	pair: [string, string],
	scopes: number,
) => {
	let l = scopes;
	let i = start + direction;

	while (l > 0) {
		const c = str[i];
		i += direction;
		if (c === pair[0]) l++;
		else if (c === pair[1]) l--;
	}

	return i;
};

export const matchLast = (str: string, pattern: RegExp) => {
	const matches = str.matchAll(pattern);
	return Array.from(matches).at(-1)!;
};

export function stringifyUrlSearchParams(
	params: Record<string, string | string[]>,
) {
	const searchParams = new URLSearchParams();
	for (const [key, value] of Object.entries(params)) {
		if (Array.isArray(value)) {
			for (const v of value) {
				searchParams.append(key, v);
			}
		} else {
			searchParams.append(key, value);
		}
	}
	return searchParams.toString();
}

declare global {
	var __REACT_DEVTOOLS_GLOBAL_HOOK__: {
		isDisabled: boolean;
		supportsFiber: boolean;
		inject: ($: any) => void;
	};
	var findHostInstanceByFiber: (fiber: any) => any;
	var findFiberByHostInstance: (hostInstance: any) => any;
}

export function registerReactDevtoolsHook() {
	globalThis["__REACT_DEVTOOLS_GLOBAL_HOOK__"] = {
		isDisabled: false,
		supportsFiber: true,
		inject($) {
			globalThis["findHostInstanceByFiber"] = $.findHostInstanceByFiber;
			globalThis["findFiberByHostInstance"] = $.findFiberByHostInstance;
		},
	};
}
