<script lang="ts">
	import github from '$lib/images/github.svg';
	import Toggle from './Toggle.svelte';
	import { Button, ButtonGroup } from 'flowbite-svelte';
</script>

<header>
	<div class="corner">My homepage</div>

	<nav>
		<ButtonGroup class="*:!ring-primary-700">
			<Button href="/">Home</Button>
			<Button href="/about">About</Button>
			<Button href="/gallery">Gallery</Button>
			<Button href="/posts">Posts</Button>
		</ButtonGroup>
		<Toggle></Toggle>
	</nav>

	<div class="corner flex">
		<a href="https://github.com/Acylation">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}
</style>
