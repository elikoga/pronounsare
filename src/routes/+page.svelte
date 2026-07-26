<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let input = $state('');
	let error = $state('');

	function destination(value: string): string | undefined {
		const segments = value
			.trim()
			.split(/[\s/]+/)
			.map((segment) => segment.trim().toLowerCase())
			.filter(Boolean);

		if (segments.length === 0) {
			return undefined;
		}

		return `/${segments.join('/')}`;
	}

	function submit(event: SubmitEvent) {
		event.preventDefault();
		const path = destination(input);
		if (!path) {
			error = 'Enter at least one pronoun word to get started.';
			return;
		}

		error = '';
		window.location.href = path;
	}
</script>

<svelte:head>
	<title>{data.isPersonalSubdomain ? 'My pronouns are…' : 'Pronouns are…'}</title>
	<meta
		name="description"
		content="A small, shareable page for finding and sharing pronouns."
	/>
</svelte:head>

<div class="site-shell">
	<header class="site-header">
		<a class="brand" href="/"><span class="brand-mark" aria-hidden="true">✦</span>pronounsa.re</a>
		<a href="https://github.com/elikoga/pronounsare">source</a>
	</header>

	<main class="hero">
		<p class="eyebrow">{data.hostname}</p>
		<h1>What are your pronouns?</h1>
		<p class="lede">
			Make a tiny page you can share. Add the words you use, and pronounsa.re will turn them into
			clear example sentences.
		</p>

		<form class="pronoun-form" onsubmit={submit}>
			<label class="sr-only" for="pronouns">Your pronouns</label>
			<input
				id="pronouns"
				bind:value={input}
				placeholder="she / her / hers / herself"
				autocomplete="off"
				aria-describedby={error ? 'form-error' : 'form-hint'}
			/>
			<button class="button" type="submit">Make my page</button>
		</form>
		{#if error}
			<p id="form-error" class="hint" role="alert">{error}</p>
		{:else}
			<p id="form-hint" class="hint">Use up to five words, separated by spaces or slashes.</p>
		{/if}

		<p class="muted">Try <a href="/he/they">my.pronounsa.re/he/they</a> or <a href="/she/her/her/hers/herself">a complete set</a>.</p>
	</main>

	<footer class="site-footer">
		<span>Made for sharing, not sorting people.</span>
		<a href="https://github.com/elikoga/pronounsare">Open source on GitHub</a>
	</footer>
</div>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
