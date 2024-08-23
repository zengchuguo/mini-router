import { createRouter, createWebHistory } from 'vue-router'
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