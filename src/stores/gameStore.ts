import {writable} from "svelte/store";
import type {Writable} from "svelte/store";
import type {Game} from "../components/utils/Game";
import {getFromLocalStorage, saveToLocalStorage} from "../utils/localStorage";
import {initGame} from "../components/utils/Game";

const localStorageKey = 'CURRENT_GAME';

const savedState = getFromLocalStorage(localStorageKey, initGame('', new Date()));
export const gameState: Writable<Game> = writable(savedState);

gameState.subscribe((state: Game|null) => {
    if (state){
        saveToLocalStorage(localStorageKey, state);
    }
})
