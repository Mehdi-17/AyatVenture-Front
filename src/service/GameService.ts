import type {Game} from "../components/utils/Game";
import type {Surah} from "../components/utils/Surah";
import type {Ayat} from "../components/utils/Ayat";
import {callApi} from "../utils/apiUtils";

export class GameService {
    constructor() {
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