<template>
  <section class="align-self-start col-12 section-book" id="icons-book">
    <div class="content">
      <h1 class="mb-4">Feature Icons</h1>
      <p>
        Icons are the visual expression of our products, services or tools.<br />
        Simple, light, sophisticated and friendly, they communicate the core idea or component of
        the brand. While each icon is visually distinct, all icons should have consistent line
        weights and visual style.
      </p>
    </div>

    <div class="icons-group">
      <IconsBlock
        v-for="(block, index) in iconsBlocks"
        :key="index"
        :img="block.img"
        :text="block.text"
      />
    </div>
    <div class="bg-img">
      <svg
        width="558"
        height="521"
        viewBox="0 0 558 521"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M254.822 518.061C493.458 547.692 637.624 317.253 510.05 159.675C392.918 24.1022 190.65 193.306 111.327 134.754C-16.0352 40.7424 -272.337 -92.8524 -284.248 96.3094C-295.583 276.344 60.7259 493.961 254.822 518.061Z"
        />
      </svg>
    </div>
  </section>
</template>
<script setup>
import IconsBlock from './IconsBlock.vue';
</script>
<script>
export default {
  data() {
    return {
      iconsBlocks: [
        {
          img: '/src/assets/client-icons.svg#icon-1',
          text: 'Icon 1',
        },
        {
          img: '/src/assets/client-icons.svg#icon-2',
          text: 'Icon 2',
        },
        {
          img: '/src/assets/client-icons.svg#icon-3',
          text: 'Icon 3',
        },
        {
          img: '/src/assets/client-icons.svg#icon-4',
          text: 'Icon 4',
        },
        {
          img: '/src/assets/client-icons.svg#icon-5',
          text: 'Icon 5',
        },
        {
          img: '/src/assets/client-icons.svg#icon-6',
          text: 'Icon 6',
        },
        {
          img: '/src/assets/client-icons.svg#icon-7',
          text: 'Icon 7',
        },
        {
          img: '/src/assets/client-icons.svg#icon-8',
          text: 'Icon 8',
        },
        {
          img: '/src/assets/client-icons.svg#icon-9',
          text: 'Icon 9',
        },
        {
          img: '/src/assets/client-icons.svg#icon-10',
          text: 'Icon 10',
        },
        {
          img: '/src/assets/client-icons.svg#icon-11',
          text: 'Icon 11',
        },
        {
          img: '/src/assets/client-icons.svg#icon-12',
          text: 'Icon 12',
        },
      ],
    };
  },
};
</script>
<style>
#icons-book .bg-img {
  top: -100px;
  left: -210px;
}
.icons-group {
  margin-top: 150px;
  margin-bottom: 70px;
  display: grid;
  grid-template-columns: repeat(4, 105px);
  gap: 150px 68px;
}

@media screen and (max-width: 992px) {
  .icons-group {
    margin-top: 50px;
    margin-bottom: 0px;
    display: grid;
    gap: 50px;
  }
}

@media screen and (max-width: 768px) {
  .icons-group {
    grid-template-columns: repeat(2, auto);
  }
}
</style>
