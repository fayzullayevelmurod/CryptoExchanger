<template>
    <div class="comment_modal">
        <div class="content">
            <div class="content_head">
                <h1>Ваш отзыв</h1>
                <img @click="$emit('closeCommentModal')" class="close" src="@/assets/images/close.svg" role="button" alt="">
            </div>
            <div class="content_body">
                <div class="form_group">
                    <label for="">Ваше имя</label>
                    <input :class="name.length > 0 ? 'active_input' : ''" v-model="name" type="text">
                </div>


                <div class="form_group">
                    <label for="">Описание отзыва</label>
                    <textarea  :class="message.length ? 'active_input' : ''" v-model="message"></textarea>
                </div>
            </div>
            <div class="content_foot">
                <button class="send">Отправить отзыв</button>
                <button class="cancel" @click="$emit('closeCommentModal')">Отмена</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modal: Boolean,
    },
    data () {
        return {
            name: "",
            message: "",
        }
    }
}
</script>

<style scoped>

</style>