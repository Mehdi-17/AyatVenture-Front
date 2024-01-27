<script lang="ts">
    import ButtonGradient from "../components/ButtonGradient.svelte";
    import HeroBanner from "../components/HeroBanner.svelte";
    import {Game} from "../components/utils/Game";
    import {GameService} from "../service/GameService";

    const gameService = new GameService();
    const startNewGame = async () => {
        //todo récupérer userName in localstorage
        const username = "testUser";
        //todo create selection of total question for user
        const totalQuestion = 5
        const gameToCreate = new Game(username, new Date(), totalQuestion);

        await gameService.createGame(gameToCreate).then(gameCreated => {
            console.log("Game created : ", gameCreated);
        }).catch(error => {
            console.error('Error creating game:', error);
        });;
    }
</script>

<!--todo when authentication is set disabled if user is not loged-->
<div class="container mx-auto flex flex-col h-full items-center justify-center">
    <HeroBanner/>

    <ButtonGradient on:click={startNewGame} text="Lancer une partie" disabled={false}/>
</div>