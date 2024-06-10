<template>
  <div class="proportions-block proportions-icon">
    <div class="proportions-wrapper">
      <div class="proportions-top-arrow" :style="proportionsStyle">
        <span>{{ ratio == 1 ? '' : ratio }}x</span>
      </div>
      <div :style="proportionsStyle" class="proportions-element">
        <div v-html="$store.state.faviconLogo" class="logo-proportions"></div>
      </div>
    </div>

    <div class="proportions-left-arrow" :style="proportionsStyle"><span>x</span></div>
  </div>
</template>

<script>
export default {
  props: {
    ratio: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      height: 80, // Fixed height
    };
  },
  computed: {
    proportionsStyle() {
      return {
        height: `${this.height}px`,
        width: `${this.height * this.ratio}px`,
      };
    },
  },
};
</script>
