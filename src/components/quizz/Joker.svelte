<script lang="ts">
//TODO: afficher les icones et description des Jokers. Au click, on a un joker service qui envoie vers le back le joker sélectionné
import Tooltip from "../Tooltip.svelte";

const jokers = [
    {text: 'Supprimer 50% des réponses possibles', src: './src/assets/Jokers/fiftyfifty.png'},
    {text: 'Afficher les versets adjacents', src: 'src/assets/Jokers/adjacentverse.png'},
    {text: 'Afficher la description de la sourate', src: 'src/assets/Jokers/description.png'}
];
</script>

<div class="w-1/3 flex justify-around">
    <!--    Todo / disabled / enabled joker button and develop mechanics-->
    {#each jokers as joker}
        <Tooltip text="{joker.text}">
            <img src="{joker.src}" alt="{`icon_${joker.text}`}"
                 class="border border-primary rounded p-1">
        </Tooltip>
    {/each}
</div>