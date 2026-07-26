<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function capitalize(value: string): string {
		return value ? value[0].toUpperCase() + value.slice(1) : value;
	}
</script>

<svelte:head>
	<title>My pronouns are {data.path} · pronounsa.re</title>
	<meta
		name="description"
		content={`Example sentences using ${data.path} pronouns.`}
	/>
</svelte:head>

<div class="site-shell">
	<header class="site-header">
		<a class="brand" href="/"><span class="brand-mark" aria-hidden="true">✦</span>pronounsa.re</a>
		<a href="https://github.com/elikoga/pronounsare">source</a>
	</header>

	<main>
		<p class="eyebrow">{data.hostname}</p>
		<h1 class="result-heading">My pronouns are <span class="path">{data.path}</span></h1>

		{#if data.pronouns.length > 0}
			<div class="result-list">
				{#each data.pronouns as pronoun}
					<article class="result-card">
						<h2>{pronoun.subject}/{pronoun.object}</h2>
						<p class="example"><strong>{capitalize(pronoun.subject)}</strong> went to the park.</p>
						<p class="example">I went with <strong>{pronoun.object}</strong>.</p>
						<p class="example"><strong>{capitalize(pronoun.subject)}</strong> brought <strong>{pronoun.dependentPossessive}</strong> frisbee.</p>
						<p class="example">At least I think it was <strong>{pronoun.independentPossessive}</strong>.</p>
						<p class="example"><strong>{capitalize(pronoun.subject)}</strong> threw the frisbee to <strong>{pronoun.reflexive}</strong>.</p>
					</article>
				{/each}
			</div>
		{:else}
			<p class="lede">I couldn't find a matching set yet, but this URL is still yours to share.</p>
		{/if}

		<p><a class="button" href="/">Make another page</a></p>
	</main>

	<footer class="site-footer">
		<span>Made for sharing, not sorting people.</span>
		<a href="https://github.com/elikoga/pronounsare">Open source on GitHub</a>
	</footer>
</div>
