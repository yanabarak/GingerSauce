<template>
  <nav class="navbar navbar-expand-md fixed-top bg-white border-bottom">
    <div class="container-fluid">
      <div :class="`${is_expanded ? 'is_expanded logo' : 'logo'}`">
        <div v-html="$store.state.mainLogo"></div>
        <div v-html="$store.state.faviconLogo"></div>
      </div>
      <div class="menu-toggle-wrap ms-4 d-flex align-content-center">
        <button
          class="menu-toggle border-0 p-0 bg-transparent d-flex align-self-center"
          @click="onClickButton"
        >
          <svg class="icon icon-hamburger" width="20" height="20">
            <use href="@/assets/icons/symbol-defs.svg#icon-hamburger"></use>
          </svg>
        </button>
      </div>
      <div class="d-none d-lg-flex align-content-center flex-grow-1 justify-content-between ms-40">
        <div class="name fs-20 fw-500 align-self-center me-3">Guberman Brand Book</div>
        <!-- <LoginPart /> -->
        <LoginnedPart />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
// import LoginPart from './LoginPart.vue';
import LoginnedPart from './LoginnedPart.vue';
</script>
<script>
const is_expanded = ref(localStorage.getItem('is_expanded') === 'false');
export default {
  methods: {
    onClickButton() {
      is_expanded.value = !is_expanded.value;
      localStorage.setItem('is_expanded', is_expanded.value);
      this.$emit('clicked', 'is_expanded');
    },
  },
};
</script>
