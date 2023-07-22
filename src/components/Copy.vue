<template>
  <img @click="copy()" src="@/assets/images/copy.svg" alt="" />
</template>

<script>
export default {
  props: ["copyText"],
  methods: {
    copy() {
      this.$toast.success("Copy successfully", { position: "top-right" });
      window.navigator.clipboard.writeText(this.copyText);
    },
  },
};
</script>

<style>
</style>