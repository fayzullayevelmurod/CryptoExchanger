<template>
  <payment-header />
  <div class="pending_payment">
    <img
      src="@/assets/images/pedding_ayment_bg.png"
      alt=""
      class="payment_bg"
    />
    <div class="main_container">
      <div class="content">
        <div class="left">
          <h1>Информация по заявке</h1>
          <div class="id">Номер заявки: <span>№918573</span></div>

          <div class="card">
            <div class="sender card_item">
              <div class="title">Отдаете</div>
              <div class="money">
                <span
                  >{{ $store.state.sender.amount }}
                  {{ $store.state.sender.unit }}</span
                >
                <img src="@/assets/images/sberbank_icon.svg" alt="" />
              </div>
              <div class="rekvisit_title title_2">Ваши реквизиты:</div>
              <div class="rekvisit_amount amount">{{ $store.state.sender.card }}</div>
              <div class="rekvisit_name">
                {{ $store.state.sender.userName }}
              </div>
            </div>

            <img
              src="@/assets/images/arrow_bottom.svg"
              alt=""
              class="bottom_icon"
            />

            <div class="receiver card_item">
              <div class="title">Получаете</div>
              <div class="money">
                <span
                  >{{ $store.state.receiver.amount }}
                  {{ $store.state.receiver.unit }}</span
                >
                <img src="@/assets/images/bitcoin_icon.svg" alt="" />
              </div>
              <div class="kachelog_title title_2">На кошелек:</div>
              <div class="kachelog_amount amount">
                {{ $store.state.receiver.cashelog }}
              </div>
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