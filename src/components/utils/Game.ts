import type {Joker} from "./Joker";

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

    public calculatePoints(timeLeft: number, jokerUsed: number): number{
        return Math.max(5, this.getPointsFromQuiz(timeLeft) - (jokerUsed * 5));
    }

    private getPointsFromQuiz(timeLeft: number): number{
        return 100 - (timeLeft - 10) * 2;
    }
}