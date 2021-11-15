<template>
    <section class="src-componentes-Room">
       <div class="jumbotron">
          <div class="row justify-content-end"  >
            <div class="col-2 pr-0"><img src="../img/Aplausos.jpeg" alt="" width="60"></div>
            <div class="col-1 pr-0 pt-1" style="margin-left: -120px;"><h1>{{mostrarContAplausos}}</h1></div>
            <div class="col-1 pt-2" style="margin-left: -50px;"><button class="btn m-0" @click="incrementar()" style="background-color: #4b1977; color: white; ">+</button></div>
          </div>
         <h1>Room</h1>

    </div>
  </section>
</template>

<script>
  export default  {
    name: 'src-componentes-Room',
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
  .src-componentes-Room {
      text-align: center;
      }
    .jumbotron{
        background-color: #e7e0c9;
    }
  

    
</style>