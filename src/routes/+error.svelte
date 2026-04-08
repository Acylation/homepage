<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<svelte:head>
	<title>{page.status} | Acyl Blog</title>
</svelte:head>

<div class="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
	<h1 class="mb-2 text-8xl font-bold text-(--color-primary)">{page.status}</h1>
	<h2 class="text-main mb-4 text-2xl font-semibold">
		{page.status === 404 ? '页面未找到' : '出错了'}
	</h2>
	<p class="text-muted mb-8 max-w-md">
		{page.error?.message || '抱歉，请求的页面不存在或已被移动。'}
	</p>
	<Button href="/" size="lg" class="cta-primary">返回首页</Button>
</div>
