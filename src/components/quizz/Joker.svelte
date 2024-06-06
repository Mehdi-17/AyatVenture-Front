<script lang="ts">
//TODO: afficher les icones et description des Jokers. Au click, on a un joker service qui envoie vers le back le joker sélectionné
const jokers = [
    {text: '50/50', src: './src/assets/Jokers/fiftyfifty.png'},
    {text: 'Verset adjacent', src: 'src/assets/Jokers/adjacentverse.png'},
    {text: 'Afficher la description', src: 'src/assets/Jokers/description.png'}
];
</script>

<div class="w-1/3 flex justify-around">
    {#each jokers as joker}
        <button>
            <img src="{joker.src}" alt="{`icon_${joker.text}`}" class="border border-primary rounded p-1">
        </button>
    {/each}
</div>