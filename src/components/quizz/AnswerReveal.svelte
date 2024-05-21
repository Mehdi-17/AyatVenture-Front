<script lang="ts">
    import type {Surah} from "../utils/Surah";

    export let playerAnswer: Surah | null;
    export let goodAnswer: Surah;
    export let answerIsGood: boolean;
    export let earnedPoints: number;

    const backGroundAnswer = answerIsGood ? "bg-green-500" : "bg-red-600";
</script>

<div class="mt-10 w-1/2 flex flex-col items-center">
    <p class="{backGroundAnswer}">{answerIsGood ? "Bonne réponse.".toUpperCase() : "Mauvaise réponse.".toUpperCase()}</p>

    <div class="w-full flex flex-row justify-around my-3">
        {#if playerAnswer !== null}
            <div>
                <p>Ta réponse:</p>
                <div>{playerAnswer.name_complex} | {playerAnswer.translated_name.name}</div>
            </div>
        {:else }
            <p>Temps écoulé.</p>
        {/if}
        <div>
            <p>La bonne réponse:</p>
            <div>{goodAnswer.name_complex} | {goodAnswer.translated_name.name}</div>
        </div>
    </div>

    <p class="my-3">Tu as gagné : {earnedPoints} point(s).</p>
</div>