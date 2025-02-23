<script lang="ts">
	import * as config from '$lib/config';
	import { Temporal } from 'temporal-polyfill';
</script>

<footer>
	<p>{config.title} &copy {Temporal.Now.plainDateISO().year}</p>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);

		p {
			color: var(--text-2);
		}
	}
</style>
