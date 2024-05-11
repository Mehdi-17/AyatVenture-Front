<script lang="ts">
    import type {Game} from "../components/utils/Game";
    import {GameService} from "../service/GameService";
    import type {Surah} from "../components/utils/Surah";
    import type {Ayat} from "../components/utils/Ayat";
    import ButtonGradient from "../components/ButtonGradient.svelte";
    import AnswerReveal from "../components/AnswerReveal.svelte";
    import Timer from "../components/Timer.svelte";
    import {onMount} from "svelte";

    const gameService = new GameService();

    let game: Game;
    let allSurahs: Surah[] = [];
    let ayatToFind: Ayat;
    let playerAnswer: Surah;
    let surahIsFound: boolean | null;
    let earnedPoints: number;
    let stopTimer: boolean = false;
    let timeLeft: number = 60;
    let usedJoker: number = 0;
    let timerResetKey: number = 0;

    //TODO: features to develop : JOKERS

    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const gameId: number = Number(urlParams.get("game"));

        gameService.getGame(gameId).then((gameResponse: Game) => {
            game = gameResponse;
        });

        getAnAyat();
        getAllSurah();

    });

    const getAllSurah = async () => {
        await gameService.getAllSurah().then((surahs: Surah[]) => {
            allSurahs = surahs;
        });
    }

    const getAnAyat = async () => {
        await gameService.getRandomAyat().then((ayat: Ayat) => {
            ayatToFind = ayat;
            earnedPoints = 0;
            timeLeft = 60;
            stopTimer = false;
            usedJoker = 0;
            surahIsFound = null;
            timerResetKey++;
        })
    }

    const checkResponse = (surahClicked: Surah) => {
        playerAnswer = surahClicked;
        surahIsFound = surahClicked.id === ayatToFind.chapter_id;
        stopTimer = true;

        earnedPoints = surahIsFound ? Math.max(5, getPointsFromQuiz(timeLeft) - (usedJoker * 5)) : 0;
    }

    const getPointsFromQuiz = (timeLeft: number): number => {
        //todo trouver une meilleure méthode de calcule
        return 100 - (60 - timeLeft);
    }

    const goToNextQuestion = () => {
        //todo ajouter les points et incrémenter le question count sur la game en bdd
        getAnAyat();
    }
</script>

{#if (ayatToFind)}
    <div class="flex flex-row items-center h-full justify-center mx-20">
        <div class="flex flex-col items-center w-full xl:w-4/5">
            {#key timerResetKey}
                <Timer {stopTimer} bind:timeLeft/>
            {/key}
            <div class="flex flex-col justify-center items-center bg-secondary opacity-75 mx-auto w-4/5 shadow-lg rounded-lg p-5">
                <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                    Dans quelle sourate se trouve ce verset ?
                </h1>
                <div class="text-2xl flex flex-col items-center">
                    <p class="mb-2">{ayatToFind.text_uthmani}</p>
                    <p>{ayatToFind.translations[0].text.replace(/<[^>]+>[^<]*<\/[^>]+>/g, "")}</p>
                </div>

                {#if surahIsFound !== null && surahIsFound !== undefined}
                    <AnswerReveal goodAnswer="{allSurahs[ayatToFind.chapter_id-1]}" answerIsGood="{surahIsFound}"
                                  {playerAnswer} {earnedPoints}/>

                    {#if game.currentQuestionCount !== game.totalQuestion}
                        <ButtonGradient on:click={() => goToNextQuestion()} text="Prochaine question" disabled={false}
                                        additionalClass="my-2"/>
                    {/if}
                {/if}
            </div>
        </div>

        <!--RIGHT PANNEL-->
        <div class="flex flex-col items-center bg-secondary opacity-75 h-5/6 overflow-scroll p-2">
            {#if (allSurahs.length > 0)}
                {#each allSurahs as surah}
                    <ButtonGradient on:click={() => checkResponse(surah)} additionalClass="my-2"
                                    text={surah.id + ": " +surah.name_complex} disabled={false}/>
                {/each}
            {/if}
        </div>
    </div>
{/if}

<!--TODO: develop a loader-->