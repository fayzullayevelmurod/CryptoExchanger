<template>
  <div class="confirmation">
    <div class="content">
      <div class="content_head">
        <h1>Подтверждение заявки</h1>
        <img @click="$emit('closeConfirmModal')" src="@/assets/images/close.svg" role="button" alt="">
      </div>
      <div class="content_body">
        <div class="title">Для завершения операции обмена нажмите на кнопку “Перейти к оплате”</div>
        <div class="card">
          <div class="card_item">
            <h2>Отдаете</h2>
            <div class="amount">
              <div class="img">
                <img src="@/assets/images/sberbank_icon.svg" alt="">
              </div>
              <div class="text">
                <div class="text_title">Сбербанк</div>
                <div class="value">400 RUB</div>
              </div>
            </div>
            <div class="information">
              <div class="information_title">Ваши реквизиты:</div>
              <div class="plast_card">2145 5125 7532 4215</div>
              <div class="full_name">Иванов Иван Иванович</div>
            </div>
          </div>

          <img src="@/assets/images/arrow_right_icon.svg" alt="" class="icon">

          <div class="card_item">
            <h2>Получаете</h2>
            <div class="amount">
              <div class="img">
                <img src="@/assets/images/bitcoin_icon.svg" alt="">
              </div>
              <div class="text">
                <div class="text_title">Bitcoin</div>
                <div class="value">0.000148 BTC</div>
              </div>
            </div>
            <div class="information">
              <div class="information_title">Кошелек получателя:</div>
              <textarea rows="2" disabled>Tjdxd348TWgdB77VJsQWeTMwhi9WtmHrhS</textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="content_foot">
        <button class="send">Перейти к оплате</button>
        <button class="cancel" @click="$emit('closeConfirmModal')">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>