<template>
  <div class="theme-color">
    <ColorPicker
      :color="$store.state.mainColorBook"
      v-model="$store.state.mainColorBook"
      @input="changeMainColorBook"
    />
  </div>
</template>

<script>
import ColorPicker from './ColorPicker.vue';

export default {
  components: {
    ColorPicker,
  },
  methods: {
    changeMainColorBook(newColor) {
      this.$store.commit('changeMainColorBook', newColor);
    },
  },
};
</script>

<style>
.theme-color {
  width: 128px !important;
  height: 85px !important;
  border: 2px solid #000;
  position: relative;
}
.theme-color .vc-chrome {
  font-family: var(--secFont);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
