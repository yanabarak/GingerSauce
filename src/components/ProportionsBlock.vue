<template>
  <div class="proportions-block">
    <div class="proportions-left-arrow" :style="proportionsStyle">x</div>

    <div class="proportions-wrapper">
      <div class="proportions-top-arrow" :style="proportionsStyle">
        {{ ratio == 1 ? '' : ratio }}x
      </div>
      <div :style="proportionsStyle" class="proportions-element">
        <div v-html="$store.state.mainLogo" class="logo-proportions"></div>
      </div>
    </div>
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
      baseHeight: 100, // Base height for screens wider than 768px
      smallScreenHeight: 50, // Height for screens smaller than 768px
      windowWidth: window.innerWidth, // Current window width
    };
  },
  computed: {
    proportionsStyle() {
      const height = this.windowWidth < 768 ? this.smallScreenHeight : this.baseHeight;
      return {
        height: `${height}px`,
        width: `${height * this.ratio}px`,
      };
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
