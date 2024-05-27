<template>
  <section class="align-self-start col-12 section-book" id="misuse-book">
    <div class="content">
      <h1 class="mb-4">Logo Misuse</h1>
      <p>
        It is important that the appearance of the logo remains consistent. The logo should not be
        misinterpreted, modified, or added to. No attempt should be made to alter the logo in any
        way. Its orientation, colour and composition should remain as indicated in this document —
        there are no exceptions.
      </p>
    </div>

    <div class="misuse-group">
      <misuseBlock
        v-for="(block, index) in misuseBlocks"
        :key="index"
        :img="block.img"
        :text="block.text"
      />
    </div>
    <div class="bg">Misuse</div>
  </section>
</template>
<script setup>
import MisuseBlock from './MisuseBlock.vue';
</script>
<script>
export default {
  data() {
    return {
      misuseBlocks: [
        {
          img: '/src/assets/misuse_1.png',
          text: 'Do not use old version of logo',
        },
        {
          img: '/src/assets/misuse_2.png',
          text: 'Do not distort or alter the proportions of the logo',
        },
        {
          img: '/src/assets/misuse_3.png',
          text: 'Do not use logo without the slogan',
        },
        {
          img: '/src/assets/misuse_4.png',
          text: 'Do not add contours to the logo',
        },
        {
          img: '/src/assets/misuse_5.png',
          text: 'Do not change any elements respective to one another',
        },
        {
          img: '/src/assets/misuse_6.png',
          text: 'Do not turn the logo to any angle',
        },
        {
          img: '/src/assets/misuse_7.png',
          text: 'Do not use one color black',
        },
      ],
    };
  },
};
</script>
<style>
#misuse-book .bg {
  font-size: 273px;
  right: 200px;
  bottom: auto;
  top: 100px;
  transform: rotate(-30deg);
  line-height: 1;
  width: fit-content;
  left: auto;
}
.misuse-group {
  margin-top: 200px;
  margin-bottom: 70px;
  display: grid;
  grid-template-columns: 300px 300px;
  gap: 170px;
}

@media screen and (max-width: 992px) {
  #misuse-book .bg {
    right: 0px;
  }
  .misuse-group {
    margin-top: 50px;
    margin-bottom: 0px;
    gap: 25px;
  }
}

@media screen and (max-width: 768px) {
  .misuse-group {
    grid-template-columns: 1fr;
  }
}
</style>
