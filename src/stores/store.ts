import {writable} from "svelte/store";
import type {Writable} from "svelte/store";
import type {Game} from "../components/utils/Game";

export const gameState: Writable<Game | null> = writable(null);