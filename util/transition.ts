/*
 * Copyright (C) 2024 Delusoire
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

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
