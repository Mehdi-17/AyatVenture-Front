<script lang="ts">
    import type {Surah} from "./utils/Surah";

    export let playerAnswer: Surah;
    export let goodAnswer: Surah;
    export let answerIsGood: boolean;

    const backGroundAnswer = answerIsGood ? "bg-green-500" : "bg-red-600";
</script>

<div class="mt-10 w-1/2 flex flex-col items-center">
    <p class="{backGroundAnswer}">{answerIsGood ? "Bonne réponse.".toUpperCase() : "Mauvaise réponse.".toUpperCase()}</p>

    <div class="w-full flex flex-row justify-around">
        <div>
            <p>Ta réponse:</p>
            <div>{playerAnswer.translated_name.name}</div>
        </div>

        <div>
            <p>La bonne réponse:</p>
            <div>{goodAnswer.translated_name.name}</div>
        </div>
    </div>
</div>