<template>
  <div class="payment_header">
    <div class="main_container">
      <div class="content">
        <div class="payment_item" :class="activeClass >= 1 ? 'payment_item_activ' : ''">1. Оплата</div>
        <div class="payment_item" :class="activeClass >= 2 ? 'payment_item_activ' : ''">2. Обработка</div>
        <div class="payment_item" :class="activeClass >= 3 ? 'payment_item_activ' : ''">3. Итоговый статус</div>
        <div class="line" :class="lineWidth"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentHeader",
  computed: {
    lineWidth () {
        if (this.$route.name === "payment-application") {
            return 'line_1';
        } else if (this.$route.name === "payment-pending") {
            return 'line_2';
        } else {
            return 'line_3';
        }
    },
    activeClass () {
      if (this.$route.name === "payment-application") {
            return 1;
        } else if (this.$route.name === "payment-pending") {
            return 2;
        } else {
            return 3;
        }
    }
  },
  // mounted () {
  //   console.log(this.$route.name);
  // }
};
</script>

<style>
</style>