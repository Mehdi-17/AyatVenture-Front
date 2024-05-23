<script lang="ts">
    import type {Game} from "../components/utils/Game";
    import {GameService} from "../service/GameService";
    import type {Surah} from "../components/utils/Surah";
    import type {Ayat} from "../components/utils/Ayat";
    import ButtonGradient from "../components/ButtonGradient.svelte";
    import AnswerReveal from "../components/quizz/AnswerReveal.svelte";
    import Timer from "../components/quizz/Timer.svelte";
    import {onMount} from "svelte";
    import Loader from "../components/quizz/Loader.svelte";
    import {navigate} from "svelte-routing";
    import {ERROR_GETTING_AYAT, ERROR_GETTING_SURAH, RESULTS_PAGE} from "../constants";
    import {gameState} from "../stores/gameStore";
    import {currentQuestionState} from "../stores/currentQuestionStore";
    import type {CurrentQuestion} from "../stores/currentQuestionStore";

    const gameService = new GameService();

    let allSurahs: Surah[] = [];

    let game: Game;

    let ayatToFind: Ayat | null = null;
    let playerAnswer: Surah | null;
    let surahIsFound: boolean | null;
    let earnedPoints: number = 0;
    let stopTimer: boolean = false;
    let timeLeft: number = 60;
    let usedJoker: number = 0;
    let timerResetKey: number = 0;
    let isAnswerDivDisabled: boolean = false;

    //TODO: features to develop : JOKERS

    onMount(() => {
        const unsubscribeGame = gameState.subscribe(value => {
            if (value) {
                game = value;
            }
        });

        const unsubscribeCurrentQuestion = currentQuestionState.subscribe(value => {
            if (value) {
                timeLeft = value.timeLeft;
                ayatToFind = value.ayat;
                usedJoker = value.usedJoker;
                playerAnswer = value.playerAnswer;
                timerResetKey = value.timerResetKey;
                stopTimer = value.stopTimer;
                isAnswerDivDisabled = value.isAnswerDivDisabled;
                earnedPoints = value.earnedPoints;
            }
        });

        if (ayatToFind === null) {
            getAnAyat();
        }
        getAllSurah();

        return () => {
            unsubscribeGame();
            unsubscribeCurrentQuestion();
        }
    });

    const getAllSurah = async () => {
        try {
            const surahs = await gameService.getAllSurah();
            if (!surahs) {
                console.error('Error when fetching all surahs');
                displayError(ERROR_GETTING_SURAH);
                return;
            }
            allSurahs = surahs;
        } catch (error) {
            console.error("Error fetching all surah: ", error);
            displayError(ERROR_GETTING_SURAH);
        }
    }

    const getAnAyat = async () => {
        try {
            const randomAyat = await gameService.getRandomAyat();
            if (!randomAyat) {
                console.error("Error when getting random ayat");
                displayError(ERROR_GETTING_AYAT);
                return;
            }

            updateCurrentQuestionState({
                ayat: randomAyat,
                timerResetKey: timerResetKey + 1
            });

            surahIsFound = null;

            updateGameState({currentQuestionCount: game.currentQuestionCount + 1});
        } catch (error) {
            console.error("Error when getting random ayat: ", error);
            displayError(ERROR_GETTING_AYAT);
        }
    }

    const checkResponse = (surahClicked: Surah | null) => {
        if (surahClicked === null) {
            updateCurrentQuestionState({
                surahIsFound: false,
                earnedPoints: 0,
                isAnswerDivDisabled: true
            });
            return;
        }

        surahIsFound = surahClicked.id === ayatToFind?.chapter_id;

        updateCurrentQuestionState({
            playerAnswer: surahClicked,
            stopTimer: true,
            isAnswerDivDisabled: true,
            earnedPoints: surahIsFound ? Math.max(5, getPointsFromQuiz(timeLeft) - (usedJoker * 5)) : 0
        });
    }

    const getPointsFromQuiz = (timeLeft: number): number => {
        //todo trouver une meilleure méthode de calcule
        return 100 - (60 - timeLeft);
    }

    const goToNextQuestion = () => {
        game.score += earnedPoints;

        gameService.updateGame(game).then((updatedGame: void | Game) => {
            if (!updatedGame) {
                throw new Error("Error when updating game");
            }
            gameState.set(updatedGame);
            currentQuestionState.reset();

            if (game.currentQuestionCount === game.totalQuestion) {
                navigate(`${RESULTS_PAGE}`);
                return;
            }
            getAnAyat();
        }).catch(error => {
            console.log("Error updating game : ", error);
        });
    }

    const updateCurrentQuestionState = (updates: Partial<CurrentQuestion>) => {
        currentQuestionState.update(state => ({
            ...state,
            ...updates
        }));
    };

    const updateGameState = (updates: Partial<Game>) => {
        gameState.update(state => ({
            ...state,
            ...updates
        }));
    };


    const displayError = (messsage: string) => {
        alert(messsage);
    }
</script>

{#if ayatToFind}
    <div class="flex flex-row items-center h-full justify-center mx-20">

        <!--LEFT PANNEL-->
        <div class="flex flex-col items-center w-full xl:w-4/5">
            {#key timerResetKey}
                <Timer {stopTimer} bind:timeLeft on:timesUpEvent={()=>checkResponse(null)}/>
            {/key}
            <div class="flex flex-col justify-center items-center bg-secondary opacity-75 mx-auto w-4/5 shadow-lg rounded-lg p-5">
                <p>{game.currentQuestionCount}/{game.totalQuestion}</p>
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

                    <ButtonGradient on:click={() => goToNextQuestion()}
                                    text="{game.currentQuestionCount === game.totalQuestion ? 'Voir les résultats': 'Prochaine question'}"
                                    disabled={false}
                                    additionalClass="my-2"/>
                {/if}
            </div>
        </div>

        <!--RIGHT PANNEL-->
        <div class="flex flex-col items-center bg-secondary opacity-75 h-5/6 rounded-lg overflow-scroll p-2 {isAnswerDivDisabled ? 'pointer-events-none opacity-50' : '' }">
            {#if (allSurahs.length > 0)}
                {#each allSurahs as surah}
                    <ButtonGradient on:click={() => checkResponse(surah)} additionalClass="my-2"
                                    text={surah.id + ": " +surah.name_complex} disabled={false}/>
                {/each}
            {/if}
        </div>
    </div>
{:else }
    <div class="h-full flex justify-center items-center">
        <Loader/>
    </div>
{/if}