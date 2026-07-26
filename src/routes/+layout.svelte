<script lang="ts">
	import '../app.css';

	import logo from '$lib/assets/pronounsa-logo.webp';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
</svelte:head>

{@render children()}
