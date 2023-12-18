<script lang="ts">
  import BackButton from '$components/BackButton.svelte';
  import '$lib/tailwind.css';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import { afterUpdate } from 'svelte';
  import { pageTitle } from '$lib/store';
  import '$lib/checkered.css';
  import { base } from '$app/paths';

  let backButtonVisible = false
  afterUpdate(() => {
    backButtonVisible = location.pathname !== `${base}/`
  })
</script>

<div class="h-screen font-bold dark:text-white touch-none">
  {#if backButtonVisible}
    <div class="flex p-2">
      <div class="flex-1">
        <BackButton />
      </div>
      <div class="flex items-center truncate text-lg">
        {$pageTitle}
      </div>
      <div class="flex-1" />
    </div>
  {/if}
  <div class="flex justify-center text-center">
    <slot />
  </div>
</div>