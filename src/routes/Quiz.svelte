<script lang="ts">
    import {LOCAL_STORAGE_GAME} from "../constants";
    import type {Game} from "../components/utils/Game";
    import {GameService} from "../service/GameService";
    import type {Surah} from "../components/utils/Surah";
    import type {Ayat} from "../components/utils/Ayat";
    import ButtonGradient from "../components/ButtonGradient.svelte";
    import AnswerReveal from "../components/AnswerReveal.svelte";
    import Timer from "../components/Timer.svelte";

    const gameService = new GameService();
    const gameSerialized = localStorage.getItem(LOCAL_STORAGE_GAME);

    let game: Game;
    let allSurahs: Surah[] = [];
    let ayatToFind: Ayat;
    let playerAnswer: Surah;
    let surahIsFound: boolean;
    let timeLeft: number = 60;
    let stopTimer: boolean = false;

    const getAllSurah = async () => {
        await gameService.getAllSurah().then((surahs: Surah[]) => {
            allSurahs = surahs;
        });
    }

    const getAnAyat = async () => {
        await gameService.getRandomAyat().then((ayat: Ayat) => {
            ayatToFind = ayat;
        })
    }

    const checkResponse = (surahClicked: Surah) => {
        playerAnswer = surahClicked;
        surahIsFound = surahClicked.id === ayatToFind.chapter_id;
        stopTimer = true;
    }

    if (gameSerialized) {
        game = JSON.parse(gameSerialized);

        getAnAyat();
        getAllSurah();
    }
</script>

<div class="flex flex-row items-center h-full justify-center mx-20">

    <div class="flex flex-col items-center">
        <Timer {timeLeft} {stopTimer}/>
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

            {#if surahIsFound !== undefined}
                <AnswerReveal playerAnswer="{playerAnswer}" goodAnswer="{allSurahs[ayatToFind.chapter_id-1]}"
                              answerIsGood="{surahIsFound}"/>
            {/if}
        </div>
    </div>


    <div class="flex flex-col items-center bg-secondary opacity-75 h-5/6 overflow-scroll p-2">
        {#if (allSurahs.length > 0)}
            {#each allSurahs as surah}
                <ButtonGradient on:click={() => checkResponse(surah)} additionalClass="my-2"
                                text={surah.id + ": " +surah.name_complex} disabled={false}/>
            {/each}
        {/if}
    </div>
</div>