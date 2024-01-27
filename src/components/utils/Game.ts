import type {Joker} from "./Joker";

export class Game {
    username:string;
    beginDate: Date;
    score: number;
    totalQuestion: number;
    currentQuestionCount: number;
    jokers: Joker[];


    constructor(username: string, beginDate: Date, totalQuestion: number) {
        this.username = username;
        this.beginDate = beginDate;
        this.score = 0
        this.totalQuestion = totalQuestion;
        this.currentQuestionCount = 0;
        this.jokers = [];
    }
}