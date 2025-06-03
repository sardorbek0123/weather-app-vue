import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/index.css'
import { createPinia } from 'pinia'
import router from '@/router'

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
