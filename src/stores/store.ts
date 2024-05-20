import {writable} from "svelte/store";
import type {Writable} from "svelte/store";
import type {Game} from "../components/utils/Game";
import type {Ayat} from "../components/utils/Ayat";
import type {Surah} from "../components/utils/Surah";

export const gameState: Writable<Game | null> = writable(null);

const initialQuestionState: CurrentQuestion = {
    ayat: null,
    timeLeft: 60,
    usedJoker: 0,
    playerAnswer: null,
    timerResetKey: 0,
    stopTimer: false,
    isAnswerDivDisabled: false,
    earnedPoints: 0,
};

export const {subscribe, set, update}: Writable<CurrentQuestion> = writable(initialQuestionState);

const resetQuestion = () => {
    update(state => {
        if (state) {
            const preservedTimerResetKey = state.timerResetKey;
            return {...initialQuestionState, timerResetKey: preservedTimerResetKey};
        }
        return initialQuestionState;
    })
}

export const currentQuestionState = {
    subscribe,
    set,
    update,
    reset: resetQuestion,
}

export interface CurrentQuestion {
    ayat: Ayat | null;
    timeLeft: number;
    usedJoker: number;
    playerAnswer: Surah | null;
    timerResetKey: number;
    stopTimer: boolean;
    isAnswerDivDisabled: boolean;
    earnedPoints: number;
}