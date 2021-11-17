<template>
    <section class="src-componentes-IngresoRoom">
       <div class="jumbotron">
         <div class= "row justify-content-center">
                <div class="col-7">
                    <vue-form :state="formstateI" @submit.prevent="send()"> 
                        <validate tag="div">
                            <h1>Ingrese su Codigo de acceso</h1>
                            <br>
                            <input type="text" id="codAccess" v-model="formDataI.codAccess" required name="codAccess" autocomplete="off" class="form-control" sin-espacios :minlength="CodMinLength" :maxlength="CodMaxLength" placeholder="Ingrese aqui su Codigo de acceso"/>

                            <field-messages name="codAccess" show="$dirty">
                            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
                            <div slot="sin-espacios" class="alert alert-danger mt-1">No se permiten espacios intermedios en este campo.</div>
                            <div slot="minlength" class="alert alert-danger mt-1"> Este campo debe poseer al menos {{ CodMinLength }} caracteres </div>
                            <div v-if="formDataI.codAccess.length == CodMaxLength" class="alert alert-danger mt-1"> Este campo debe poseer menos de {{ CodMaxLength }} caracteres </div>
                            
                            </field-messages>
                        </validate>
                        <button class="btn btn-success my-3" :disabled="formstateI.$invalid" type="submit">Enviar</button>
                    </vue-form>
                    <h4 v-if="!existe && Checkeo" class="alert alert-info ">Codigo Erroneo</h4>
                </div>
            </div>



    </div>
  </section>
</template>

<script>
  export default  {
    name: 'src-componentes-IngresoRoom',
    props: [],
    mounted () {
      this.pedirDatosAlServidor()
    },
    data () {
      return {
        formstateI : {},
        formDataI : this.getDataInicial(),
        url: 'https://6192ef67d3ae6d0017da8331.mockapi.io/Room',
        datos : [],
        CodMinLength : 6,
        CodMaxLength : 7,
        existe : false,
        Checkeo : false
      }
    },
    methods: {
        getDataInicial() {
            return {
                codAccess:''
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
        send() {
           console.log(this.datos)

            for (let i = 0; i < this.datos.length; i++) {
                const user = this.datos[i];
                console.log(user.codAccess , ' sfdasd')
                if (user.codAccess ==  this.formDataI.codAccess) {
                    this.existe=true 
                    this.$emit('exist', this.existe)
                    this.$emit('url', user.urlSala)
                    console.log(user.urlSala)
                }  
            }

            this.Checkeo = true
           
            this.formDataI = this.getDataInicial() 
            //this.formStateI._reset()
        },


    },
    computed: {
    }
}
</script>

<style scoped lang="css">
  .src-componentes-IngresoRoom {
      text-align: center;
      }
    .jumbotron{
        background-color: #e7e0c9;
    }
  

    
</style>