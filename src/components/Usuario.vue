<template>
    <section class="src-componentes-Usuarios">
       <div class="jumbotron">
           
         <h1>Tu Cuenta</h1>
         <br>
            <table class="table" v-if="!fueEliminado">
                <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Dni</th>
                <th>Fecha de nacimiento:</th>
                <th>Telefono</th>
                <th>Email</th>
                </tr>
                <tr>
                <td>{{ datosUser.nombre }}</td>
                <td>{{ datosUser.apellido }}</td>
                <td>{{ datosUser.dni }}</td>
                <td>{{ datosUser.fechaDeNacimiento }}</td>
                <td><span v-if="!seModifico">{{ datosUser.telefono }} </span><span v-else>{{ this.formDataU.newtel }} </span> <button class="btn botonEdit" @click="deseaModificar=!deseaModificar"><img src="../img/edit.png" alt="" width="100%"></button></td>
                <td>{{ datosUser.email }}</td>                
                <td><button class="btn btn-danger mr-3" @click="deleteUsuario(datosUser.id)">DELETE</button></td>                
                </tr>
            </table>           
        
            <h4 v-else class="alert alert-info">Tus Datos Fueron Eliminados</h4>
            
            <div class= "row justify-content-center" v-show="deseaModificar">
                    <div class="col-7">
                        <vue-form :state="formstateU" @submit.prevent="modificarUsuario(datosUser.id)"> 
                            <validate tag="div">
                                <h1>Ingrese Un Nuevo Telefono</h1>
                                <br>
                                <input type="text" id="newtel" v-model="formDataU.newtel" required name="newtel" autocomplete="off" class="form-control"  :minlength="telminLength" :maxlength="telmaxLength" placeholder="Ingrese aqui su nuevo numero telefonico"/>

                                <field-messages name="newtel" show="$dirty">
                                <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
                                <div slot="minlength" class="alert alert-danger mt-1"> Este campo debe poseer al menos {{ telminLength }} caracteres </div>
                                <div v-if="formDataU.newtel.length == telmaxLength" class="alert alert-danger mt-1"> Este campo debe poseer como máximo {{ telmaxLength }} caracteres </div>
                                </field-messages>
                            </validate>
                            <button class="btn btn-success my-3" :disabled="formstateU.$invalid" type="submit">Enviar</button>
                        </vue-form>
                    </div>
                </div>       
       </div> 
  </section>
</template>

<script>
  export default  {
    name: 'src-componentes-Usuarios',
    props: ['datosUser'],
    mounted () {
      //this.getUsuarios()
    },
    data () {
      return {
        telminLength : 10,
        telmaxLength : 15,
        urlUsuarios : 'https://6192ef67d3ae6d0017da8331.mockapi.io/Usuarios/',
        formstateU : {},
        formDataU : this.getDataInicial(),
        datos : [],
        deseaModificar : false,
        seModifico : false,
        fueEliminado : false
      }
    },
    methods: {
        getDataInicial() {
            return {
                newtel:''
            }
        },

         async deleteUsuario(id) {
        console.log('deleteUsuario', id)

        try {
          let respuesta = await this.axios.delete(this.urlUsuarios+id)
          let usuarioEliminado = respuesta.data
          console.log('AXIOS DELETE USUARIO', usuarioEliminado)
          this.fueEliminado = true
        }
        catch(error) {
          console.error('ERROR AXIOS DELETE USUARIO', error)
        }
      },

       async modificarUsuario(id) {
         console.log('putUsuario', id)
        try {
          let respuesta = await this.axios.put(this.urlUsuarios+id,  {telefono : this.formDataU.newtel})
          let usuarioActualizado = respuesta.data
          console.log('AXIOS PUT USUARIO', usuarioActualizado)
          this.deseaModificar=false
          this.seModifico=true
        }
        catch(error) {
          console.error('ERROR AXIOS PUT USUARIO', error)
        }
       },
    },
    computed: {

    }
}
</script>

<style scoped lang="css">
  .src-componentes-Usuarios {
      text-align: center;
      }
    .jumbotron{
        background-color: #e7e0c9;
    }
    .botonEdit{
        width: 50px;
    }

    
</style>