import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	optimizeDeps: {
		include: ['flowbite-svelte', 'flowbite-svelte-icons', 'temporal-polyfill'],
		exclude: ['@sveltejs/kit', 'svelte']
	},
	server: {
		fs: {
			allow: ['.']
		},
		hmr: {
			overlay: false
		}
	},
	build: {
		rollupOptions: {
			external: []
		},
		sourcemap: false
	},
	cacheDir: 'node_modules/.vite',
	css: {
		devSourcemap: false
	}
});
