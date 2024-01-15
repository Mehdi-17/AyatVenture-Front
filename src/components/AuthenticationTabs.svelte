<script lang="ts">
    import classNames from "classnames";
    import SignUpForm from "./forms/SignUpForm.svelte";
    import SignInForm from "./forms/AuthenticationForm.svelte";
    import AuthenticationForm from "./forms/AuthenticationForm.svelte";

    let inActivatedButtonStyle: string = "rounded-t-lg border-b-2 border-transparent text-gray-400 pb-2 hover:text-gray-200 hover:border-gray-200";
    let activatedButtonStyle: string = "text-primary rounded-t-lg border-b-2 border-primary pb-2 hover:text-gray-200 hover:border-gray-200";
    let activeTab: number = 1;

    const setToActive = (clickedTab: number) => {
        activeTab = clickedTab;
    }

</script>
<div class="w-full flex justify-around py-2 mb-2">
    <button type="button" role="tab" class={classNames(activeTab === 1 ? activatedButtonStyle : inActivatedButtonStyle)}
            on:click={() => setToActive(1)}>Inscription
    </button>

    <button type="button" role="tab" class={classNames(activeTab === 2 ? activatedButtonStyle : inActivatedButtonStyle)}
            on:click={() => setToActive(2)}>Connexion
    </button>
</div>

<AuthenticationForm signUp={activeTab === 1} />