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
                <button v-for="i in 9" :key="i" :class="i == 1 ? 'active' : ''">
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
                <button v-for="i in 9" :key="i" :class="i == 1 ? 'active' : ''">
                  <div class="img">
                    <img src="@/assets/images/bitcoin_icon.svg" alt="" />
                  </div>
                  <div class="text">
                    <div class="text_title">Bitcoin (BEP20)</div>
                    <div class="text_value">40 BTC</div>
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
                    <input type="text" value="0" />
                    <div class="calculate_cender">
                      <div class="amount_name">RUB</div>
                      <img src="@/assets/images/sberbank_icon.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="form_control input_receive">
                  <label>
                    <span class="min">Резервы: 40 BTC</span>
                  </label>
                  <div class="input">
                    <input type="text" value="0" />
                    <div class="calculate_cender">
                      <div class="amount_name">BTC</div>
                      <img src="@/assets/images/bitcoin_icon.svg" alt="" />
                    </div>
                  </div>
                </div>
                <button class="calculate_btn">
                  <img src="@/assets/images/calculate_icon.svg" alt="" />
                </button>
              </div>

              <div class="input_group warning">
                <div class="form_control input_sender">
                  <label>
                    <span class="min">Номер карты отправителя</span>
                    <img src="@/assets/images/answer_icon.svg" alt="" />
                  </label>
                  <div class="input">
                    <input type="text" value="2145 5125 7532 4215|" />
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
                <label for="remainder" role="button">
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
</script>

<style scoped>
.index
  #calculation
  .calculation_wrapper
  .calculate
  .content
  .check
  label::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0;
  top: 0;
  border-radius: 50%;
  background: #6552fe;
  opacity: 1;
}

.index
  #calculation
  .calculation_wrapper
  .calculate
  .content
  .check
  input:checked
  ~ label::after {
  background: url("~@/assets/images/check_icon.png");
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
}
</style>