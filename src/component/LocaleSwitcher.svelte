<script>
	import { createEventDispatcher } from 'svelte';
	import { t, locales, locale } from '$lib';
	import Select, { Option } from '@smui/select';
	const dispatch = createEventDispatcher();

	function switchLocale(event) {
		event.preventDefault();
		dispatch('locale-changed', event.target.value);
	}

	let choices = ['EN', 'TH'];
	let selected = 'EN';
</script>


<p>{$t('header.lang')}</p>
<select bind:value="{$locale}" style="margin-right: 10px; margin-left: 10px; border-radius: 10px;">
    {#each $locales as value}
      <option  value="{value}">{$t(`lang.${value}`)}</option>
    {/each}
  </select>
	
  

<style>
  p {
    color: aliceblue;
  }
</style>