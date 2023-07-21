<template>
  <div class="show_pages">
    <button @click="open = !open">Pages</button>

    <div class="page_list" :class="open ? 'page_list_active' : ''">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" :to="{ name: 'payment-application' }"
        >Ожидание оплаты</router-link
      >
      <router-link class="link" :to="{ name: 'payment-pending' }"
        >Ожидание оплаты</router-link
      >
      <router-link class="link" :to="{ name: 'payment-success' }"
        >Оплата прошла успешно!</router-link
      >
      <router-link class="link" :to="{ name: 'payment-faild' }"
        >Ваша заявка удалена</router-link
      >
      <router-link class="link" :to="{ name: 'faq' }">FAQ</router-link>
      <router-link class="link" :to="{ name: 'rules' }">Правила обмена</router-link>
      <router-link class="link" :to="{ name: 'contact' }">Контакты</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  },
};
</script>

<style>
</style>