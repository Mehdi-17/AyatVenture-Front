<script lang="ts">
    import {createEventDispatcher, onDestroy, onMount} from "svelte";

    export let timeLeft: number;
    export let stopTimer: boolean;
    let timerInterval: number;
    let radius = 50;
    let circumference = 2 * Math.PI * radius;
    let dashOffset = 0;
    let strokeWidth= 5;

    let dispatch = createEventDispatcher();

    onMount(() => {
        startTimer();
    });

    onDestroy(() => {
        clearInterval(timerInterval);
    });

    const startTimer = () => {
        timerInterval = setInterval(() => {
            if (stopTimer === true) {
                clearInterval(timerInterval);
            }
            timeLeft--;
            dashOffset = (1 - (timeLeft / 60)) * circumference;
            if (timeLeft === 0) {
                clearInterval(timerInterval);
                dispatch('timesUpEvent');
            }
        }, 1000);
    };
</script>

<div class="mb-10">
    <svg width="200" height="200" viewBox="-10 -10 120 120">
        <circle cx="50" cy="50" r={radius} stroke="#000000" stroke-width="{strokeWidth}" fill="none" />
        <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="#93c5fd"
                stroke-width="{strokeWidth}"
                fill="none"
                style="stroke-dasharray: {circumference}; stroke-dashoffset: {dashOffset}; transition: stroke-dashoffset 1s;"
        />
        <text x="50" y="50" dominant-baseline="middle" text-anchor="middle">
            {timeLeft}
        </text>
    </svg>
</div>
