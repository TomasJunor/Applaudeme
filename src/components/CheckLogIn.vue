<template>
    <section class="src-componentes-CheckLogIn">
       <div class="jumbotron text-center">
        <vue-form :state="formstate" @submit.prevent="enviar()">
            
            <validate tag="div">
                 <h1>Ingrese su DNI</h1>
                <input type="text" id="dni" v-model.trim="formData.dni" required name="dni" autocomplete="off" class="form-control" sin-espacios placeholder="Ingrese aqui su DNI"/>

                <field-messages name="nombre" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
                <div slot="sin-espacios" class="alert alert-danger mt-1">No se permiten espacios intermedios en este campo.</div>
                </field-messages>
            </validate>
            <button class="btn btn-success my-3" :disabled="formstate.$invalid" type="submit">Enviar</button>
        </vue-form>
    </div>
  </section>
</template>

<script>
  export default  {
    name: 'src-componentes-CheckLogIn',
    props: [],
    mounted () {
      
    },
    data () {
      return {
        formstate : {},
        formData : this.getDataInicial(),
        url: 'https://6189765ed0821900178d79d0.mockapi.io/Usuarios'
      }
    },
    methods: {
        getDataInicial() {
            return {
                dni:''
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
            let datos = {...this.formData}
            console.log(datos)
            this.enviarDatosAlServidor(datos)
            this.formData = this.getInicialData() 
            this.formState._reset()
        },

    },
    computed: {
    }
}
</script>

<style scoped lang="css">
  .src-componentes-CheckLogIn {
      text-align: center;
      }
    .jumbotron{
        background-color: #e7e0c9;
    }
  

    
</style>