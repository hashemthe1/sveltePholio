<script lang="ts">
	import FormElement from './formElement.svelte';
	import type { FormStructure } from '$lib/components/form/inputType';

	export let formStructure: FormStructure;
</script>

{#each formStructure as row}
	{#each row as field}
		<FormElement {field} />
	{/each}
{/each}
