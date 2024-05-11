<script lang="ts">
    import Footer from "../components/Footer.svelte";
    import HeroBanner from "../components/HeroBanner.svelte";
    import AuthenticationForm from "../components/AuthenticationForm.svelte";
</script>

<div class="h-full flex flex-col justify-between">
    <!--Main-->
    <div class="container mx-auto flex flex-col md:flex-row items-center">
        <!--Left Col-->
        <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <HeroBanner/>
            <AuthenticationForm/>
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