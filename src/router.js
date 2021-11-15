import Vue from 'vue'
import VueRouter from 'vue-router'

import Cartelera from './components/Cartelera/index.vue'
import Registro from './components/Registro/index.vue'
import Show from './components/Show.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/cartelera' },
        { path: '/cartelera', component: Cartelera },
        { path: '/registro', component: Registro },
        { path: '/show', component: Show }
    ]
})