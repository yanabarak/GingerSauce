<template>
  <section class="align-self-start col-12 section-book" id="fonts-book">
    <div class="content">
      <h1 class="mb-4">Our Fonts</h1>
      <p>
        We use one English font and one Hebrew font. <br />
        The primary font is Open Sans and it has 3 weights: Regular, Bold & ExtraBold.<br />
        Our Hebrew font is Open Sans Hebrew and it also has 3 weights: Regular, Bold & ExtraBold.
      </p>
      <FontBlock
        v-for="(block, index) in fontBlocks"
        :key="index"
        :name="block.name"
        :weight="block.weight"
        :text="block.text"
      />
    </div>

    <div class="bg" :style="{ fontFamily: $store.state.mainFontClient }">
      {{ $store.state.mainFontClient }}
    </div>
  </section>
</template>
<script setup>
import FontBlock from './FontBlock.vue';
</script>
<script>
export default {
  data() {
    return {
      fontBlocks: [
        {
          name: this.$store.state.mainFontClient,
          text: 'Primary Font',
          weight: ['Regular', 'Bold', 'Extra Bold'],
        },
        {
          name: this.$store.state.secFontClient,
          text: 'Secondary Font',
          weight: ['Regular', 'Bold', 'Extra Bold'],
        },
      ],
    };
  },
};
</script>
<style>
#fonts-book .bg {
  top: -30px;
  font-size: 200px;
  left: -50px;
  line-height: 1;
  font-weight: 800;
}
.fonts-group {
  margin-top: 150px;
  margin-bottom: 70px;
  display: grid;
  grid-template-columns: repeat(4, 105px);
  gap: 150px 68px;
}
#fonts-book {
  margin-bottom: 95px;
}

@media screen and (max-width: 992px) {
  #fonts-book {
    margin-bottom: 0px;
  }
  #fonts-book .bg {
    font-size: 130px;
    top: 0px;
    left: 10px;
    line-height: 1;
  }
}
</style>
