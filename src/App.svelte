<script lang="ts">

</script>

<main class="h-full text-indigo-400">
    <div class="h-full flex flex-col justify-between" >
        <!--Nav-->
        <div class="w-full container mx-auto pt-4">
            <div class="w-full flex items-center justify-between">
                <a class="flex items-center text-indigo-500 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="/">
                    Ayat<span
                        class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Venture</span>
                </a>
            </div>
        </div>

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

                <form class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-blue-300 py-2 font-bold mb-2" for="emailaddress">
                            Connecte-toi ou crée un compte pour jouer
                        </label>
                        <input
                                class="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                                id="emailaddress"
                                type="text"
                                placeholder="tonmail@gmail.com"
                        />
                    </div>

                    <div class="flex items-center justify-between pt-4">
                        <button
                                class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                                type="button"
                        >
                            Jouer
                        </button>
                    </div>
                </form>
            </div>

            <!--Right Col-->
            <div class="w-full xl:w-2/5 p-12 overflow-hidden">
                <img alt="illustration" class="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
                     src="../src/assets/bismillah.png"/>
            </div>
        </div>

        <!--Footer-->
        <div class="w-full container text-sm text-center md:text-left fade-in mx-auto pb-4">
            <a class="text-gray-500 no-underline hover:no-underline" href="/">&copy; App 2024</a>
            - Building by
            <a class="text-gray-500 no-underline hover:no-underline" href="https://www.linkedin.com/in/mehdiserra/"
               target="_blank">Mehdi Serra</a>
        </div>
    </div>
</main>