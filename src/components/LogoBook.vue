<template>
  <section class="align-self-start col-12 section-book" id="logo-book">
    <div class="content">
      <h1 class="mb-4">Our Logo</h1>
      <p>
        We are very proud of our logo, and we require that you follow these guidelines to ensure it
        always looks its best.
      </p>
      <div class="logo-group">
        <div v-html="$store.state.mainLogo"></div>
        <p class="mt-4 fs-12 mb-0 text-center">Masterbrand logo & slogan</p>
      </div>
      <DownloadBtn />
    </div>
    <div class="bg-img left-0 top-0">
      <svg
        width="455"
        height="317"
        viewBox="0 0 455 317"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.460148 313.492C122.577 119.306 302.32 20.9837 409.782 0.906004C422.403 -1.45197 447.291 0.877602 453.22 32.6117C460.183 69.8778 435.057 90.5624 422.436 92.9204C334.797 109.294 184.136 173.676 70.091 316.194C47.3123 315.294 24.0284 314.392 0.460148 313.492Z"
        />
      </svg>
    </div>
  </section>
</template>
<script setup>
import DownloadBtn from './DownloadBtn.vue';
</script>
<style>
#logo-book .logo-group {
  margin: 105px 0 25px;
  width: fit-content;
  @media screen and (max-width: 992px) {
    margin: 50px 0 25px;
  }
}
#logo-book .logo_full {
  height: 89px;
  max-width: 360px;
  @media screen and (max-width: 992px) {
    max-width: 100%;
  }
}
</style>
