import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'
import './assets/scss/responsive.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
