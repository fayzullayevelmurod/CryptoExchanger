import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ApplicationPayment from '../views/ApplicationPayment.vue';
import Contact from '../views/Contact.vue';
import Faq from '../views/Faq.vue';
import Rules from '../views/Rules.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/application-payment',
      name: 'application-payment',
      component: ApplicationPayment
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules
    }
  ]
})

export default router
