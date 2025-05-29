import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ToastPlugin from './plugins/toast'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(ToastPlugin)
app.mount('#app')