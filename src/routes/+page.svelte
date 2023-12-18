<script lang="ts">
  import kimblelogo from '$lib/assets/kimble.svg'
</script>

<div class="flex flex-col gap-3 pt-10">
  <img src={kimblelogo} alt="kimble logo" class="w-60 mb-10" />
  <a href="/new_game" class="bg-gray-200 dark:bg-gray-800 p-3 rounded-xl w-60">
    New game
  </a>
  <a href="/games" class="bg-gray-200 dark:bg-gray-800 p-3 rounded-xl w-60">
    Saved games
  </a>
  <a href="/settings" class="bg-gray-200 dark:bg-gray-800 p-3 rounded-xl w-60">
    Settings
  </a>
</div>