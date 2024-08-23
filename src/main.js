import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// import miniRouter from './mini-router'

createApp(App).use(router).mount('#app')
