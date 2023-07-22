<template>
  <div class="accardion">
    <button @click="open = !open">
      <span>{{ title }}</span>
      <img src="@/assets/images/arrow_up_icon.svg" :class="open ? 'active_image' : ''" />
    </button>
    <div class="text" :class="open ? 'open' : ''">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>