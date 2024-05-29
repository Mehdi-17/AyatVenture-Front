<script lang="ts">
//TODO: afficher les icones et description des Jokers. Au click, on a un joker service qui envoie vers le back le joker sélectionné
const jokers = ['50/50', 'Verset adjacent', 'Afficher la description'];
</script>

<div class="flex">
    J'affiche les Jokers.
    {#each jokers as joker}
        <p class="mr-9">{joker}</p>
    {/each}
</div>