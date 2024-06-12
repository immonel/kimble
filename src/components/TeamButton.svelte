<script lang="ts">
  import { colorMap } from "$lib/colors";
  import { Team } from "$lib/game";
  import TeamModal from "./TeamModal.svelte";
  export let team: Team;

  let modalVisible = false;
  const showModal = () => modalVisible = true;

  const maxRaiseIcons = 6;

  $: penaltyLeft = team.penalty - team.points;
</script>

{#if team}
  <button
    on:click={showModal}
    class="
      {colorMap[team.color].class}
      hover:{colorMap[team.color].hoverClass}
      p-3 w-full h-20 rounded-xl
    "
  >
    <div class="text-start">
      <p class="truncate">{team.name}</p>
    </div>
    <div class="flex justify-between">
      <div class="flex items-center text-start">
        <p class="text-sm">{'👑'.repeat(Math.min(team.raises, maxRaiseIcons))}</p>
      </div>
      <p class="text-2xl min-w-fit">{penaltyLeft} / {team.penalty}</p>
    </div>
  </button>
{:else}
  <button class="
    p-3 w-full h-20 rounded-xl flex justify-between
    bg-grey-300
  ">
    Not in game
  </button>
{/if}
<TeamModal bind:team={team} bind:visible={modalVisible} />