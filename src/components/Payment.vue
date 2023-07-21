<template>
  <payment-header />
  <div class="pending_payment">
    <img src="@/assets/images/pedding_ayment_bg.png" alt="" class="payment_bg">
    <div class="main_container">
      <div class="content">
        <div class="left">
          <h1>Информация по заявке</h1>
          <div class="id">Номер заявки: <span>№918573</span></div>

          <div class="sender">
            <div class="title">Отдаете</div>
            <div class="money">
              <span>400 RUB</span>
              <img src="@/assets/images/sberbank_icon.svg" alt="" />
            </div>
            <div class="rekvisit_title">Ваши реквизиты:</div>
            <div class="rekvisit_amount">2145 5125 7532 4215</div>
            <div class="rekvisit_name">Иванов Иван Иванович</div>
          </div>

          <img
            src="@/assets/images/arrow_bottom.svg"
            alt=""
            class="bottom_icon"
          />

          <div class="receiver">
            <div class="title">Получаете</div>
            <div class="money">
              <span>0.00013321 BTC</span>
              <img src="@/assets/images/bitcoin_icon.svg" alt="" />
            </div>
            <div class="kachelog_title">На кошелек:</div>
            <div class="kachelog_amount">
              Tjdxd348TWgdB77VJsQWeTMwhi9WtmHrhS
            </div>
          </div>
        </div>
        <div class="right">
          <div class="right_content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentHeader from "../components/PaymentHeader.vue";
export default {
  components: { PaymentHeader },
};
</script>