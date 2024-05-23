<script lang="ts">

    import {gameState} from "../stores/gameStore";
    import {onMount} from "svelte";
    import ButtonGradient from "../components/ButtonGradient.svelte";
    import {GameService} from "../service/GameService";

    const gameService = new GameService();
    let totalPoints: number;

    onMount(() => {
        const unsubscribe = gameState.subscribe(value => {
            if (!value.score) {
                console.error("Error couldn't find the final score.")
            }
            totalPoints = value.score;
        });

        return () => {
            unsubscribe();
        }
    });

    const replay = () => {
        //todo récupérer username depuis le token de connexion
        const username = "testUser";

        gameService.initCreateGameAndRedirectToQuiz(username);
    }

    const displayEmoji = () => {
        switch (true) {
            case totalPoints < 100 :
                return '😅';
            case totalPoints >= 100 && totalPoints < 250 :
                return '😁';
            case totalPoints >= 250 && totalPoints < 400:
                return '🎉';
            case totalPoints >= 400:
                return '🤯';
        }
    }

</script>

{#if totalPoints}
    <div class="flex items-center h-full w-full xl:w-4/5 mx-auto">
        <div class="flex flex-col justify-center items-center bg-secondary opacity-75 w-4/5 mx-auto shadow-lg rounded-lg p-5">
            <p class="text-xl">{displayEmoji()} Ton score est de <span class="font-bold text-2xl">{totalPoints}</span>
                points.</p>
            <ButtonGradient on:click={replay} text="Rejouer" disabled={false} additionalClass="mt-8 text-xl"/>
        </div>
    </div>
{/if}