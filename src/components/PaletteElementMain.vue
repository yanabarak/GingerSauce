<template>
  <div id="main-color">
    <ColorPicker
      :color="$store.state.mainColor"
      v-model="$store.state.mainColor"
      @input="changeMainColor"
    />
    <div class="text-color-picker">
      Primary Color <span class="color">{{ $store.state.mainColor }}</span>
    </div>
  </div>
</template>

<script>
import ColorPicker from './ColorPicker.vue';

export default {
  components: { ColorPicker },
  data() {
    return {
      newColor: '',
    };
  },
  setup() {},
  methods: {
    changeMainColor(newColor) {
      this.$store.commit('changeMainColor', newColor);
      console.log(this.$store.state.mainColor);
    },
  },
};
</script>
<style>
#main-color {
  position: relative;
  width: 520px !important;
  height: 480px !important;
}
#main-color .current-color {
  width: 520px !important;
  height: 480px !important;
  clip-path: path(
    'M1.62025 188.102C-13.1535 427.378 225.026 556.622 373.956 419.969C501.634 295.064 515.5 200 507 141.499C483.44 -20.6497 18.7102 -88.6864 1.62025 188.102Z'
  );
}
#main-color .vc-color-wrap.transparent {
  background-image: none !important;
  box-shadow: none;
  width: fit-content !important;
  height: fit-content !important;
}
#main-color .text-color-picker {
  font-size: 16px;
  font-weight: calc(var(--secFontWeight) + 100);
  line-height: 26px;
  text-align: left;
  color: #fff;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 120px;
}
#main-color .text-color-picker .color {
  font-size: 24px;
  font-style: italic;
  font-weight: calc(var(--secFontWeight) + 200);
}
#main-color .vc-chrome {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

@media screen and (max-width: 992px) {
  #main-color {
    position: relative;
    width: 300px !important;
    height: 300px !important;
  }
  #main-color .current-color {
    width: 300px !important;
    width: 300px !important;
    clip-path: path(
      'm0.9 100c-7.9 127.2 118.5 195.9 197.5 123.2 67.7-66.4 75-116.9 70.5-148-12.5-86.2-259-122.3-268 24.8z'
    );
  }
}
</style>
