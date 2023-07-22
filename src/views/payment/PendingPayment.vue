<template>
  <img src="@/assets/images/Loader.svg" alt="" class="loader" />
  <h2>Ожидание оплаты заявки</h2>
  <div class="copy_title">Сумма к оплате:</div>
  <div class="copy_value">
    <span>{{ $store.state.sender.amount }} {{ $store.state.sender.unit }}</span>
    <Copy copyText="400" />
  </div>
  <div class="plast_card_title">Номер карты к оплате:</div>
  <div class="plast_card_value">
    <span>7124 9124 1814 9421</span>
    <Copy copyText="7124912418149421" />
  </div>
  <div class="description">
    После отправки средства не всегда поступают мгновенно. Зачисление средств на
    наш счёт может занять некоторое время.
  </div>
</template>

<script>
import PaymentHeader from "../../components/PaymentHeader.vue";
import Copy from "../../components/Copy.vue";
export default {
  components: { PaymentHeader, Copy },
};
</script>