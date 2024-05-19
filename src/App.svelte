<script lang="ts">
    import {Router, Route} from "svelte-routing";
    import Login from "./routes/Login.svelte";
    import Home from "./routes/Home.svelte";
    import Quiz from "./routes/Quiz.svelte";
    import {HOME_PAGE, QUIZ_PAGE, RESULTS_PAGE} from "./constants";
    import Nav from "./components/Nav.svelte";
    import Result from "./routes/Result.svelte";

    export let url = "";
</script>

<main class="h-full text-indigo-400">
    <Nav/>
    <Router {url}>
        <Route path={RESULTS_PAGE} component={Result} />
        <Route path={QUIZ_PAGE} component={Quiz}/>
        <Route path={HOME_PAGE} component={Home}/>
        <Route path="/" component={Login}/>
    </Router>
</main>