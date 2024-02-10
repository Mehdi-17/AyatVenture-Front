<script lang="ts">
    import ButtonGradient from "../ButtonGradient.svelte";
    import {navigate} from "svelte-routing";
    import {HOME_PAGE} from "../../constants";

    export let signUp: boolean;
    let userEmail: string = "";
    let password: string = "";
    let confirmPassword: string = "";
    const inputStyles: string = "shadow appearance-none border rounded w-full p-3 mb-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-150 ease-in-out";

    const authenticate = () => {
        //TODO: here call backend to authenticate
        console.log(`Sign in with => username : ${userEmail} and pwd : ${password}`)
        if (signUp) {
            console.log(`Confirmation mot de passe => ${confirmPassword}`)
        }

        navigate(HOME_PAGE);
    }
</script>

<div class="mb-2">
    <input
            class={inputStyles}
            id="emailAddress"
            type="text"
            placeholder="johndoe@gmail.com"
            bind:value={userEmail}
    />
    <input
            class={inputStyles}
            id="password"
            type="password"
            placeholder={signUp ? "Mot de passe" : "******"}
            bind:value={password}
    />

    {#if signUp}
        <input
                class={inputStyles}
                id="confirmPassword"
                type="password"
                placeholder="Confirmation mot de passe"
                bind:value={confirmPassword}
        />
    {/if}
</div>

<ButtonGradient text="Connexion" on:click={authenticate}
                disabled={userEmail.trim().length === 0 || password.trim().length === 0}/>
