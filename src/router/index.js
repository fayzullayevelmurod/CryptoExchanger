import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/Contact.vue';
import Faq from '../views/Faq.vue';
import Rules from '../views/Rules.vue';
import Payment from '../components/Payment.vue';
import ApplicationPayment from '../views/payment/ApplicationPayment.vue';
import PendingPayment from '../views/payment/PendingPayment.vue';
import SuccessPayment from '../views/payment/SuccessPayment.vue';
import Faild from '../views/payment/Faild.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/payment/application',
      name: 'payment-application',
      component: ApplicationPayment
    },
    {
      path: '/payment',
      component: Payment,
      children: [
        {path: '', name: 'payment-pending', component: PendingPayment},
        {path: 'success', name: 'payment-success', component: SuccessPayment},
        {path: 'faild', name: 'payment-faild', component: Faild},
      ]
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
