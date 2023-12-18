<script>
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
</script>

<button
  on:click={() => goto(`${base}/`)}
  class="
    rounded-lg p-1 w-12 h-12
    bg-gray-200 dark:bg-gray-800
  "
>
  <i class="bi-arrow-left-short text-4xl" />
</button>