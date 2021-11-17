<template>
   
<section class="src-componentes-formulario-av">
  <div class="jumbotron">
    <h2>Componente Formulario Avanzado</h2>
    <hr>
    <hr>
    <br>

    <vue-form :state="formState" @submit.prevent="enviar()">
 
      <!-- ------------ -->
      <!-- Campo codigo -->
      <!-- ------------ -->
      <validate tag="div">
        <label for="codigo">codigo</label>
         <input type="text" id="codAccess" v-model="formData.codAccess" required name="codAccess" autocomplete="off" class="form-control" sin-espacios :minlength="CodMinLength" :maxlength="CodMaxLength" placeholder="Ingrese aqui su Codigo de acceso"/>

                            <field-messages name="codAccess" show="$dirty">
                            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
                            <div slot="sin-espacios" class="alert alert-danger mt-1">No se permiten espacios intermedios en este campo.</div>
                            <div slot="minlength" class="alert alert-danger mt-1"> Este campo debe poseer al menos {{ CodMinLength }} caracteres </div>
                            <div v-if="formData.codigo.length == CodMaxLength" class="alert alert-danger mt-1"> Este campo debe poseer menos de {{ CodMaxLength }} caracteres </div>
                            </field-messages>
                        
      </validate>
      <br>

      <!-- -------------- -->
      <!-- Campo urlSala -->
      <!-- -------------- -->
      <validate tag="div">
        <label for="urlSala">url</label>
        <input 
          type="text"
          id="urlSala"
          v-model="formData.urlSala"
          name="urlSala" 
          class="form-control"
          autocomplete="off"
          required 
        />
        <!-- Mensajes de validación del campo urlSala -->
        <field-messages name="urlSala" show="$dirty">
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
      url : 'https://6192ef67d3ae6d0017da8331.mockapi.io/Room',
      datos : [],
    CodMinLength : 6,
        CodMaxLength : 6
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
        codigo : '',
        urlSala : '',

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