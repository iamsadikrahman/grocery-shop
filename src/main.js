import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia' // Import
import router from './router/index.js'



createApp(App)
.use(createPinia())
.use(router)
.mount('#app')
