<template>
  <header>
    <div class="main_container">
      <div class="header_wrapper">
        <router-link class="logo" to="/">
          <img src="@/assets/images/logo.svg" alt="logo">
        </router-link>

        <div class="header_menu">
          <router-link class="menu_link" to="/">Обменник</router-link>
          <router-link class="menu_link" :class="$route.name == 'rules' ? 'menu_link_active' : ''" to="/rules">Правила обмена</router-link>
          <router-link class="menu_link" :class="$route.name == 'faq' ? 'menu_link_active' : ''" to="/faq">FAQ</router-link>
          <router-link class="menu_link" :class="$route.name == 'contact' ? 'menu_link_active' : ''" to="/contact">Контакты</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>