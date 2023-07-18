
<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    RouterLink,
    RouterView,
    Footer,
  },
};
</script>

<style scoped>
</style>