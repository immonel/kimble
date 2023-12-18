<script lang="ts">
  import { games, pageTitle } from "$lib/store";
  import _ from 'lodash';

  $pageTitle = 'Saved games';
  
  const gamesByDate = _(Object.values($games))
    .sort((a, b) => b.id - a.id)
    .groupBy(game => new Date(game.id).toLocaleDateString())
    .value()
</script>

<div class="flex flex-col gap-3 w-full">
  <div class="text-start">
    {#each _.toPairs(gamesByDate) as [date, games]}
      <h3 class="p-2">{date}</h3>
      <ul class="flex flex-col divide-y gap-1 shadow
        bg-gray-200 dark:bg-gray-800 divide-slate-300 dark:divide-slate-700 dark:shadow-black
      ">
        {#each games as game}
          <a href={`/game?id=${game.id}`}>
            <li class="p-4 truncate">
              {game.name}
            </li>
          </a>
        {/each}
      </ul>
    {/each}
  </div>
</div>