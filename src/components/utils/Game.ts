import type {Joker} from "./Joker";

//todo check pour modifier
export class Game {
    id: number;
    username:string;
    beginDate: Date;
    score: number;
    totalQuestion: number;
    currentQuestionCount: number;
    jokers: Joker[];


    constructor(username: string, beginDate: Date, totalQuestion: number) {
        this.id = 0;
        this.username = username;
        this.beginDate = beginDate;
        this.score = 0
        this.totalQuestion = totalQuestion;
        this.currentQuestionCount = 0;
        this.jokers = [];
    }
}