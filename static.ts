/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

const { version } = window.navigator.userAgent.match(/Spotify\/(?<version>.+)\s/)!.groups!;
export const SPOTIFY_VERSION = version.slice(0, version.lastIndexOf("."));
