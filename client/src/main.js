import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import ToastPlugin from './plugins/toast'

const app = createApp(App)
const pinia = createPinia()

// Making pinia available to our API interceptors
window.$pinia = pinia

app.use(router)
app.use(pinia)
app.use(ToastPlugin)
app.mount('#app')