/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

// @deno-types="./protocol.ts"
import { isOpen } from "./protocol.js";
// @deno-types="./static.ts"
import { LOCAL_PROXY_HOST } from "./static.js";

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

export const fetchText = (path: string) =>
	fetch(path).then((res) => res.text()).catch(() => null);
export const fetchJson = <R>(path: string) =>
	fetch(path).then((res) => res.json()).catch(() => null) as Promise<Awaited<R | null>>;

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

const visited = new WeakMap();
const type = (obj: any, access: string): string => {
	const constructor = obj?.constructor?.name;

	switch (constructor) {
		case "Map":
			return "Map<any,any>";
		case "Set":
			return "Set<any>";
		case "Uint8Array":
			return "Uint8Array";
		case "Promise":
			return "Promise<any>";
	}

	if (obj instanceof Element) return "Element";
	if (obj instanceof HTMLElement) return "HTMLElement";

	const wrapVisited = (obj: any) => {
		const typeRef = visited.get(obj);
		if (typeRef) return typeRef;
		visited.set(obj, access);
	};

	switch (typeof obj) {
		case "function": {
			const cached = wrapVisited(obj);
			if (cached) return cached;
			if (obj.length === 0) {
				let ret = "any";
				try {
					ret = type(obj(), `ReturnType<${access}>`);
				} catch (_) { }
				return `()=>${ret}`;
			}
			const identifiers = "abcdefghijklmnopqrstuvwzyz_$".split("").map((i) =>
				`${i}:any`
			);
			return `(${identifiers.slice(0, obj.length).join(",")})=>any`;
		}
		case "object": {
			if (obj === null) return "null";
			// const p = Object.getPrototypeOf(obj);
			let cached: string;
			// if (p !== Object.prototype && p.constructor) {
			// 	cached = wrapVisited(p);
			// } else {
			cached = wrapVisited(obj);
			// }
			if (cached) return cached;
			if (Array.isArray(obj)) {
				const types = obj.map((e, i) => type(e, `${access}[${i}]`));
				// @ts-ignore: Property 'groupBy' does not exist on type 'ObjectConstructor'.
				const uniqueTypes = Array.from(new Set(types));
				return `Array<${uniqueTypes.join("|")}>`;
			}

			const prototypes = [obj];
			while (true) {
				const p = Object.getPrototypeOf(prototypes.at(-1));
				if (p === Object.prototype) break;
				prototypes.push(p);
			}
			const blacklist = ["constructor"];
			return prototypes.reduce((acc, p) => {
				return `${acc}&{${Object.getOwnPropertyNames(p)
					.filter((k) => !blacklist.includes(k))
					.sort()
					.map((k) => `"${k}":${type(obj[k], `${access}["${k}"]`)}`)
					.join(";")
					}}`;
			}, "");
		}
		default:
			return typeof obj;
	}
};

function isObject(o: any) {
	return Object.getPrototypeOf(o) === Object.prototype;
}

const defaultOverride = (curr: any, val: any, key: any) => {
	if (Array.isArray(curr) && Array.isArray(val)) {
		val.push(...curr);
	}
	return val;
};

export function deepMerge<T, S>(
	target: T,
	source: S,
	override = defaultOverride,
): T & S {
	// @ts-ignore
	for (const [key, val] of Object.entries(source)) {
		// @ts-ignore
		if (Object.hasOwn(target, key)) {
			// @ts-ignore
			const curr = target[key];
			if (isObject(curr) && isObject(val)) {
				deepMerge(curr, val, override);
				continue;
			}
			// @ts-ignore
			target[key] = override(curr, val, key);
		} else {
			// @ts-ignore
			target[key] = val;
		}
	}
	// @ts-ignore
	return target;
}

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

export class Transition {
	private complete = true;
	private promise = Promise.resolve();
	constructor() { }

	public extend() {
		this.complete = false;
		const p = Promise.withResolvers<void>();
		this.promise = this.promise.then(() => p.promise).finally(() =>
			this.complete = true
		);
		return p.resolve;
	}

	public isComplete() {
		return this.complete;
	}

	public block() {
		return this.promise;
	}

	// If the task rejects, the transition will never complete
	public async new<R>(task: () => Promise<R>) {
		await this.block();
		const resolve = this.extend();
		const r = await task();
		resolve();
		return r;
	}
}

export const proxy = (init: RequestInfo | URL, options: RequestInit = {}) => {
	const proxy = isOpen() ? localProxy : remoteProxy;
	return proxy(init, options);
};

const localProxyUrl = new URL(`http://${LOCAL_PROXY_HOST}/proxy/`);
export const localProxy = (
	input: RequestInfo | URL,
	init: RequestInit = {},
): [Request, RequestInit] => {
	let url: URL;
	if (typeof input === "string") {
		url = new URL(input);
	} else if (input instanceof Request) {
		url = new URL(input.url);
	} else if (input instanceof URL) {
		url = input;
	} else {
		throw "Unsupported input type";
	}

	url = new URL(localProxyUrl + encodeURIComponent(url.toString()));

	let headers: Headers;
	if (init.headers) {
		headers = new Headers(init.headers);
	} else if (input instanceof Request) {
		headers = input.headers;
	} else {
		headers = new Headers();
	}

	const _headers = new Headers();
	_headers.set("X-Set-Headers", JSON.stringify(Object.fromEntries(headers)));

	init.headers = _headers;

	if (input instanceof Request) {
		// @ts-ignore
		input.duplex = "half";
	}

	const request = new Request(
		url,
		input instanceof Request ? input : undefined,
	);
	return [request, init];
};

export const remoteProxy = (
	input: RequestInfo | URL,
	init: RequestInit = {},
): [Request, RequestInit] => {
	let url: URL;
	if (typeof input === "string") {
		url = new URL(input);
	} else if (input instanceof Request) {
		url = new URL(input.url);
	} else if (input instanceof URL) {
		url = input;
	} else {
		throw "Unsupported input type";
	}
	url.host = `${url.host.replaceAll(".", "-20")}.delusoire.top`;

	let headers: Headers;
	if (init.headers) {
		headers = new Headers(init.headers);
	} else if (input instanceof Request) {
		headers = input.headers;
	} else {
		headers = new Headers();
	}

	const _headers = new Headers();
	_headers.set("X-Set-Headers", JSON.stringify(Object.fromEntries(headers)));

	init.headers = _headers;

	if (input instanceof Request) {
		// @ts-ignore
		input.duplex = "half";
	}

	const request = new Request(
		url,
		input instanceof Request ? input : undefined,
	);
	return [request, init];
};

export const remoteProxy2 = (
	input: RequestInfo | URL,
	init: RequestInit = {},
): [Request, RequestInit] => {
	let url: URL | string;
	if (typeof input === "string") {
		url = new URL(input);
	} else if (input instanceof Request) {
		url = new URL(input.url);
	} else if (input instanceof URL) {
		url = input;
	} else {
		throw "Unsupported input type";
	}
	url = `https://cors-proxy.spicetify.app/${url}`;

	let headers: Headers;
	if (init.headers) {
		headers = new Headers(init.headers);
	} else if (input instanceof Request) {
		headers = input.headers;
	} else {
		headers = new Headers();
	}

	const _headers = new Headers();
	for (
		const [kp, k] of [
			["X-Cookie", "Cookie"],
			["X-Referer", "Referer"],
			["X-Origin", "Origin"],
			["X-User-Agent", "User-Agent"],
			["X-X-Real-Ip", "X-Real-Ip"],
		]
	) {
		const v = headers.get(k);
		if (v) {
			_headers.set(kp, v);
		}
	}

	init.headers = _headers;

	if (input instanceof Request) {
		// @ts-ignore
		input.duplex = "half";
	}

	const request = new Request(
		url,
		input instanceof Request ? input : undefined,
	);
	return [request, init];
};
