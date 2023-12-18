<script lang="ts">
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { Game } from '$lib/game'
  import { addGame, pageTitle } from '$lib/store';
  import { Color } from '$types';
  
  $pageTitle = 'New game';
  
  const { YELLOW, GREEN, BLUE, RED } = Color
  const game = new Game();

  const fields = {
    game: '',
    yellow: '',
    green: '',
    blue: '',
    red: ''
  }

  const createGame = () => {
    if (fields.game)   game.name = fields.game
    if (fields.yellow) game.teams[YELLOW].name = fields.yellow
    if (fields.green)  game.teams[GREEN].name  = fields.green
    if (fields.blue)   game.teams[BLUE].name   = fields.blue
    if (fields.red)    game.teams[RED].name    = fields.red

    addGame(game);
    goto(`${base}/game?id=${game.id}`)
  }
</script>

<div class="flex flex-col gap-2">
  <label class="flex flex-col text-start">
    Game name
    <input
      bind:value={fields.game}
      placeholder={game.name}
      class="
        p-3 rounded-xl
        bg-gray-200 dark:bg-gray-800
      "
    />
  </label>
  <label class="flex flex-col text-start gap-1">
    Team names
    <input
      bind:value={fields.yellow}
      placeholder={game.teams[YELLOW].name}
      type="search"
      class="
        p-3 rounded-xl
        bg-yellow-200 dark:bg-yellow-700
      "
    />
    <input
      bind:value={fields.green}
      placeholder={game.teams[GREEN].name}
      class="
        p-3 rounded-xl
        bg-green-200 dark:bg-green-700
      "
    />
    <input
      bind:value={fields.blue}
      placeholder={game.teams[BLUE].name}
      class="
        p-3 rounded-xl
        bg-blue-200 dark:bg-blue-700
      "
    />
    <input
      bind:value={fields.red}
      placeholder={game.teams[RED].name}
      class="
        p-3 rounded-xl
        bg-red-200 dark:bg-red-800
      "
    />
  </label>
  <button
    on:click={() => createGame()}
    class="
      p-3 rounded-xl
      bg-gray-200 dark:bg-gray-800
    "
  >
    <i class="bi-arrow-right" />
    Create game
  </button>
</div>