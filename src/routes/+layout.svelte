<script lang="ts">
	import '../app.css';
	import * as config from '$lib/config';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	import Sun from '@lucide/svelte/icons/sun';
	import Moon from '@lucide/svelte/icons/moon';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';

	import ResearchGateIcon from '$lib/images/research gate.svg';
	import GoogleScholarIcon from '$lib/images/google scholar.ico';
	import GithubIcon from '$lib/images/github.svg';

	const startYear = 2025;
	const currentYear = Temporal.Now.zonedDateTimeISO().year;
	const navItems = [
		{ href: '/about', label: '关于' },
		{ href: '/portfolio', label: '作品集' },
		{ href: '/research', label: '科研' },
		{ href: '/posts', label: '文章' },
		{ href: '/series', label: '专栏' }
	];

	let mobileOpen = $state(false);
	let isDark = $state(false);
	let { children } = $props();

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
		document.documentElement.classList.toggle('dark', isDark);
	});

	function toggleTheme() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}

	// 导航完成后自动关闭移动菜单
	afterNavigate(() => {
		mobileOpen = false;
	});

	function toggleMobileMenu() {
		mobileOpen = !mobileOpen;
	}
</script>

<div class="bg-page flex min-h-screen flex-col">
	<!-- Header -->
	<header class="site-navbar bg-surface fixed top-0 z-99 w-full">
		<div class="mx-auto flex h-16 w-full max-w-7xl items-center px-4 lg:px-6">
			<div class="relative grid w-full grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_1fr]">
				<a class="flex items-center justify-self-start" href="/">
					<img src="/logo.svg" alt="Acyl Blog Logo" class="me-3 h-9" />
					<span class="site-brand self-center text-xl whitespace-nowrap">Acyl Blog</span>
				</a>

				<nav class="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
					{#each navItems as item}
						<a
							href={item.href}
							class="rounded-md px-3 py-2 text-base font-semibold transition-colors text-muted hover:bg-(--bg-tertiary) hover:text-main"
						>
							{item.label}
						</a>
					{/each}
				</nav>

				<div class="flex items-center justify-end gap-2">
					<button
						type="button"
						onclick={toggleTheme}
						class="text-muted hover:text-main rounded-md bg-transparent p-2 hover:bg-(--bg-tertiary)"
						aria-label={isDark ? '切换为浅色模式' : '切换为深色模式'}
					>
						{#if isDark}
							<Sun class="h-5 w-5" aria-hidden="true" />
						{:else}
							<Moon class="h-5 w-5" aria-hidden="true" />
						{/if}
					</button>

					<button
						type="button"
						onclick={toggleMobileMenu}
						class="text-muted hover:text-main rounded-md bg-transparent p-2 hover:bg-(--bg-tertiary) md:hidden"
						aria-expanded={mobileOpen}
						aria-controls="mobile-nav"
						aria-label="切换导航菜单"
					>
						{#if mobileOpen}
							<X class="h-5 w-5" aria-hidden="true" />
						{:else}
							<Menu class="h-5 w-5" aria-hidden="true" />
						{/if}
					</button>
				</div>
			</div>
		</div>

		{#if mobileOpen}
			<nav id="mobile-nav" class="border-base bg-surface border-t px-4 py-3 md:hidden">
				<div class="flex flex-col gap-1">
					{#each navItems as item}
						<a
							href={item.href}
							class="rounded-md px-3 py-2 text-base font-semibold transition-colors text-muted hover:bg-(--bg-tertiary) hover:text-main"
						>
							{item.label}
						</a>
					{/each}
				</div>
			</nav>
		{/if}
	</header>

	<main
		class="text-main mx-auto mt-16 flex w-full max-w-7xl flex-1 flex-col px-4 py-8 sm:py-12 lg:px-6"
	>
		{@render children?.()}
	</main>

	<!-- footer -->
	<footer class="bg-page border-base w-full border-t">
		<div class="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
			<section
				class="grid grid-cols-1 items-center gap-4 text-sm md:grid-cols-[1fr_auto_1fr] md:gap-6"
			>
				<div class="text-muted order-3 text-center md:order-1 md:justify-self-start md:text-left">
					<p class="flex flex-wrap justify-center gap-x-1 md:justify-start">
						<span>&copy; {startYear} - {currentYear}</span>
						<span>{config.owner},</span>
						<span>All rights reserved.</span>
					</p>
				</div>

				<nav
					class="order-1 flex w-full flex-wrap justify-center gap-x-6 gap-y-2 md:order-2 md:w-auto md:justify-self-center"
				>
					{#each navItems as item}
						<a href={item.href} class="nav-link-subtle">
							{item.label}
						</a>
					{/each}
				</nav>

				<div
					class="order-2 flex items-center justify-center gap-4 md:order-3 md:justify-end md:justify-self-end"
				>
					<a
						href="https://scholar.google.com/citations?user=chiyu-liang&user=Yzc1A8sAAAAJ"
						target="_blank"
						rel="noopener noreferrer"
						class="nav-link-subtle"
						aria-label="Google Scholar"
					>
						<img
							src={GoogleScholarIcon}
							alt="Google Scholar"
							class="h-5 w-5 grayscale hover:grayscale-0"
						/>
					</a>
					<a
						href="https://www.researchgate.net/profile/Chiyu-Liang"
						target="_blank"
						rel="noopener noreferrer"
						class="nav-link-subtle"
						aria-label="ResearchGate"
					>
						<img
							src={ResearchGateIcon}
							alt="ResearchGate"
							class="h-5 w-5 grayscale hover:grayscale-0"
						/>
					</a>
					<a
						href="https://github.com/Acylation"
						target="_blank"
						rel="noopener noreferrer"
						class="h-5 w-5 nav-link-subtle"
						aria-label="GitHub"
					>
						<!-- hover 灰度-强调；svg 调用，viewbox 配置使之适合 20x20 -->
						<img
							src={GithubIcon}
							alt="GitHub"
							class="h-5 w-5 opacity-60 transition hover:opacity-100"
						/>
					</a>
				</div>
			</section>
		</div>
	</footer>
</div>
