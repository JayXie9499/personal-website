<script lang="ts">
	import './layout.css';
	import '@fontsource/monaspace-neon/400.css';
	import '@fontsource/monaspace-neon/500.css';
	import '@fontsource/monaspace-neon/600.css';
	import '@fontsource/intel-one-mono/latin-400.css';
	import '@fontsource/intel-one-mono/latin-500.css';
	import '@fontsource/intel-one-mono/latin-600.css';
	import '@fontsource/space-grotesk/latin-400.css';
	import '@fontsource/space-grotesk/latin-500.css';
	import '@fontsource/space-grotesk/latin-700.css';
	import '@fontsource/syne/latin-400.css';
	import '@fontsource/syne/latin-500.css';
	import '@fontsource/syne/latin-700.css';
	import '@fontsource/lxgw-wenkai-tc/chinese-traditional-400.css';
	import '@fontsource/lxgw-wenkai-tc/chinese-traditional-700.css';
	import '@fontsource/noto-sans-tc/chinese-traditional-400.css';
	import '@fontsource/noto-sans-tc/chinese-traditional-500.css';
	import '@fontsource/noto-sans-tc/chinese-traditional-700.css';
	import { PUBLIC_CDN_URL } from '$env/static/public';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="{PUBLIC_CDN_URL}/icons/favicon.svg" type="image/svg+xml" />
	<link rel="icon" href="{PUBLIC_CDN_URL}/icons/favicon.ico" type="image/x-icon" sizes="any" />
</svelte:head>

{@render children()}
