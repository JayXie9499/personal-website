<script lang="ts">
	import { onMount } from 'svelte';

	let currentYear = $state<number | null>(null);

	onMount(() => {
		currentYear = new Date().getFullYear();
	});
</script>

<!-- Footer -->
<footer class="mt-auto border-t border-border bg-bg-primary px-6 py-12" data-testid="footer">
	<div class="mx-auto flex w-full max-w-max-width justify-between px-6">
		<p class="text-left font-family-mono text-xs text-text-muted">
			Copyright © {currentYear ?? ''} Meng Che Hsieh. All rights reserved.
		</p>
	</div>
</footer>
