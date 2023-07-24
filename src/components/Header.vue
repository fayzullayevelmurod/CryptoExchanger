<template>
  <header>
    <div class="main_container">
      <div class="header_wrapper">
        <router-link class="logo" to="/">
          <img src="@/assets/images/logo.svg" alt="logo">
        </router-link>

        <div class="header_menu">
          <img @click="toggleMenu()" src="@/assets/images/burger_menu_icon.svg">
          <a v-if="$route.name == 'home'" class="menu_link" href="#calculation">Обменник</a>
          <router-link v-else class="menu_link" to="/">Обменник</router-link>
          <router-link class="menu_link" :class="$route.name == 'rules' ? 'menu_link_active' : ''" :to="{name: 'rules'}">Правила обмена</router-link>
          <router-link class="menu_link" :class="$route.name == 'faq' ? 'menu_link_active' : ''" :to="{name: 'faq'}">FAQ</router-link>
          <router-link class="menu_link" :class="$route.name == 'contact' ? 'menu_link_active' : ''" :to="{name: 'contact'}">Контакты</router-link>
        </div>
      </div>
    </div>
    <div class="mobile_menu" :class="menu">
      <div class="link">
        <router-link class="menu_link" @click="toggleMenu()" to="/">Обменник</router-link>
          <router-link class="menu_link" @click="toggleMenu()" :class="$route.name == 'rules' ? 'menu_link_active' : ''" :to="{name: 'rules'}">Правила обмена</router-link>
          <router-link class="menu_link" @click="toggleMenu()" :class="$route.name == 'faq' ? 'menu_link_active' : ''" :to="{name: 'faq'}">FAQ</router-link>
          <router-link class="menu_link" @click="toggleMenu()" :class="$route.name == 'contact' ? 'menu_link_active' : ''" :to="{name: 'contact'}">Контакты</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      menu: ''
    }
  },
  methods: {
      toggleMenu () {
        if (this.menu == "mobile_menu_active") {
          document.querySelector('body').style.overflow = 'auto';
          this.menu = "";
        } else {
          document.querySelector('body').style.overflow = 'hidden';
          this.menu = "mobile_menu_active";
        }
      }
    }
}
</script>

<style>

</style>