<script lang="ts">
    export let disabled: boolean;
    export let text: string;
</script>

<div class="pt-3">

    <button
            class="bg-gradient-to-r from-purple-800 to-green-500 text-white font-bold py-2 px-4 rounded disabled:opacity-65 focus:ring transform transition enabled:hover:scale-105 duration-300 ease-in-out"
            type="button"
            {disabled}
    >
        {text}
    </button>
</div>