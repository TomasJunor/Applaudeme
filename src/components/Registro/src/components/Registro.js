
export default {
  name: 'src-components-Registro',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getDataInicial(),
      formstate : {},
      nomApeMinLength : 3,
      nomApeMaxLength : 15,
      telminLength : 10,
      telmaxLength : 15,
      dniMinLength : 8,
      dniMaxLength : 9,
      url: 'https://6192ef67d3ae6d0017da8331.mockapi.io/Usuarios',
      datos : []
    }
  },
  computed: {
    
  },
  mounted () {

  },
  methods: {
    getDataInicial() {
      return {
        nombre : '',
        apellido: '',
        dni : '',
        fechaNacimiento:'',
        telefono:'',
        email : ''
      }
    },
    async enviarDatosAlServidor(datos) {
      try {
        let respuesta = await this.axios.post(this.url, datos, {'content-type':'application/json'} )
        let datosRecibidos = respuesta.data
        console.log('Datos recibidos POST', datosRecibidos)

        this.datos.push(datosRecibidos)
      }
      catch(error) {
        console.error('Error en envio de datos del formulario')
      }
    },
  
    enviar() {
      let datos = {...this.formData}
      console.log(datos)
      this.enviarDatosAlServidor(datos)
      this.formData = this.getDataInicial() 
      this.formstate._reset()
    },
  }
}


