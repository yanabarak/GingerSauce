<template>
  <div class="add-pantone-color">
    <div class="pantone-color-wrap">
      <div class="shade first-shade" :style="{ backgroundColor: shades[0] }">
        <span class="hex-inside">{{ shades[0] }}</span>
      </div>
      <ColorPicker
        :color="$store.state.pantoneColor1"
        v-model="$store.state.pantoneColor1"
        @input="changePantoneColor1"
      />
      <span class="hex-inside">{{ $store.state.pantoneColor1 }}</span>
      <div class="shade second-shade" :style="{ backgroundColor: shades[1] }">
        <span class="hex-inside">{{ shades[1] }}</span>
      </div>
      <div class="shade third-shade" :style="{ backgroundColor: shades[2] }">
        <span class="hex-inside">{{ shades[2] }}</span>
      </div>
    </div>
    <div class="text-color-picker">
      <div class="color-name">Guberman Wine Red</div>
      <div class="color-value">
        <div class="name">Hex</div>
        <div class="value">{{ $store.state.pantoneColor1 }}</div>
        <div class="name">RGB</div>
        <div class="value">{{ rgbColor }}</div>
        <div class="name">CMYK</div>
        <div class="value">{{ cmykColor }}</div>
        <div class="name">Pantone</div>
        <div class="value">{{ pantoneColor }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorPicker from './ColorPicker.vue';
import { hexToRgb, rgbToCmyk, hexToPantone } from '../js/colorUtils';
import Color from 'color';

export default {
  components: { ColorPicker },
  data() {
    return {
      shades: [],
    };
  },
  watch: {
    '$store.state.pantoneColor1': {
      immediate: true,
      handler(newColor) {
        this.generateShades(newColor);
      },
    },
  },
  methods: {
    changePantoneColor1(newColor) {
      this.$store.commit('changePantoneColor1', newColor);
    },
    generateShades(hexColor) {
      const color = Color(hexColor);
      this.shades = [color.darken(0.2).hex(), color.lighten(0.2).hex(), color.lighten(0.4).hex()];
    },
  },
  computed: {
    rgbColor() {
      const { r, g, b } = hexToRgb(this.$store.state.pantoneColor1);
      return `${r} ${g} ${b}`;
    },
    cmykColor() {
      const { r, g, b } = hexToRgb(this.$store.state.pantoneColor1);
      const { c, m, y, k } = rgbToCmyk(r, g, b);
      return `${c} ${m} ${y} ${k}`;
    },
    pantoneColor() {
      return hexToPantone(this.$store.state.pantoneColor1);
    },
  },
};
</script>
