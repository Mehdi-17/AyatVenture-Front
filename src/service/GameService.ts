import type {Game} from "../components/utils/Game";
import type {Surah} from "../components/utils/Surah";

export class GameService {
    constructor() {
    }

    async createGame(gameToCreate: Game): Promise<Game> {
        return await fetch("http://localhost:8080/games", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gameToCreate),
        }).then(response => {
            return response.json();
        }).catch(error => {
            console.log("Something went wrong with the game creation.");
            throw error;
        });
    }

    async getAllSurah(): Promise<Surah[]>{
        return await fetch("http://localhost:8080/quran/surahs")
            .then(response=>{
               return response.json();
            }).catch(error => {
                console.log("Something went wrong when get all surahs");
                throw error;
            });
    }
}