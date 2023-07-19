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
          <img src="@/assets/images/home_footer_icon.svg" alt="" />
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
              <div class="search">
                <input type="text" placeholder="Найти валюту" />
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
              <div class="search">
                <input type="text" placeholder="Найти валюту" />
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
                    <img
                      :src="require(`'@/assets/images/${item.icon}.svg`)"
                      alt=""
                    />
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
                  <div class="input">
                    <input type="number" v-model="senderInput" />
                    <div class="calculate_cender">
                      <div class="amount_name">
                        {{ select.datas.receive.unit }}
                      </div>
                      <img
                        :src="
                          'src/assets/images/' +
                          select.datas.receive.icon +
                          '.svg'
                        "
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="form_control input_receive">
                  <label>
                    <span class="min"
                      >Резервы: {{ select.datas.sender.amount }}</span
                    >
                  </label>
                  <div class="input">
                    <input type="number" disabled v-model="receiverInput" />
                    <div class="calculate_cender">
                      <div class="amount_name">
                        {{ select.datas.sender.unit }}
                      </div>
                      <img
                        :src="
                          'src/assets/images/' +
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
                  <div class="input" v-mask="'#### #### #### ####'">
                    <input type="text" value="1111 2222 3333 4444" />
                    <div class="calculate_cender">
                      <div class="amount_name">RUB</div>
                      <img src="@/assets/images/sberbank_icon.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="form_control input_receive">
                  <label>
                    <span class="min">Bitcoin кошелёк получателя</span>
                  </label>
                  <div class="input disabled">
                    <input type="text" />
                    <div class="calculate_cender">
                      <div class="amount_name"></div>
                      <img src="@/assets/images/bitcoin_icon.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="input_group warning">
                <div class="form_control fio input_sender">
                  <label>
                    <span class="min">ФИО отправителя</span>
                  </label>
                  <div class="input disabled">
                    <input type="text" value="" />
                    <div class="calculate_cender">
                      <div class="amount_name"></div>
                      <img src="@/assets/images/sberbank_icon.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="line"></div>

              <div class="input_group warning">
                <div class="form_control input_sender">
                  <label>
                    <span class="min">Ваш E-mail</span>
                  </label>
                  <div class="input email disabled">
                    <input type="email" value="" />
                    <div class="calculate_cender">
                      <div class="amount_name"></div>
                      <img src="@/assets/images/email_icon.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="form_control input_receive">
                  <label class="right">
                    <span class="min"> Промокод, необязательно </span>
                  </label>
                  <div class="input disabled">
                    <input type="text" />
                    <div class="calculate_cender">
                      <div class="amount_name"></div>
                      <img src="@/assets/images/bitcoin_icon.svg" alt="" />
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

              <button class="submit">Перейти к оплате</button>
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

        <a href="#" class="link">
          <img src="@/assets/images/arrow_top.svg" alt="" />
          Оставить отзыв
        </a>
      </div>
    </section>
  </main>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
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
    };
  },
  watch: {
    senderInput() {
      if (!this.changed) {
        if (this.select.datas.receive.unit == "RUB") {
          this.receiverInput =
            this.senderInput * this.select.datas.toRubleAmount;
          console.log("Rublega alyandi");
        } else {
          this.receiverInput = (
            this.senderInput / this.select.datas.toRubleAmount
          ).toFixed(2);
          console.log("ruble emas");
        }
      } else {
        this.changed = false;
      }
    },
  },
  methods: {
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
  },
};
</script>