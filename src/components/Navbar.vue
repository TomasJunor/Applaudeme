<template>

  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-md">
<!---
      <router-link to="/">
        <a class="navbar-brand" href="#">Inicio</a>
      </router-link>
-->
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/cartelera">
              <a class="nav-link" href="#">Cartelera</a>
            </router-link>
          </li>

          <img src="../img/plaudeme.png" alt="logo Applaudeme" width="300">
          
          <li class="nav-item">
            <router-link to="/registro">
              <a class="nav-link" href="#">Registro</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-navbar {
    background-color: #4b1977; 
  }

  .navbar .collapse{
    justify-content: center;
  }
  .nav-link{
    padding-top: 38px;
    font-size: 25px;
    color: #ca834e;
  }
 img{
   margin-left: 100px;  
    margin-right: 100px;
 }
  
</style>