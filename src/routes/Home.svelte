<script lang="ts">
    import ButtonGradient from "../components/ButtonGradient.svelte";
    import HeroBanner from "../components/HeroBanner.svelte";
    import {Game} from "../components/utils/Game";
    import {GameService} from "../service/GameService";
    import {navigate} from "svelte-routing";
    import {LOCAL_STORAGE_GAME, QUIZ_PAGE} from "../constants";

    const gameService = new GameService();
    const startNewGame = async () => {
        //todo récupérer userName in localstorage
        const username = "testUser";
        //todo create selection of total question for user
        const totalQuestion = 5;
        const gameToCreate = new Game(username, new Date(), totalQuestion);

        await gameService.createGame(gameToCreate).then((gameCreated: Game) => {
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