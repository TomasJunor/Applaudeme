

export default {
  name: 'src-components-cartelera',
  components: {},
  props: [],
  data () {
    return {
      url : 'https://6192ef67d3ae6d0017da8331.mockapi.io/Obras',
      datos : [],
    }
  },
  computed: {

  },

  mounted(){
    console.log(this.datos)
    this.pedirDatosAlServidor()
    
  },
  methods: {
    async pedirDatosAlServidor() {
      try {
        let respuesta =  await this.axios(this.url)
        let datos = respuesta.data
        console.log(respuesta)
        //console.log('Datos GET', datos)
        this.datos = datos
       // console.log(this.datos)
      }
      catch(error) {
        console.error('Error en recepción de datos del servidor')
      }
    },

    navigateToShow(index){
      this.$store.dispatch('getPosts', this.datos[index])
      return this.datos[index]

    }

  }
}


