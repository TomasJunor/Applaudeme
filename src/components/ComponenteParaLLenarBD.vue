<template>
   
<section class="src-componentes-formulario-av">
  <div class="jumbotron">
    <h2>Componente Formulario Avanzado</h2>
    <hr>
    <hr>
    <br>

    <vue-form :state="formState" @submit.prevent="enviar()">
 
      <validate tag="div">
        <label for="titulo">titulo</label>
        <input 
          type="text"
          id="titulo"
          v-model.trim="formData.titulo"
          name="titulo" 
          class="form-control"
          autocomplete="on"
          required 
          no-espacios
        />
        <field-messages name="titulo" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
          <div slot="no-espacios" class="alert alert-danger mt-1">
            No se permiten espacios intermedios en este campo.
          </div>
       
        </field-messages>
      </validate>
      <br>

    
      <validate tag="div">
        <label for="descripcion">desc</label>
        <input 
          type="text"
          id="descripcion"
          v-model="formData.descripcion"
          name="descripcion" 
          class="form-control"
          autocomplete="on"
          required 
        />
        <field-messages name="descripcion" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
        </field-messages>
      </validate>
      <br>
      
     
      <validate tag="div">
        <label for="duracion">duracion</label>
        <input 
          type="number"
          id="duracion"
          v-model.number="formData.duracion"
          name="duracion" 
          class="form-control"
          autocomplete="on"
          required 
        
        />
        <field-messages name="duracion" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
         
        </field-messages>
      </validate>
      <br>
      

      <validate tag="div">
        <label for="estreno">estreno</label>
        <input 
          type="date"
          id="estreno"
          v-model="formData.estreno"
          name="estreno" 
          class="form-control"
          autocomplete="on"
          required 
        
        />
        <field-messages name="estreno" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
         
        </field-messages>
      </validate>
      <br>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloremque pariatur numquam iure neque aspernatur laboriosam suscipit voluptatem? Odit, similique impedit corporis quos enim ullam! Ducimus fugit voluptatem sed eius.</p>
      <validate tag="div">
        <label for="genero">Genero</label>
        <input 
          type="text"
          id="genero"
          v-model="formData.genero"
          name="genero" 
          class="form-control"
          autocomplete="on"
          required 
        />
        <field-messages name="genero" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
        </field-messages>
      </validate>
      <br>
      <validate tag="div">
        <label for="img">img</label>
        <input 
          type="text"
          id="img"
          v-model="formData.img"
          name="img" 
          class="form-control"
          autocomplete="on"
          required 
        />
        <field-messages name="img" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
        </field-messages>
      </validate>
      <br>
      <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Enviar</button>
    </vue-form>

    <hr>
    <p><u>Datos en servidor</u></p>
    <pre>{{ datos }}</pre>

    <hr>
    <p><u>formData</u></p>
    <pre>{{ formData }}</pre>

    <hr>
    <p><u>formState</u></p>
    <pre>{{ formState }}</pre>

  </div>
</section>


</template>

<script>
  
export default {
  name: 'src-componentes-formulario-av',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      url : 'https://6192ef67d3ae6d0017da8331.mockapi.io/Obras',
      datos : []
    }
  },
  computed: {

  },
  mounted () {
    this.pedirDatosAlServidor()
  },
  methods: {
    getInicialData() {
      return {
        titulo : '',
        descripcion : '',
        duracion :'',
        estreno : '',
        genero: '',
        img : ''
      }
    },

    async enviarDatosAlServidor(datos) {
      try {
        let respuesta = await this.axios.post(this.url, datos, {'content-type':'application/json'} )
        let datosRecibidos = respuesta.data
        console.log('Datos recibidos POST', datosRecibidos)

        //this.pedirDatosAlServidor()
        this.datos.push(datosRecibidos)
      }
      catch(error) {
        console.error('Error en envio de datos del formulario')
      }
    },

    async pedirDatosAlServidor() {
      try {
        let respuesta = await this.axios(this.url)

        let datos = respuesta.data
        console.log('Datos GET', datos)
        this.datos = datos
      }
      catch(error) {
        console.error('Error en recepción de datos del servidor')
      }
    },

    enviar() {
      //console.log('Enviar')

      //Con SPREAD OPERATOR -> Clon de un Objeto -> {a:1,b:2} -> ...{a:1,b:2} -> a:1,b:2 -> { a:1,b:2 } (Clon)
      let datos = {...this.formData}
      console.log(datos)
      this.enviarDatosAlServidor(datos)

      this.formData = this.getInicialData()   //inicializando los valores
      this.formState._reset()                 // inicializando el estado
    }
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