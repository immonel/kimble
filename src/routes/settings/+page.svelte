<script lang="ts">
  import { base } from "$app/paths";
  import { deleteAllGames, pageTitle } from "$lib/store";

  $pageTitle = "Settings";
</script>

<div class="flex flex-col gap-3 mt-20">
  <button
    on:click={() => confirm('Are you sure?') && deleteAllGames()}
    class="
      p-3 rounded-xl w-60
      bg-red-300 dark:bg-red-800
    "
  >
    Delete all games
  </button>
  <a href="{base}/" class="
    p-3 rounded-xl w-60
    bg-gray-200 dark:bg-gray-800
  ">
    Back
  </a>
</div>