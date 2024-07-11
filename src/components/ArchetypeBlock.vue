<template>
  <div class="archetype">
    <div class="img-wrapper">
      <img :src="'/src/assets/archetype/' + img + '.png'" :alt="title" />
    </div>
    <div class="content">
      <div class="title fs-34 fw-500 mb-32">{{ title }}</div>
      <div class="text mb-32">
        {{ text }}
      </div>
      <div class="sample">{{ sample }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    sample: {
      type: String,
      required: true,
    },
  },
};
</script>
