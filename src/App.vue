
<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
    <show-pages />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ShowPages from "@/components/ShowPages.vue";

export default {
  components: {
    Header,
    RouterLink,
    RouterView,
    Footer,
    ShowPages
  },
};
</script>

<style scoped>
</style>