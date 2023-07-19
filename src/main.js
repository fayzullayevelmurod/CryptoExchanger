import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'
import './assets/scss/style.scss'
import './assets/scss/responsive.scss'

const app = createApp(App)

app.use(router).use(VueTheMask);

app.mount('#app')
