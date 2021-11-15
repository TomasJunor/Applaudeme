import Vue from 'vue'

const miMixinGlobal = {
    beforeMount() {
        //console.error('beforeMount -> miMixinGlobal')
    },
    mounted() {
        //console.error('mounted -> miMixinGlobal')
    },
    methods: {

       
    },
    computed: {
        //innecesario pero si no no sabiamos con que usar los mixins en este proyecto (esto podria estar interno en el componente Show.vue)
        mostrarShows() {
            let show = this.$store.state.posts
            return show
        }
    }
}

Vue.mixin(miMixinGlobal)