<template>
  <div class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle d-flex align-items-center py-0 pe-0 fw-bold"
      href="#"
      id="navbarDropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <RoundedImage style="width: 34px; height: 34px" />
      <span class="ms-3 me-1">Josh Bloch</span>
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
    </ul>
  </div>
</template>
<script setup>
import RoundedImage from './RoundedImage.vue';
</script>
<style scoped>
.dropdown:before {
  content: '';
  display: block;
  height: calc(100% + 10px);
  width: 1px;
  background-color: #dadada;
  position: absolute;
  left: 0px;
  top: -5px;
  bottom: -5px;
}
.nav-link {
  color: #000 !important;
}
</style>
