<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { fade } from 'svelte/transition';
	import '../app.css';

	let { children, data } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<Header />

	<main
		class="mx-auto flex w-full max-w-screen-2xl flex-1 flex-col px-4 py-8 sm:py-16 lg:px-6"
		in:fade
	>
		{@render children?.()}
	</main>

	<Footer />
</div>

<style></style>
