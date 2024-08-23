// import { createRouter, createWebHistory } from 'vue-router' //  原生的router
import { createRouter, createWebHistory } from '../mini-router' //  mini-router

import Home from '@/components/home.vue'
import About from '@/components/about.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: Home },
        { path: '/about', component: About },
    ]
})

export default router