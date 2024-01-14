<script lang="ts">
import Footer from "../components/Footer.svelte";
import Nav from "../components/Nav.svelte";
import SignInForm from "../components/forms/SignInForm.svelte";
</script>

<div class="h-full flex flex-col justify-between">
    <Nav/>

    <!--Main-->
    <div class="container mx-auto flex flex-col md:flex-row items-center">
        <!--Left Col-->
        <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 class="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                Bienvenue dans
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              AyatVenture:
            </span>
                Localise le verset !
            </h1>
            <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                L'odyssée qui t'invite à naviguer à travers les trésors du Noble
                Coran.
            </p>

            <form class="bg-secondary opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                <div class="">
                    <label class="block text-primary py-2 font-bold mb-2" for="emailaddress">
                        Connecte-toi ou crée un compte pour jouer
                    </label>
<!--TODO : Here display different form depending on if we want to sign up or sign in-->
                    <SignInForm />

                </div>
            </form>
        </div>

        <!--Right Col-->
        <div class="w-full xl:w-2/5 p-12 overflow-hidden">
            <img alt="illustration"
                 class="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
                 src="../src/assets/bismillah.png"/>
        </div>
    </div>

    <Footer/>
</div>