<template>
  <v-select :options="fontOptions" v-model="selectedFont" @change="handleChange">
    <template #selected-option="{ label }">
      <span :style="{ fontFamily: label }">{{ label }}</span>
    </template>
    <template #option="{ label }">
      <span :style="{ fontFamily: label }">{{ label }}</span>
    </template>
  </v-select>
</template>
<script>
export default {
  props: {
    fontType: {
      type: String,
      required: true,
      validator: value => ['main', 'secondary'].includes(value),
    },
  },
  computed: {
    fontOptions() {
      return [
        { label: 'Abril Fatface', code: 'AF' },
        { label: 'Montserrat', code: 'MO' },
        { label: 'Open Sans', code: 'OS' },
      ];
    },
    selectedFont: {
      get() {
        return this.fontType === 'main'
          ? this.$store.getters.mainFont
          : this.$store.getters.secFont;
      },
      set(value) {
        this.handleChange(value);
      },
    },
  },
  methods: {
    handleChange(newFont) {
      const mutation = this.fontType === 'main' ? 'changeMainFont' : 'changeSecFont';
      this.$store.commit(mutation, newFont.label);
    },
  },
};
</script>
