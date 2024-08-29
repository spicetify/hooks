/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

export const fetchText = (path: string) =>
	fetch(path).then((res) => res.text()).catch(() => null);

export const fetchJson = <R>(path: string) =>
	fetch(path).then((res) => res.json()).catch(() => null) as Promise<Awaited<R | null>>;
