<template>
  <v-select :options="fontOptions" v-model="selectedFontWeight" @change="handleChange">
    <template #selected-option="{ label }">
      <span :style="{ fontWeight: label }">{{ label }}</span>
    </template>
    <template #option="{ label }">
      <span :style="{ fontWeight: getFontWeight(label) }">{{ label }}</span>
    </template>
  </v-select>
</template>
<script>
export default {
  props: {
    fontWeightType: {
      type: String,
      required: true,
      validator: value => ['main', 'secondary'].includes(value),
    },
  },
  computed: {
    fontOptions() {
      return [
        { label: 'thin', value: 100 },
        { label: 'extralight', value: 200 },
        { label: 'light', value: 300 },
        { label: 'normal', value: 400 },
        { label: 'medium', value: 500 },
        { label: 'semibold', value: 600 },
        { label: 'bold', value: 700 },
        { label: 'extrabold', value: 800 },
        { label: 'black', value: 900 },
      ];
    },
    selectedFontWeight: {
      get() {
        return this.fontWeightType === 'main'
          ? this.$store.getters.mainFontWeight
          : this.$store.getters.secFontWeight;
      },
      set(value) {
        this.handleChange(value);
      },
    },
  },
  methods: {
    handleChange(newFontWeight) {
      const mutation =
        this.fontWeightType === 'main' ? 'changeMainFontWeight' : 'changeSecFontWeight';
      this.$store.commit(mutation, newFontWeight.value);
    },
    getFontWeight(label) {
      const option = this.fontOptions.find(option => option.label === label);
      return option ? option.value : 400; // default to 'normal' if not found
    },
  },
};
</script>
