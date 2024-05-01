<script lang="ts">
    import {LOCAL_STORAGE_GAME} from "../constants";
    import type {Game} from "../components/utils/Game";
    import {GameService} from "../service/GameService";
    import type {Surah} from "../components/utils/Surah";
    import type {Ayat} from "../components/utils/Ayat";
    import ButtonGradient from "../components/ButtonGradient.svelte";

    const gameService = new GameService();
    const gameSerialized = localStorage.getItem(LOCAL_STORAGE_GAME);

    let game: Game;
    let allSurahs: Surah[] = [];
    let ayatToFind: Ayat;
    let goodAnswer: number;
    let surahIsFound: boolean;
    let explanation: string;

    const getAllSurah = async () => {
        await gameService.getAllSurah().then((surahs: Surah[]) => {
            allSurahs = surahs;
        });
    }

    const getAnAyat = async () => {
        await gameService.getRandomAyat().then((ayat: Ayat) => {
            ayatToFind = ayat;
            goodAnswer = parseInt(ayatToFind.verse_key.split(":")[0], 10);
        })
    }

    const checkResponse = (surahClicked: Surah) => {
        surahIsFound = surahClicked.id === goodAnswer;
        explanation = "Tu as choisi la sourate " + surahClicked.id + " : " + surahClicked.translated_name.name+".La bonne réponse est la sourate " + goodAnswer + " : " + allSurahs[goodAnswer-1].translated_name.name;
    }

    if (gameSerialized) {
        game = JSON.parse(gameSerialized);

        getAnAyat();
        getAllSurah();
    }
</script>

<div class="flex flex-row items-center h-full justify-center mx-20">
    <div class="flex flex-col justify-center items-center bg-secondary opacity-75 mx-auto w-full xl:w-4/5 shadow-lg rounded-lg p-5">
        <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Dans quelle sourate se trouve ce verset ?
        </h1>
        {#if (ayatToFind)}
            <div class="text-2xl flex flex-col items-center">
                <p class="mb-2">{ayatToFind.text_uthmani}</p>
                <p>{ayatToFind.translations[0].text.replace(/<[^>]+>[^<]*<\/[^>]+>/g, "")}</p>
            </div>
        {/if}

    <!--TODO: si une réponse est selectionnée, on l'affiche ici    -->
        {#if surahIsFound === true}
            <p>Bonne réponse.</p>
            <p>{explanation}</p>
        {:else if surahIsFound === false}
            <p>Mauvaise réponse.</p>
            <p>{explanation}</p>
        {/if}
    </div>

    <div class="flex flex-col items-center bg-secondary opacity-75 h-5/6 overflow-scroll p-2">
        {#if (allSurahs.length > 0)}
            {#each allSurahs as surah}
                <ButtonGradient on:click={() => checkResponse(surah)} additionalClass="my-2" text={surah.id + ": " +surah.name_complex} disabled={false} />
            {/each}
        {/if}
    </div>
</div>