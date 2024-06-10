/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { fetchText } from "./util.js";

export const SPOTIFY_VERSION = await fetchText("/xpui.js").then(
	(xpui) => xpui.match(/clientVersion:"(?<version>\d+\.\d+\.\d+)/)!.groups!.version,
);
