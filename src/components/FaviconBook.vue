<template>
  <section class="align-self-start col-12 section-book" id="favicon-book">
    <div class="content">
      <h1 class="mb-4">Our Icon & Favicon</h1>
      <p>
        The Guberman R should be used as the official Favicon only in Guberman Wine Red. The
        negative R should be used for social as user/company image such as Whatsapp, Facebook,
        LinkedIn etc'.
      </p>
      <div class="main-favicon-group">
        <div class="main-favicon" v-html="$store.state.faviconLogo"></div>
        <span class="fs-12 text-center mt-2 d-block">Main Icon</span>
      </div>
      <DownloadBtn />
    </div>

    <div class="favicon-group">
      <FaviconBlock
        v-for="(block, index) in faviconBlocks"
        :key="index"
        :bg-color="block.bgColor"
        :type="block.type"
        :text="block.text"
      />
    </div>
    <div class="content">
      <DownloadBtn />
    </div>
    <div class="bg">O</div>
  </section>
</template>
<script setup>
import DownloadBtn from './DownloadBtn.vue';
import FaviconBlock from './FaviconBlock.vue';
</script>

<script>
export default {
  data() {
    return {
      faviconBlocks: [
        {
          bgColor: 'var(--theme-color)',
          type: 'square',
          text: 'Primary Negative in Square',
        },
        {
          bgColor: 'var(--theme-color)',
          type: 'circle',
          text: 'Primary Negative in Circle',
        },
        {
          bgColor: 'var(--sec-color)',
          type: 'square',
          text: 'Secondary Negative in Square',
        },
        {
          bgColor: 'var(--sec-color)',
          type: 'circle',
          text: 'Secondary Negative in Circle',
        },
      ],
    };
  },
};
</script>
<style>
#favicon-book {
  padding-top: 350px;
  min-height: 120vh;
}
#favicon-book .main-favicon-group {
  margin-top: 200px;
  margin-left: 77px;
  margin-bottom: 50px;
  width: fit-content;
}
#favicon-book .main-favicon {
  width: 150px;
  height: 155px;
  margin: 0 auto;
}
#favicon-book .main-favicon svg,
#favicon-book .main-favicon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
#favicon-book .favicon-group {
  margin-left: 80px;
  margin-top: 156px;
  margin-bottom: 70px;
  display: grid;
  grid-template-columns: 200px 200px;
  gap: 170px;
}
#favicon-book .bg {
  font-size: 932px;
  left: -150px;
  bottom: auto;
  top: 90px;
}

@media screen and (max-width: 992px) {
  #favicon-book {
    padding-top: 120px;
    min-height: 120vh;
  }
  #favicon-book .bg {
    font-size: 732px;
    left: -150px;
    bottom: auto;
    top: 0px;
  }
  #favicon-book .favicon-group {
    margin-left: 0px;
    margin-top: 60px;
    margin-bottom: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px 20px;
  }
}
</style>
