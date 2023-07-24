<template>
  <main class="index">
    <section id="home">
      <img src="@/assets/images/index_bg_1.png" alt="" class="index_bg_1" />
      <img src="@/assets/images/index_bg_2.png" alt="" class="index_bg_2" />
      <img src="@/assets/images/index_bg_3.png" alt="" class="index_bg_3" />
      <img src="@/assets/images/index_bg_4.png" alt="" class="index_bg_4" />

      <div class="main_container">
        <div class="home_top">
          <div class="text">инновационная</div>
          <div class="img img_1">
            <img src="@/assets/images/home_card_1.png" alt="" />
          </div>
          <div class="text">платформа</div>
          <div class="img img_2">
            <img class="" src="@/assets/images/home_card_2.png" alt="" />
            <img
              src="@/assets/images/home_card_2_star.svg"
              alt=""
              class="star"
            />
          </div>
          <div class="text">для быстрого обмена</div>
          <div class="img img_3">
            <img src="@/assets/images/home_card_3.png" alt="" />
            <img
              src="@/assets/images/home_card_3_star.svg"
              alt=""
              class="star"
            />
          </div>
          <div class="text">криптовалюты</div>
        </div>

        <div class="home_body">
          <div class="card">
            <img src="@/assets/images/index_card_1.svg" alt="" />
            <h3>Быстрая сделка</h3>
          </div>
          <div class="card">
            <img src="@/assets/images/index_card_2.svg" alt="" />
            <h3>Поддержка 24/7</h3>
          </div>
          <div class="card">
            <img src="@/assets/images/index_card_3.svg" alt="" />
            <h3>Множество валютных пар</h3>
          </div>
        </div>

        <button class="home_footer">
          <div class="img">
            <img src="@/assets/images/arrow_bottom_icon.svg" alt="" />
          </div>
          Перейти к обменнику
        </button>
      </div>
    </section>

    <section id="calculation">
      <div class="main_container">
        <div class="calculation_wrapper">
          <div class="amont_type">
            <div class="type_item sender">
              <div class="title">Отдаете</div>
              <div
                class="search"
                :class="check.searchSender ? check.searchSender : 'input'"
              >
                <input
                  type="text"
                  @focus="checkInout('searchSender', searchSender)"
                  @input="enterInput('searchSender', searchSender)"
                  @blur="checkInput('searchSender', searchSender)"
                  v-model="searchSender"
                  placeholder="Найти валюту"
                />
                <button>
                  <img src="@/assets/images/search_icon.svg" alt="" />
                </button>
              </div>
              <div class="buttons">
                <button
                  v-for="i in 9"
                  @click="select.sender = i"
                  :key="i"
                  :class="i == select.sender ? 'active' : ''"
                >
                  <div class="img">
                    <img src="@/assets/images/sberbank_icon.svg" alt="" />
                  </div>
                  Сбербанк
                </button>
              </div>
            </div>
            <div class="type_item receive">
              <div class="title">Получаете</div>
              <div
                class="search"
                :class="check.searchReceive ? check.searchReceive : 'input'"
              >
                <input
                  type="text"
                  @focus="checkInout('searchReceive', searchReceive)"
                  @input="enterInput('searchReceive', searchReceive)"
                  @blur="checkInput('searchReceive', searchReceive)"
                  v-model="searchReceive"
                  placeholder="Найти валюту"
                />
                <button>
                  <img src="@/assets/images/search_icon.svg" alt="" />
                </button>
              </div>
              <div class="buttons">
                <!-- @click="select.receive = item.id" -->
                <button
                  v-for="item in currencyReceiveList"
                  @click="changeSelect(item)"
                  :key="item.id"
                  :class="item.id == select.receive ? 'active' : ''"
                >
                  <div class="img">
                    <img src="@/assets/images/bitcoin_icon.svg" alt="" />
                  </div>
                  <div class="text">
                    <div class="text_title">{{ item.name }}</div>
                    <div class="text_value">{{ item.amount }}</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div class="calculate">
            <div class="head">
              <div class="head_title">Ваши данные</div>
              <div class="head_value">
                <img src="@/assets/images/chart_icon.svg" alt="" />
                1 BTC = 2 772 491,40 RUB
              </div>
            </div>
            <div class="content">
              <div class="input_group">
                <div class="form_control input_sender">
                  <label>
                    <span class="min">Min: 700 RUB</span>
                    <span class="max">Max: 500000 RUB</span>
                  </label>
                  <div
                    class="input"
                    :class="check.senderInput ? check.senderInput : 'input'"
                  >
                    <input
                      type="number"
                      @focus="checkInout('senderInput', senderInput)"
                      @input="enterInput('senderInput', senderInput)"
                      @blur="checkInput('senderInput', senderInput)"
                      v-model="senderInput"
                    />
                    <div class="calculate_cender">
                      <div class="amount_name">
                        {{ select.datas.receive.unit }}
                      </div>
                      <img
                        :src="'src/assets/images/'+select.datas.receive.icon+'.svg'"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="form_control input_receive receive_top">
                  <label>
                    <span class="min"
                      >Резервы: {{ select.datas.sender.amount }}</span
                    >
                  </label>
                  <div
                    class="input"
                    :class="receiverInput ? 'input_active' : ''"
                  >
                    <input type="number" disabled v-model="receiverInput" />
                    <div class="calculate_cender">
                      <div class="amount_name">
                        {{ select.datas.sender.unit }}
                      </div>
                      <img
                        :src="
                          './src/assets/images/' +
                          select.datas.sender.icon +
                          '.svg'
                        "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <button @click="changeCalculation()" class="calculate_btn">
                  <img src="@/assets/images/calculate_icon.svg" alt="" />
                </button>
              </div>

              <div class="input_group warning">
                <div class="form_control input_sender">
                  <label>
                    <span class="min">Номер карты отправителя</span>
                    <img src="@/assets/images/answer_icon.svg" alt="" />
                  </label>
                  <div
                    class="input"
                    v-mask="'#### #### #### ####'"
                    :class="check.plastCard ? check.plastCard : ''"
                  >
                    <input
                      type="text"
                      @focus="checkInout('plastCard', plastCard)"
                      @input="enterInput('plastCard', plastCard)"
                      @blur="checkInput('plastCard', plastCard)"
                      v-model="plastCard"
                    />
                    <div class="calculate_cender">
                      <img src="@/assets/images/siberbank_blur_icon.png" alt="" />
                    </div>
                  </div>
                  <span v-if="error.plastCard" class="error">
                    {{ error.plastCard }}
                  </span>
                </div>
                <div class="form_control input_receive kashelog">
                  <label>
                    <span class="min">Bitcoin кошелёк получателя</span>
                  </label>
                  <div
                    class="input disabled"
                    :class="check.cashelog ? check.cashelog : ''"
                  >
                    <input
                      type="text"
                      @focus="checkInout('cashelog', cashelog)"
                      @input="enterInput('cashelog', cashelog)"
                      @blur="checkInput('cashelog', cashelog)"
                      v-model="cashelog"
                    />
                    <div class="calculate_cender">
                      <div class="amount_name"></div>
                      <img src="@/assets/images/bitcoin_blur_icon.png" alt="" />
                    </div>
                  </div>
                  <span v-if="error.cashelog" class="error">{{
                    error.cashelog
                  }}</span>
                </div>
              </div>

              <div class="input_group warning">
                <div class="form_control fio input_sender">
                  <label>
                    <span class="min">ФИО отправителя</span>
                  </label>
                  <div
                    class="input disabled full_name"
                    :class="check.fullName ? check.fullName : ''"
                  >
                    <input
                      type="text"
                      @focus="checkInout('fullName', fullName)"
                      @input="enterInput('fullName', fullName)"
                      @blur="checkInput('fullName', fullName)"
                      v-model="fullName"
                    />
                    <div class="calculate_cender">
                      <div class="amount_name"></div>
                      <img src="@/assets/images/siberbank_blur_icon.png" alt="" />
                    </div>
                  </div>
                  <span v-if="error.fullName" class="error">{{
                    error.fullName
                  }}</span>
                </div>
              </div>

              <div class="line"></div>

              <div class="input_group warning">
                <div class="form_control input_sender">
                  <label>
                    <span class="min">Ваш E-mail</span>
                  </label>
                  <div
                    class="input email disabled"
                    :class="check.email ? check.email : ''"
                  >
                    <input
                      type="email"
                      @focus="checkInout('email', email)"
                      @input="enterInput('email', email)"
                      @blur="checkInput('email', email)"
                      v-model="email"
                    />
                    <div class="calculate_cender">
                      <img src="@/assets/images/email_icon.png" alt="" />
                    </div>
                  </div>
                  <span v-if="error.email" class="error">{{
                    error.email
                  }}</span>
                </div>
                <div class="form_control input_receive promokod_wrapper">
                  <label class="right">
                    <span class="min">
                      Промокод, необязательно
                      <img src="@/assets/images/answer_icon.svg" alt="" />
                    </span>
                  </label>
                  <div
                    class="input disabled promokod"
                    :class="check.promocod ? check.promocod : ''"
                  >
                    <input
                      type="text"
                      @focus="checkInout('promocod', promocod)"
                      @input="enterInput('promocod', promocod)"
                      @blur="checkInput('promocod', promocod)"
                      v-model="promocod"
                    />
                    <div class="calculate_cender">
                      <div class="amount_name"></div>
                      <!-- <img src="@/assets/images/bitcoin_icon.svg" alt="" /> -->
                    </div>
                  </div>
                </div>
              </div>

              <div class="check">
                <input type="checkbox" id="remainder" />
                <label
                  @click="radioCheck = !radioCheck"
                  for="remainder"
                  role="button"
                >
                  <img
                    v-if="radioCheck"
                    src="@/assets/images/check_icon.svg"
                    alt=""
                  />
                  <img v-else src="@/assets/images/check.svg" alt="" />
                  <div>
                    Я соглашаюсь с <span>правилами обмена</span> и
                    <span>политикой AML/KYS</span>
                  </div>
                </label>
              </div>

              <button @click="confirmationModal()" class="submit">
                Перейти к оплате
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="comment">
      <div class="main_container">
        <h1>Отзывы наших клиентов</h1>

        <div class="body">
          <div class="card" v-for="i in 6" :key="i">
            <div class="card_head">
              <img src="@/assets/images/chat.svg" alt="" />
              Алексей
            </div>
            <div class="card_body">
              100 из 10 за скорость обработки обмена, а так же самые выгодные
              курсы
            </div>
            <div class="card_foot">03.07.2023</div>
          </div>
        </div>

        <a @click="commentModal = true" class="link" role="button">
          <div class="img">
            <img src="@/assets/images/Icon.png" alt="" />
          </div>
          Оставить отзыв
        </a>
      </div>
    </section>

    <CommentModal
      v-if="commentModal"
      @closeCommentModal="closeCommentModal()"
      :modal="commentModal"
    />
    <ApplicationConfirmation
      v-if="confirmation"
      :sender="datas.sender"
      :receiver="datas.receiver"
      @closeConfirmModal="closeConfirmModal()"
    />
  </main>
</template>

<script>
import { mask } from "vue-the-mask";
import CommentModal from "@/components/CommentModal.vue";
import ApplicationConfirmation from "../components/ApplicationConfirmation.vue";

export default {
  components: {
    CommentModal,
    ApplicationConfirmation,
  },
  directives: { mask },
  data() {
    return {
      currencyReceiveList: [
        {
          id: 1,
          name: "Bitcoin (BEP20)",
          amount: "40 BTC",
          icon: "bitcoin_icon",
          toRuble: 2710280.9,
          unit: "BTC",
        },
        {
          id: 2,
          name: "Tether",
          amount: "50 000 USDT",
          icon: "tether",
          toRuble: 90.65,
          unit: "USDT",
        },
        {
          id: 3,
          name: "Prizm",
          amount: "12 214 521 5125 PZM",
          icon: "prizm",
          toRuble: 0.26,
          unit: "PZM",
        },
        {
          id: 4,
          name: "Ecc",
          amount: "122 214 521 5125 ECC",
          icon: "ecc",
          toRuble: 1.023,
          unit: "ECC",
        },
        {
          id: 5,
          name: "Ethereum",
          amount: "521 5125 ETH",
          icon: "ethereum",
          toRuble: 172235,
          unit: "ETH",
        },
        {
          id: 6,
          name: "Ion",
          amount: "12 521 5125 ION",
          icon: "ion",
          toRuble: 49290.45,
          unit: "ION",
        },
        {
          id: 7,
          name: "Bealf",
          amount: "122 521 5125 ELF",
          icon: "bealf",
          toRuble: 22.21,
          unit: "ELF",
        },
        {
          id: 8,
          name: "BOScoin",
          amount: "412 142 124 114 412 BOS",
          icon: "boscoin",
          toRuble: 0.4705,
          unit: "BOS",
        },
        {
          id: 9,
          name: "Golem",
          amount: "125 152 512 GNT",
          icon: "golem",
          toRuble: 13.74,
          unit: "GNT",
        },
      ],
      searchReceive: "",
      searchSender: "",
      rubleTo: true,
      select: {
        receive: 1,
        sender: 1,
        datas: {
          toRubleAmount: 2710280.9,
          receive: {
            id: 1,
            amount: "40 BTC",
            icon: "sberbank_icon",
            toRuble: 1,
            unit: "RUB",
          },
          sender: {
            id: 1,
            name: "Bitcoin (BEP20)",
            amount: "40 BTC",
            icon: "bitcoin_icon",
            toRuble: 2710280.9,
            unit: "BTC",
          },
        },
      },
      senderInput: "",
      receiverInput: "",
      changed: false,
      radioCheck: false,
      commentModal: false,
      confirmation: false,
      plastCard: "",
      cashelog: "",
      email: "",
      fullName: "",
      promocod: "",
      error: {},
      check: {},
      datas: {},
    };
  },
  watch: {
    senderInput() {
      if (!this.changed) {
        if (this.select.datas.receive.unit == "RUB") {
          this.receiverInput = (
            this.senderInput * this.select.datas.toRubleAmount
          ).toFixed(4);
        } else {
          this.receiverInput = (
            this.senderInput / this.select.datas.toRubleAmount
          ).toFixed(2);
        }
      } else {
        this.changed = false;
      }
    },
  },
  methods: {
    getPhotoUrl (img) {
      return `./assets/images/${img}.svg`;
    },
    changeCalculation() {
      this.changed = true;
      let receiver = this.select.datas.receive;
      this.select.datas.receive = this.select.datas.sender;
      this.select.datas.sender = receiver;
      let r = parseFloat(this.receiverInput);
      this.receiverInput = parseFloat(this.senderInput);
      this.senderInput = r;
      this.rubleTo = !this.rubleTo;
    },
    changeSelect(data) {
      this.select.receive = data.id;
      if (this.select.datas.receive.unit == "RUB") {
        this.select.datas.sender = data;
      } else {
        this.select.datas.receive = data;
      }
      console.log(data);
      this.select.datas.toRubleAmount = data.toRuble;
    },
    closeCommentModal() {
      this.commentModal = false;
    },
    closeConfirmModal() {
      this.confirmation = false;
    },
    checkInput(el, value) {
      if (!value) {
        this.error[el] = "Обязательное поле";
        this.check[el] = "";
      } else {
        this.error[el] = "";
      }
    },
    checkInout(el, value) {
      if (value == "") {
        this.check[el] = "focus_input";
      }
    },
    enterInput(el, value) {
      if (value != "") {
        this.check[el] = "input_active";
      }
    },
    confirmationModal () {
      this.confirmation = true;
      console.log(this.select.datas);

      if (this.select.datas.receive.unit == "RUB") {
        let data = {
          sender: {
            amount: this.senderInput,
            card: this.plastCard,
            userName: this.fullName,
            unit: this.select.datas.receive.unit,
          },
          receiver: {
            name: this.select.datas.sender.name,
            amount: this.receiverInput,
            cashelog: this.cashelog,
            unit: this.select.datas.sender.unit,
          }
        }
        this.datas = data;
      } else {
        let data = {
          sender: {
            amount: this.receiverInput,
            card: this.plastCard,
            userName: this.fullName,
            unit: this.select.datas.sender.unit,
          },
          receiver: {
            name: this.select.datas.receive.name,
            amount: this.senderInput,
            cashelog: this.cashelog,
            unit: this.select.datas.receive.unit,
          }
        }
        this.datas = data;
      }
      console.log(this.datas)
    }
  },
};
</script>