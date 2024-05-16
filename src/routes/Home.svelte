<script lang="ts">
    import ButtonGradient from "../components/ButtonGradient.svelte";
    import HeroBanner from "../components/HeroBanner.svelte";
    import type {Game} from "../components/utils/Game";
    import {GameService} from "../service/GameService";
    import {navigate} from "svelte-routing";
    import {QUIZ_PAGE} from "../constants";
    import {initGame} from "../components/utils/Game";

    const gameService = new GameService();
    const startNewGame = async () => {
        //todo récupérer userName in localstorage
        const username = "testUser";
        const gameToCreate: Game = initGame(username, new Date());

        await gameService.createGame(gameToCreate).then((gameCreated: void | Game) => {
            if (!gameCreated){
                throw new Error('An error occured when creating a game.');
            }
            const queryParams = `?game=${gameCreated.id}`;
            navigate(`${QUIZ_PAGE}${queryParams}`);
        }).catch(error => {
            console.error('Error creating game:', error);
        });
    }
</script>

<!--todo when authentication is set disabled if user is not loged-->
<div class="container mx-auto flex flex-col h-full items-center justify-center">
    <HeroBanner/>

    <ButtonGradient on:click={startNewGame} text="Lancer une partie" disabled={false}/>
</div>