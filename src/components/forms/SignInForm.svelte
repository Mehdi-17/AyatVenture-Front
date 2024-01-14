<script lang="ts">
    import ButtonGradient from "../ButtonGradient.svelte";

    let userEmail: string = "";
    let password: string = "";

    const signIn = () => {
        //TODO: here call backend to sign in
        console.log(`Sign in with => username : ${userEmail} and pwd : ${password}`)
    }
</script>

<div class="mb-6">
    <input
            class="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-150 ease-in-out"
            id="emailaddress"
            type="text"
            placeholder="tonmail@gmail.com"
            bind:value={userEmail}
    />
    <input
            class="shadow appearance-none border rounded w-full p-3 mt-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-150 ease-in-out"
            id="password"
            type="password"
            placeholder="******"
            bind:value={password}
    />
</div>

<ButtonGradient text="Connexion" on:click={signIn}
                disabled={userEmail.trim().length === 0 || password.trim().length === 0}/>
