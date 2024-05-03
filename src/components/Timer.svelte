<script lang="ts">

    import {onDestroy, onMount} from "svelte";

    export let timeLeft: number;
    export let stopTimer: boolean;
    let timerInterval: number;

    const startTimer = () => {
        timerInterval = setInterval(() => {
            if (stopTimer === true){
                clearInterval(timerInterval);
            }
            timeLeft--;
            if (timeLeft === 0) {
                clearInterval(timerInterval);
            }
        }, 1000)
    }

    onMount(() => {
        startTimer();
    });

    onDestroy(() => {
        clearInterval(timerInterval);
    });

</script>


<div class="mb-10">
    <p>Il reste {timeLeft}</p>
</div>