import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './src/router'
//import { plugin, defaultConfig } from '@formkit/vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
//app.use(plugin, defaultConfig)

app.mount('#app')
