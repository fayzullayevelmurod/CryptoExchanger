import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTheMask from 'vue-the-mask'
import Toaster from '@meforma/vue-toaster';
import './assets/scss/style.scss'
import './assets/scss/responsive.scss'

const app = createApp(App)

app.use(router).use(store).use(VueTheMask).use(Toaster);

app.mount('#app')
