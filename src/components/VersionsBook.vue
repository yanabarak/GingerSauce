<template>
  <section class="align-self-start col-12 p-0" id="versions-book">
    <div class="main-content">
      <h1 class="mb-4">Logo Versions</h1>
      <p class="mb-50">
        The Guberman Logo should be used mostly with the Wine Red and White colors. The negative
        Guberman Logo can be used on dark image backgounds with high contrast between them. <br />
        The Monochrome version logo should be used on documents that are printed in black & white.
      </p>
    </div>
    <div class="group-img d-flex flex-wrap mb-50">
      <LogoBlock
        v-for="(block, index) in logoBlocks"
        :key="index"
        :bg-color="block.bgColor"
        :theme="block.theme"
        :logo="block.logo"
        :width="block.width"
        :text="block.text"
      />
    </div>

    <div class="main-content pt-0">
      <DownloadBtn />
    </div>
  </section>
</template>
<script setup>
import LogoBlock from './LogoBlock.vue';
import DownloadBtn from './DownloadBtn.vue';
</script>
<script>
export default {
  data() {
    return {
      logoBlocks: [
        {
          bgColor: '#fff',
          theme: 'light',
          logo: 'alternative',
          width: 50,
          text: 'Alternative Logo',
        },
        {
          bgColor: '#fff',
          theme: 'light',
          logo: 'wide',
          width: 50,
          text: 'Wide format logo',
        },
        {
          bgColor: 'var(--theme-color)',
          theme: 'dark',
          logo: 'main',
          width: 50,
          text: 'Alternative Logo',
        },
        {
          bgColor: '#000',
          theme: 'dark',
          logo: 'main',
          width: 50,
          text: 'Wide format logo',
        },
        {
          bgColor: '#000',
          theme: 'dark',
          logo: 'main',
          width: 100,
          text: 'Alternative Logo',
        },
      ],
    };
  },
};
</script>
<style scoped>
#versions-book .main-content {
  padding: 88px 0px 60px 98px;
  max-width: 760px;
}
@media screen and (max-width: 992px) {
  #versions-book .main-content {
    padding: 60px 20px 40px 80px;
    min-height: unset;
  }
}
@media screen and (max-width: 992px) {
  .group-img {
    padding-left: 60px;
  }
}
</style>
