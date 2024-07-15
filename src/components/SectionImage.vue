<template>
  <section class="align-self-start col-12 p-0 pt-4">
    <div class="cover-img">
      <img :src="'/src/assets/cover/' + img" alt="cover image" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
  },
};
</script>
