<template>
  <payment-header />
  <div class="application_payment">
    <img src="@/assets/images/payment_bg.png" alt="" class="payment_bg" />
    <div class="main_container">
      <div class="content">
        <div class="content_head">
          <div class="title">
            <h1>Ожидание оплаты</h1>
            <div class="id">№918573</div>
          </div>
          <div class="timer">
            <div class="clock">
              <img src="@/assets/images/clock.svg" alt="" />
            </div>
            <div class="value">
              <div class="text_wrapper">
                <div class="time">{{ formatTime }}</div>
                <div class="text">
                  Оплатите заявку до окончания этого времени
                </div>
              </div>
              <div class="time_line_wrapper">
                <div class="time_line" :style="timeWidth"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="content_body">
          <div class="content_item amount">
            <div class="item_head amount_head">
              <div class="number">1</div>
              <h3>Сделать перевод по реквизитам:</h3>
            </div>

            <div class="copy">
              <div class="left">
                <div class="title">Сумма к оплате:</div>
                <div class="value">
                  <span>{{$store.state.sender.amount}} {{ $store.state.sender.unit }}</span>
                  <Copy :copyText="$store.state.sender.amount" />
                </div>
              </div>
              <div class="right">
                <div class="title">Номер карты:</div>
                <div class="value">
                  <span>7124 9124 1814 9421</span>
                  <Copy copyText="7124912418149421" />
                </div>
              </div>
            </div>
          </div>
          <div class="content_item instruction">
            <div class="item_head">
              <div class="number">2</div>
              <h3>После оплаты, нажмите кнопку “Я оплатил”</h3>
            </div>
            <div class="text">
              В течение 5-15 минут, после поступления Ваших денег на наш счет
              она будет обработана и средства будут перечислены на указанный
              Вами кошелек или счет. <br />
              <br />
              Отследить статус заявки можно на с следующей странице после
              оплаты.
              <br />
              <br />
              Пожалуйста убедитесь, что Вы не только нажали на кнопку “Я
              оплатил”, но и действительно перевели к нам средства.
              <br />
              <br />
              По всем вопросам, или в случае задержки обмена, обращайтесь в
              техническую поддержку.
            </div>
          </div>
          <div class="warning">
            <div class="img">
              <img src="@/assets/images/attention.svg" alt="" />
            </div>
            <div class="text">
              Обратите внимание - мы не принимаем платежи от юридических лиц.
              Заявки оплаченные от юр. лиц не будут исполнены.
            </div>
          </div>
        </div>
        <div class="content_foot">
          <button class="send" @click="$router.push({name: 'payment-pending'})">Я оплатил</button>
          <div class="cancel" @click="$router.push({name: 'home'})">Отмена</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentHeader from "../../components/PaymentHeader.vue";
import Copy from "../../components/Copy.vue";

export default {
  components: { PaymentHeader, Copy },
  data() {
    return {
      defaultTime: 1200,
      time: 1200,
      width: 0,
    };
  },
  computed: {
    formatTime() {
      let hours = Math.floor(this.time / 60);
      let minutes = this.time % 60;
      return hours + ":" + (minutes == 0 ? "00" : minutes);
    },
    timeWidth() {
      if (this.time != 0) {
        return "width: " + this.width.toFixed(2) + "%;";
      }
      return "width: " + "100%";
    },
  },
  mounted() {
    let clear = setInterval(
      function () {
        if (this.time == 1) {
          clearInterval(clear);
        }
        this.width += 100 / this.defaultTime;
        this.time--;
      }.bind(this),
      1000
    );
  },
};
</script>

<style>
</style>