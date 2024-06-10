<template>
  <div class="grid-container-clear">
    <div v-for="(cell, index) in cells" :key="index" :class="cell.class">
      <div v-if="cell.type === 'text'">{{ cell.content }}</div>
      <div v-else v-html="$store.state.faviconLogo" class="logo-favicon"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cells: [
        { type: 'text', content: 'x', class: 'top-left' },
        { type: 'text', content: '', class: '' },
        { type: 'text', content: 'x', class: 'top-right' },
        { type: 'text', content: '', class: '' },
        { type: 'image', class: 'center' }, // Update the path to your image
        { type: 'text', content: '', class: '' },
        { type: 'text', content: 'x', class: 'bottom-left' },
        { type: 'text', content: '', class: '' },
        { type: 'text', content: 'x', class: 'bottom-right' },
      ],
    };
  },
};
</script>
