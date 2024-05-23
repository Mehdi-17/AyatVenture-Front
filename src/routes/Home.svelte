<script lang="ts">
    import ButtonGradient from "../components/ButtonGradient.svelte";
    import HeroBanner from "../components/HeroBanner.svelte";
    import type {Game} from "../components/utils/Game";
    import {GameService} from "../service/GameService";
    import {navigate} from "svelte-routing";
    import {QUIZ_PAGE} from "../constants";
    import {initGame} from "../components/utils/Game";
    import {gameState} from "../stores/gameStore";
    import {currentQuestionState} from "../stores/currentQuestionStore";

    const gameService = new GameService();

    const startNewGame = () => {
        //todo récupérer username depuis le token de connexion
        const username = "testUser";

        gameService.initCreateGameAndRedirectToQuiz(username);
    }
</script>

<!--todo when authentication is set disabled if user is not loged-->
<div class="container mx-auto flex flex-col h-full items-center justify-center">
    <HeroBanner/>

    <ButtonGradient on:click={startNewGame} text="Lancer une partie" disabled={false}/>
</div>