import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state : {
        contador : 1234,
        posts : []
    },
    actions : {
        async getPosts({ commit } , post) {            
            commit('setPosts', post)
        },        
    },
    mutations : {
        setPosts(state, posts) {
            console.log('mutations -> setPosts', state, posts, new Date().toLocaleString())
            state.posts = posts
        }        
    }
})
