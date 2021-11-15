<template>
    <section class="src-componentes-Show">
       <div class="jumbotron">
         <div class="row">
           <div class="col-6">
             <img src="../img/hamlet.jpg" alt="" height="800">
            </div>
            <div class="col-6">  
                <div class="titulo">
                    <h1>{{mostrarShows.nombre}}</h1>
                </div>
                <div class="descripcion">
                    <p>{{mostrarShows.email}} Quisquam doloremque, deserunt culpa,officia ut error vero aperiam, commodi ex velit atque magnam repudiandae dolor deleniti?</p>
                </div>
                <div class="row">
                    <div class="col-6 genero ">
                        <h4>Genero: {{mostrarShows.edad}}</h4>
                    </div>
                    <div class="col-6 duracion">
                        <h4>Duracion: {{mostrarShows.edad}}</h4>
                    </div>
                </div>
                <div class="fecha">
                    <h1>Fecha de Estreno</h1>
                    <h1>{{mostrarShows.edad}}</h1>
                </div> 
            </div>
         </div>

    </div>
  </section>
</template>

<script>
  export default  {
    name: 'src-componentes-Show',
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
  .src-componentes-Show {
      text-align: center;
      }
    .jumbotron{
        padding-left: 300px ;
        padding-right: 300px ;
        padding-top: 30px;
        background-color: #e7e0c9;
    }
    .titulo{
        padding-top: 100px;
        padding-bottom: 50px;
        font-size: 40px;
    }
    .descripcion{
        padding-bottom: 50px;
        font-size: 20px;
    }
    .genero{
        text-align: end;
        padding-bottom: 60px;

    }
    .duracion{
        text-align: start;
    }
    .fecha h1{
        font-size: 35px;
    }

    
</style>