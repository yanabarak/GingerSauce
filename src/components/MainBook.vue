<template>
  <div class="d-flex flex-column flex-grow-1">
    <TitleBook id="title-book" />
    <SectionAdd />
    <IntroductionBook id="introduction-book" v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          rootMargin: '-100px 0px 0px 0px',
          threshold: 0.1
        }
      }" />
    <VisionBook id="vision-book" v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          rootMargin: '-100px 0px 0px 0px',
          threshold: 0.1
        }
      }" />
    <MisionBook id="mision-book" v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          rootMargin: '-100px 0px 0px 0px',
          threshold: 0.1
        }
      }" />
    <ValuesBook id="values-book" v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          rootMargin: '-100px 0px 0px 0px',
          threshold: 0.1
        }
      }" />
    <LogoBook id="logo-book" v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          rootMargin: '-100px 0px 0px 0px',
          threshold: 0.1
        }
      }" />
    <VersionsBook id="versions-book" v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          rootMargin: '-100px 0px 0px 0px',
          threshold: 0.1
        }
      }" />
    <FaviconBook id="favicon-book" />
    <ProportionsBook id="proportions-book" />
    <SpaceBook id="space-book" v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          rootMargin: '-100px 0px 0px 0px',
          threshold: 0.1
        }
      }" />
    <MinimumBook id="minimum-book" v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          rootMargin: '-100px 0px 0px 0px',
          threshold: 0.1
        }
      }" />
    <MisuseBook id="misuse-book" v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          rootMargin: '-100px 0px 0px 0px',
          threshold: 0.1
        }
      }" />
    <IconsBook id="icons-book" v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          rootMargin: '-100px 0px 0px 0px',
          threshold: 0.1
        }
      }" />
    <PaletteBook id="palette-book" v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          rootMargin: '-100px 0px 0px 0px',
          threshold: 0.1
        }
      }" />
    <FontsBook id="fonts-book" v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          rootMargin: '-100px 0px 0px 0px',
          threshold: 0.1
        }
      }" />
    <BrandDesigner id="designer-book" v-observe-visibility="{
        callback: visibilityChanged,
        intersection: {
          rootMargin: '-100px 0px 0px 0px',
          threshold: 0.1
        }
      }" />
  </div>
</template>
<script setup>
import TitleBook from './TitleBook.vue';
import IntroductionBook from './IntroductionBook.vue';
import VisionBook from './VisionBook.vue';
import MisionBook from './MisionBook.vue';
import ValuesBook from './ValuesBook.vue';
import LogoBook from './LogoBook.vue';
import VersionsBook from './VersionsBook.vue';
import FaviconBook from './FaviconBook.vue';
import ProportionsBook from './ProportionsBook.vue';
import SpaceBook from './SpaceBook.vue';
import MinimumBook from './MinimumBook.vue';
import MisuseBook from './MisuseBook.vue';
import IconsBook from './IconsBook.vue';
import PaletteBook from './PaletteBook.vue';
import FontsBook from './FontsBook.vue';
import BrandDesigner from './BrandDesigner.vue';

import SectionAdd from './SectionAdd.vue';
</script>

<script>
export default {
  methods: {
    visibilityChanged(isVisible, entry) {
      console.log(entry);
      this.isVisible = isVisible;
      if (isVisible) {
        this.$emit('set-active-section', entry.target.id);
      }
    },
  },
};
</script>
