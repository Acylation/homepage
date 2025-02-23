<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Button } from 'flowbite-svelte';
	import { SunOutline, MoonOutline } from 'flowbite-svelte-icons';
	import { theme } from '$lib/theme.svelte';
</script>

<Button on:click={theme.toggle} aria-label="Toggle theme">
	{#if theme.current === 'dark'}
		<div in:fly={{ y: 10 }}>
			<SunOutline></SunOutline>
			<span>Light</span>
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<MoonOutline></MoonOutline>
			<span>Dark</span>
		</div>
	{/if}
</Button>
