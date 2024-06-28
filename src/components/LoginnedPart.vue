<template>
  <div class="d-flex justify-content-between flex-grow-1 align-content-center">
    <div class="d-none d-xl-flex gap-2 flex-grow-0">
      <button class="btn main-btn">Remove watermark</button>
      <button class="btn third-btn">Download</button>
      <button class="btn sec-btn">Copy link</button>
    </div>

    <div class="d-flex gap-2 flex-grow-0 ms-auto">
      <CustomizePart />
      <div class="expir-date d-none d-md-flex flex-column align-self-center">
        <div class="title">Expiration date</div>
        <div class="date">29.10.2024</div>
      </div>
      <!-- <MyBrandbooks /> -->
      <SubMenu />
    </div>
  </div>
</template>
<script setup>
import CustomizePart from './CustomizePart.vue';
// import MyBrandbooks from './MyBrandbooks.vue';
import SubMenu from './SubMenu.vue';
</script>
<style scoped>
.expir-date .title {
  font-size: 10px;
  font-weight: calc(var(--secFontWeight) + 300);
  line-height: 1.1;
  text-align: left;
}
.expir-date .date {
  font-size: 18px;
  font-weight: calc(var(--secFontWeight) + 300);
  line-height: 1.1;
  text-align: left;
}
</style>
