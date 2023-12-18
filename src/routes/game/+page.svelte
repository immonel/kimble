<script lang="ts">
	import TeamButton from '$components/TeamButton.svelte';
	import { colors } from '$lib/colors';
	import { Game } from '$lib/game';
	import { games, pageTitle } from '$lib/store';
	import { page } from '$app/stores';
	import kimblelogo from '$lib/assets/kimble.svg'
	import { onMount } from 'svelte';

	let gameId: string;
	onMount(() => {
		gameId = $page.url.searchParams.get('id') || '';
	})
	let game = new Game();
	
	$: game = $games[gameId];
	$: $pageTitle = game?.name;
</script>

<div class="flex flex-col gap-5 w-full items-center">
	<img src={kimblelogo} alt="kimble logo" class="w-60 my-10 drop-shadow-xl" />
	{#if $games[gameId]}
		<div class="flex -mx-1 -px-1 flex-wrap w-11/12 lg:w-1/3">
			{#each colors as color}
				<div class="w-1/2 px-1 py-1">
					<TeamButton bind:team={$games[gameId].teams[color]} />
				</div>
			{/each}
		</div>
	{:else}
		<p>Loading game...</p>
	{/if}
</div>