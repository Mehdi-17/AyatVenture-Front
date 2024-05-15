import type {Joker} from "./Joker";

export interface Game {
    id: number;
    username: string;
    beginDate: Date;
    score: number;
    totalQuestion: number;
    currentQuestionCount: number;
    jokers: Joker[];
}

export function initGame(username: string, beginDate: Date): Game {
    return {
        id: 0,
        username,
        beginDate,
        score: 0,
        totalQuestion: 5,
        currentQuestionCount: 1,
        jokers: []
    };
}