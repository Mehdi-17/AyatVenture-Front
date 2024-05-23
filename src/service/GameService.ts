import type {Game} from "../components/utils/Game";
import type {Surah} from "../components/utils/Surah";
import type {Ayat} from "../components/utils/Ayat";
import {callApi} from "../utils/apiUtils";
import {initGame} from "../components/utils/Game";
import {currentQuestionState} from "../stores/currentQuestionStore";
import {gameState} from "../stores/gameStore";
import {navigate} from "svelte-routing";
import {QUIZ_PAGE} from "../constants";

export class GameService {
    constructor() {
    }

    async initCreateGameAndRedirectToQuiz(username: string) {
        try {
            const gameToCreate: Game = initGame(username, new Date());

            const gameCreated: void | Game = await this.createGame(gameToCreate);
            if (!gameCreated) {
                console.error('An error occurred when creating a game.');
                return;
            }

            currentQuestionState.reset();
            gameState.set(gameCreated);
            navigate(`${QUIZ_PAGE}`);
        } catch (error) {
            console.error('Error creating game:', error);
        }
    }

    async createGame(gameToCreate: Game): Promise<void | Game> {
        return callApi<Game>("http://localhost:8080/games", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gameToCreate),
        });
    }

    async updateGame(gameToUpdate: Game): Promise<void | Game> {
        return callApi<Game>(`http://localhost:8080/games/${gameToUpdate.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gameToUpdate),
        })
    }

    async getGame(gameId: number): Promise<void | Game> {
        return callApi<Game>(`http://localhost:8080/games/${gameId}`, {
            method: 'GET'
        })
    }

    async getAllSurah(): Promise<void | Surah[]> {
        return callApi<Surah[]>("http://localhost:8080/quran/surahs", {
            method: 'GET'
        });
    }

    async getRandomAyat(): Promise<void | Ayat> {
        return callApi<Ayat>("http://localhost:8080/quran/random", {
            method: 'GET'
        });
    }
}