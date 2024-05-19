<script lang="ts">

    import {gameState} from "../stores/store";
    import {onMount} from "svelte";

    let totalPoints: number | undefined;

    //TODO => COMPONENT TO DEVELOP

    onMount(()=>{
        const unsubscribe = gameState.subscribe(value => {
            totalPoints = value?.score;
        });

        return () => {
            unsubscribe();
        }
    })
</script>

{#if totalPoints}
    <p>{totalPoints}</p>
{/if}