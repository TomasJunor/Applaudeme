<template>
    <section class="src-componentes-Show">
       <div class="jumbotron">

            <div class="row justify-content-end"  >
                <div class="col-2 pr-0"><img src="../img/Aplausos.jpeg" alt="" width="60"></div>
                <div class="col-1 pr-0 pt-1" style="margin-left: -50px;"><h1>{{mostrarContAplausos}}</h1></div>
                <div class="col-1 pt-2" style="margin-left: -20px; margin-bottom: 50px;"><button class="btn m-0" @click="incrementar()" style="background-color: #4b1977; color: white; ">+</button></div>
            </div>

         <div class="row">
           <div class="col-6">
             <img v-bind:src="require('../img/' + img)" alt="" height="800">
            </div>
            <div class="col-6">  
                <div class="titulo">
                    <h1>{{mostrarShows.titulo}}</h1>
                </div>
                <div class="descripcion">
                    <p>{{mostrarShows.descripcion}}</p>
                </div>
                <div class="row">
                    <div class="col-6 genero ">
                        <h4>Genero: {{mostrarShows.genero}}</h4>
                    </div>
                    <div class="col-6 duracion">
                        <h4>Duracion: {{mostrarShows.duracion}} Hs</h4>
                    </div>
                </div>
                <div class="fecha">
                    <h1>Fecha de Estreno</h1>
                    <h1>{{mostrarShows.estreno}}</h1>
                </div>
                <div class="row">
                    <div class="col-6 genero ">
                       <router-link to="/checkOut"> <button class="btn btn-success my-3"  type="submit">Compra Tu entrada!</button></router-link>
                    </div>
                    <div class="col-6 duracion">
                      <router-link to="/room" >  <button :class="['btn' , 'text-white', {'bg-success':estado, 'bg-danger':!estado }, 'my-3' ]" type="submit"  :disabled="!seEstreno(mostrarShows.estreno)">Ingreso al Show</button></router-link>
                    </div>
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
        this.traerimg()
    },
    data () {
      return {
        img : "",
        estado : ""
      }
    },
    methods: {
      traerimg(){
         this.img = this.$store.state.posts.img
          console.log(this.img)
      },
    
        seEstreno(fecha){
            console.log(new Date(fecha).getDate())
            console.log(new Date().getDate())
            this.estado = (new Date(fecha).getDate() <= new Date().getDate() && new Date(fecha).getMonth() <= new Date().getMonth())
            return this.estado
        },
        getClass() {
            return {
                'btn' : true,
                'text-white': true, 
                'btn-success': this.estado, 
                'btn-danger': !this.estado, 
                'my-3': true
            }
        }
        
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