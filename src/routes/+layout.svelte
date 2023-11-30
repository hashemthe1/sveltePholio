<script lang="ts">
	import '../app.postcss';
	import ThemeSwitcher from '$lib/components/utils/ThemeSwitcher.svelte';
	import { Toaster } from 'svelte-french-toast';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />

<div class="hidden">
	<ThemeSwitcher type="toggle" />
</div>
<Toaster />
