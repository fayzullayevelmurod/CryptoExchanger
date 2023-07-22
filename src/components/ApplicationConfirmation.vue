<template>
  <div class="confirmation">
    <div class="content">
      <div class="content_head">
        <h1>Подтверждение заявки</h1>
        <img
          @click="$emit('closeConfirmModal')"
          src="@/assets/images/close.svg"
          role="button"
          alt=""
        />
      </div>
      <div class="content_body">
        <div class="title">
          Для завершения операции обмена нажмите на кнопку “Перейти к оплате”
        </div>
        <div class="card">
          <div class="card_item">
            <h2>Отдаете</h2>
            <div class="amount">
              <div class="img">
                <img src="@/assets/images/sberbank_icon.svg" alt="" />
              </div>
              <div class="text">
                <div class="text_title">Сбербанк</div>
                <div class="value">{{ sender.amount }} {{ sender.unit }}</div>
              </div>
            </div>
            <div class="information">
              <div class="information_title">Ваши реквизиты:</div>
              <div class="plast_card">{{ sender.card }}</div>
              <div class="full_name">{{ sender.userName }}</div>
            </div>
          </div>

          <img src="@/assets/images/arrow_right_icon.svg" alt="" class="icon" />

          <div class="card_item">
            <h2>Получаете</h2>
            <div class="amount">
              <div class="img">
                <img src="@/assets/images/bitcoin_icon.svg" alt="" />
              </div>
              <div class="text">
                <div class="text_title">Bitcoin</div>
                <div class="value">
                  {{ receiver.amount }} {{ receiver.unit }}
                </div>
              </div>
            </div>
            <div class="information">
              <div class="information_title">Кошелек получателя:</div>
              <textarea
                rows="2"
                disabled
                v-model="receiver.cashelog"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="content_foot">
        <button class="send" @click="SubmitData()">Перейти к оплате</button>
        <button class="cancel" @click="$emit('closeConfirmModal')">
          Отмена
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sender: {
      amount: {
        type: Number,
        default: 0,
      },
      card: {
        type: String,
        default: "1111 1111 1111 1111",
      },
      userName: {
        type: String,
        default: "John Doe",
      },
      unit: {
        type: String,
        default: "RUB",
      },
    },
    receiver: {
      name: {
        type: String,
        default: "Bitcoin",
      },
      amount: {
        type: Number,
        default: 0,
      },
      cashelog: {
        type: String,
        default: "K454KJD98KD",
      },
      unit: {
        type: String,
        default: "BTC",
      },
    },
  },
  methods: {
    SubmitData() {
      const data = {
        sender: {
          amount: this.sender.amount ? this.sender.amount : 0,
          card: this.sender.card ? this.sender.card : "1111 1111 1111 1111",
          userName: this.sender.userName ? this.sender.userName : "John Doe",
          unit: this.sender.unit ? this.sender.unit : "RUB",
        },
        receiver: {
          name: this.receiver.name ? this.receiver.name : "Bitcoin",
          amount: this.receiver.amount ? this.receiver.amount : 0,
          cashelog: this.receiver.cashelog
            ? this.receiver.cashelog
            : "K454KJD98KD",
          unit: this.receiver.unit ? this.receiver.unit : "BTC",
        },
      };
      this.$store.commit('changeData', data);
      this.$router.push({ name: 'payment-application'});
    },
  },
};
</script>