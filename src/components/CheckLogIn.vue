 <template>
    <section class="src-componentes-CheckLogIn">
       <div class="jumbotron">

             <div class="row justify-content-end"  >
                 <div class="col-2 pr-0"><img src="../img/Aplausos.jpeg" alt="" width="60"></div>
                 <div class="col-1 pr-0 pt-1" style="margin-left: -60px;"><h1>{{mostrarContAplausos}}</h1></div>
                 <div class="col-1 pt-2" style="margin-left: -30px;"><button class="btn m-0" @click="incrementar()" style="background-color: #4b1977; color: white; ">+</button></div>
             </div>
            <div class= "row justify-content-center" v-if="!ocultarCheckDni">
                <div class="col-7">
                    <vue-form :state="formstateC" @submit.prevent="send()"> 
                        <validate tag="div">
                            <h1>Ingrese su DNI</h1>
                            <br>
                            <input type="text" id="dniCheck" v-model="formDataC.dniCheck" required name="dniCheck" autocomplete="off" class="form-control" sin-espacios :minlength="dniMinLength" :maxlength="dniMaxLength" placeholder="Ingrese aqui su dniCheck"/>

                            <field-messages name="dniCheck" show="$dirty">
                            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
                            <div slot="sin-espacios" class="alert alert-danger mt-1">No se permiten espacios intermedios en este campo.</div>
                            <div slot="minlength" class="alert alert-danger mt-1"> Este campo debe poseer al menos {{ dniMinLength }} caracteres </div>
                            <div v-if="formDataC.dniCheck.length == dniMaxLength" class="alert alert-danger mt-1"> Este campo debe poseer como máximo {{ dniMaxLength }} caracteres </div>
                            </field-messages>
                        </validate>
                        <button class="btn btn-success my-3" :disabled="formstateC.$invalid" type="submit">Enviar</button>
                    </vue-form>
                </div>
            </div>


            <Registro v-show="!exist && ocultarCheckDni" class="registro"/>


            <Usuarios v-show="exist && ocultarCheckDni"  :datosUser="userExistente"/>

    </div>
  </section>
</template>

<script>
 import Registro from './Registro/index.vue'
 import Usuarios from './Usuario.vue'


  export default  {
    name: 'src-componentes-CheckLogIn',
    components: {Registro,Usuarios},
    props: [],
    mounted () {
      this.pedirDatosAlServidor()
    },
    data () {
      return {
        formstateC : {},
        formDataC : this.getDataInicial(),
        url: 'https://6192ef67d3ae6d0017da8331.mockapi.io/Usuarios',
        datos : [],
        dniMinLength : 8,
        dniMaxLength : 9,
        exist : false,
        ocultarCheckDni : false,
        userExistente : []
      }
    },
    methods: {
        getDataInicial() {
            return {
                dniCheck:''
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
           console.log(this.formDataC.dniCheck)

            for (let i = 0; i < this.datos.length; i++) {
                const user = this.datos[i];
                console.log(user.dni)
                if (user.dni ==  this.formDataC.dniCheck) {
                    this.exist=true 
                    this.userExistente=this.datos[i]
                }     
            }
           
            //this.$emit('exist', this.exist)
            this.ocultarCheckDni=true
            this.formDataC = this.getDataInicial() 
            //this.formStateC._reset()
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
  
    .registro{
        text-align: initial;
    }
    
</style>