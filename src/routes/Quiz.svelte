<script lang="ts">
    import {LOCAL_STORAGE_GAME} from "../constants";
    import type {Game} from "../components/utils/Game";
    import {GameService} from "../service/GameService";
    import type {Surah} from "../components/utils/Surah";

    const gameService = new GameService();
    const gameSerialized = localStorage.getItem(LOCAL_STORAGE_GAME);

    let game: Game;
    let allSurahs: Surah[] = [];

    const getAllSurah = async () => {
        await gameService.getAllSurah().then(surahs => {
            allSurahs = surahs;
        });
    }

    if (gameSerialized){
        game =  JSON.parse(gameSerialized);
        console.log(game);

        //todo: call api to get a question
        getAllSurah();
    }


</script>

<div>
    <p>Fetch question here</p>

    {#if (allSurahs.length > 0)}
        {#each allSurahs as surah}
            <p>{surah.name_complex}</p>
        {/each}
    {/if}

</div>
