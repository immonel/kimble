import { Game } from "$lib/game";
import { writable, type Writable } from "svelte/store";
import { persisted } from "svelte-persisted-store";

type GameStore = {
  [id: string]: Game;
}
export const games: Writable<GameStore> = persisted('games', {});

export const addGame = (game: Game) => {
  games.update(games => ({
    ...games,
    [game.id]: game
  }))
}

export const deleteAllGames = () => games.set({})

export const pageTitle = writable('')