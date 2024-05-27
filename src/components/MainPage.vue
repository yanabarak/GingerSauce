<template>
  <div>
    <MainHeader @clicked="onClickChild" />
    <div class="container-fluid px-0">
      <div class="wrapper d-flex align-items-stretch flex-column flex-md-row">
        <MainSidebar
          :is_expanded="is_expanded"
          :active-section="activeSection"
          @set-active-section="setActiveSection"
        />
        <MainBook @set-active-section="setActiveSection" />
      </div>
    </div>
    <CustomizeModal />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import MainSidebar from './MainSidebar.vue';
import MainHeader from './MainHeader.vue';
import CustomizeModal from './CustomizeModal.vue';

import MainBook from './MainBook.vue';
</script>
<script>
const is_expanded = ref(localStorage.getItem('is_expanded') === 'false');
export default {
  data() {
    return {
      activeSection: '',
    };
  },
  methods: {
    setActiveSection(id) {
      if (id) {
        let res = [
          'introduction-book',
          'vision-book',
          'mision-book',
          'values-book',
          'logo-book',
          'versions-book',
          'space-book',
          'minimum-book',
          'misuse-book',
          'icons-book',
          'palette-book',
          'fonts-book',
          'designer-book',
        ].find(element => element == id);
        if (res != undefined) {
          this.activeSection = id;
        }
      }
    },
    onClickChild() {
      is_expanded.value = !is_expanded.value;
      localStorage.setItem('is_expanded', is_expanded.value);
    },
  },
};
</script>
