<script lang="ts">
  import { colorMap } from "$lib/colors";
  import type { Team } from "$lib/game";

  export let team: Team;
  export let visible: boolean = false;

  const hideModal = () => visible = false;

  const addPenalty = () => team.penalty += 1
  const addPoint = () => team.points += 1
  const raise = () => team.raises += 1
  const reset = () => {
    if (confirm('Are you sure?')) {
      team.penalty = 0
      team.points = 0
      team.raises = 0
    }
  }

  $: penaltyLeft = team.penalty - team.points;
</script>

{#if visible}
  <div tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative rounded-lg shadow">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 rounded-t-xl {colorMap[team.color].bgPrimary}">
                <h3 class="text-xl font-semibold truncate">
                    {team.name}
                </h3>
                <button type="button" on:click={hideModal} class="rounded-lg text-sm ml-6 w-8 h-8 ms-auto inline-flex justify-center items-center">
                    <i class="bi-x-lg">
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4 rounded-b-xl {colorMap[team.color].bgSecondary}">
                <p class="text-base leading-relaxed">
                    Total penalty: {team.penalty}
                    <br />
                    Penalty left: {penaltyLeft}
                    <br />
                    Raises: {team.raises}
                </p>
                <div>
                  <button
                    on:click={addPoint}
                    disabled={!(penaltyLeft > 0)}
                    class="drop-shadow-md p-4 rounded-xl w-2/5 {colorMap[team.color].bgPrimary} disabled:opacity-50"
                  >
                    <i class="bi-dash-lg" />
                    Remove penalty
                  </button>
                  <button
                    on:click={addPenalty}
                    class="drop-shadow-md p-4 rounded-xl w-2/5 {colorMap[team.color].bgPrimary}"
                  >
                    <i class="bi-plus-lg" />
                    Add penalty
                  </button>
                </div>
                <button
                  on:click={raise}
                  class="drop-shadow-md p-4 rounded-xl w-4/5 {colorMap[team.color].bgPrimary}"
                >
                  👑 Raise
                </button>
                <button
                  on:click={reset}
                  class="p-2 rounded-xl w-4/5 text-red-700"
                >
                  Reset points
                </button>
            </div>
        </div>
    </div>
  </div>
{/if}