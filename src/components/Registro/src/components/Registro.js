
export default {
  name: 'src-components-registro',
  components: {},
  props: [],
  data () {
    return {
      formstate : {},
      formData : this.getDataInicial(),
      nomApeMinLength : 3,
      nomApeMaxLength : 15,
      telminLength : 10,
      telmaxLength : 15,
      url: 'http://localhost:3000/'
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
      this.formData = this.getInicialData() 
      this.formState._reset()
    },
  }
}


