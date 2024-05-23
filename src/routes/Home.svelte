<script lang="ts">
    import ButtonGradient from "../components/ButtonGradient.svelte";
    import HeroBanner from "../components/HeroBanner.svelte";
    import {GameService} from "../service/GameService";

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