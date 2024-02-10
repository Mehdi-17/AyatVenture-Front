<script lang="ts">
    import {LOCAL_STORAGE_GAME} from "../constants";
    import type {Game} from "../components/utils/Game";

    const gameSerialized = localStorage.getItem(LOCAL_STORAGE_GAME);
    let game: Game;

    if (gameSerialized){
        game =  JSON.parse(gameSerialized);
        console.log(game);
    }
</script>


<p>IN BUILDING...</p>
