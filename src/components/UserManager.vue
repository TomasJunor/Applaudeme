<template>
    <section class="src-componentes-UserManager">
        <div class="jumbotron">
          <div class= "row justify-content-center" v-if="!existe">
                <div class="col-7">
                    <vue-form :state="formstateU" @submit.prevent="send()"> 
                        <validate tag="div">
                            <h1>Ingrese su Codigo de acceso</h1>
                            <br>
                            <div class="row">
                              <div class="col-10 pt-2">
                                  <input :type="passShowOrHide" id="codAccess" v-model="formDataU.codAccess" required name="codAccess" autocomplete="off" class="form-control" sin-espacios placeholder="Ingrese aqui su Codigo de acceso"/>
                              </div>
                              <div class="col-2 p-0 m-0">
                                  <img @click="switchVisibility()" :src="require('../img/' + this.imagen)" alt="" width="40%" class="p-0 m-0">
                              </div>
                            </div>
                            <field-messages name="codAccess" show="$dirty">
                              <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
                              <div slot="sin-espacios" class="alert alert-danger mt-1">No se permiten espacios intermedios en este campo.</div>                          
                            </field-messages>
                        </validate>
                        <button class="btn btn-success my-3" :disabled="formstateU.$invalid" type="submit">Enviar</button>
                    </vue-form>
                    <h4 v-if="!existe && Checkeo" class="alert alert-info ">Codigo Erroneo</h4>
                </div>
            </div>

          <div v-else>
            <h1 class="mb-5">{{'User Manager' | pasarAMayuscula}}</h1>
            <div class="table-responsive">
              <table class="table table-dark">
                  <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Dni</th>
                      <th>Fecha de Nacimiento</th>
                      <th>Telefono</th>
                      <th>Email</th>
                      <th></th>
                    
                  </tr>
                  <tr v-for="(usuario,index) in usuarios" :key="index">
                      <td>{{ usuario.nombre }}</td>
                      <td>{{ usuario.apellido }}</td>
                      <td>{{ usuario.dni }}</td>
                      <td>{{ usuario.fechaDeNacimiento}}</td>
                      <td>{{ usuario.telefono}}</td>
                      <td>{{ usuario.email}}</td>
                      <td><button class="btn btn-danger ml-3" @click="deleteUsuario(usuario.id)">Borrar</button></td>
                  </tr>
              </table>
              <h4 v-show="fueEliminado" class="alert alert-info">el usuario fue eliminado Correctamente</h4>
            </div>
          </div>            
        </div>
  </section>
</template>

<script>
  export default  {
    name: 'src-componentes-UserManager',
    props: [],
    mounted () {
        this.pedirDatosAlServidor()
    },
    data () {
      return {
        formstateU : {},
        formDataU : this.getDataInicial(),
        urlUsuarios : 'https://6192ef67d3ae6d0017da8331.mockapi.io/Usuarios/',
        usuarios : [],
        fueEliminado:false,
        existe : false,
        Checkeo : false,
        passShowOrHide: "password",
        imagen:"ojoShow.png"
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
            let respuesta = await this.axios(this.urlUsuarios)

            let user = respuesta.data
            console.log('Datos GET', user)
            this.usuarios = user
        }
        catch(error) {
            console.error('Error en recepción de datos del servidor')
        }
        },
        
        async deleteUsuario(id) {
        console.log('deleteUsuario', id)

        try {
          let respuesta = await this.axios.delete(this.urlUsuarios+id)
          let usuarioEliminado = respuesta.data
          console.log('AXIOS DELETE USUARIO', usuarioEliminado)
          this.fueEliminado = true
           this.pedirDatosAlServidor()
        }
        catch(error) {
          console.error('ERROR AXIOS DELETE USUARIO', error)
        }
      },
       switchVisibility() {
          if(this.passShowOrHide === "password") {
            this.passShowOrHide="text";
            this.imagen="ojoHide.png";
          }else{
             this.passShowOrHide="password";
              this.imagen="ojoShow.png";
          }
        },
      
      send() {
        if (this.formDataU.codAccess == "SoyAdmin") {
          this.existe=true      
        }  
        this.Checkeo = true
        this.formDataU = this.getDataInicial() 
        //this.formStateI._reset()
      },
        
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
  .src-componentes-UserManager {
      text-align: center;
      }
    .jumbotron{
        background-color: #e7e0c9;
    }
    

    
</style>