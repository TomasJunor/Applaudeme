<template>
    <div id="app" class="container-fluid  px-0">
        <div class="container-fluid px-0">
            <!--
            <h1>Proyecto Final NT2 Applaudeme</h1>
            <br>-
            -->
            <Navbar />
            <router-view></router-view>

        </div>
        <footer class=" container-fluid row m-0">
            <div class="col-6 " >
                &copy; 2021 - Applaudeme - <a asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
            </div>
            <div class=" col-6 ">
                By Artaza, Eserequis Junor, Plumari
            </div>
        </footer>
    </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
export default {
name: 'App',
components: {
Navbar
}
}
</script>

<style>
#app {
  color: black;
}
h1{
color: black;
}
footer {
    background-color: #4b1977;
    color: #ca844e;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    line-height: 60px; 
}

</style>