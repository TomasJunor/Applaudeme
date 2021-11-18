import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state : {
        contador : 0,
        posts : [],
    },
    actions : {
        async getPosts({ commit } , post) {            
            commit('setPosts', post)
        },
        async sumar({ commit }, cant) {
            commit('incrementar', cant)
         }        
    },
    mutations : {
        setPosts(state, posts) {
            state.posts = posts
        },
        incrementar(state, cant) {
            state.contador += cant
        }
    }
})
