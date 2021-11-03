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

</style>