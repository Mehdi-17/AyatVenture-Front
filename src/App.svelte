<script lang="ts">
    import {Router, Route} from "svelte-routing";
    import Login from "./routes/Login.svelte";
    import Home from "./routes/Home.svelte";

    export let url = "";
</script>

<main class="h-full text-indigo-400">
    <Router {url}>
        <Route path="/home" component="{Home}"/>
        <Route path="/" component={Login}/>
    </Router>
</main>