<template>
  <section class="align-self-start col-12 section-book" id="palette-book">
    <div class="content">
      <h1 class="mb-4">Our Color Palette</h1>
      <p>
        The colors selected for the Guberman signature reflect the company's values.<br />
        The colors have been specifically chosen to represent the brand and should not be altered
        under any circumstance.<br />
        For Printing instances, a Rich Black should be used for text with C40 M10 Y0 K100.
      </p>
    </div>
    <div class="palette-group d-flex flex-wrap">
      <PaletteElementTertiary class="align-self-end mb-3 position-absolute z-1" />
      <PaletteElementMain class="ms-0 ms-md-5" />
      <PaletteElementSecond class="align-self-end mb-5" />
    </div>
    <div class="col-10">
      <p>
        Instead of the colors referred to on this page, you may use the PANTONE® colors listed
        above, the standards for which can be found in the current edition of the PANTONE COLOR
        FORMULA GUIDE. The colors shown on this page and throughout this guideline have not been
        evaluated by PANTONE, Inc. for accuracy and may not match the PANTONE color standards.
        PANTONE® is a registered trademark of PANTONE, Inc.
      </p>
    </div>
    <div class="pantone-group d-flex flex-wrap">
      <SimplePantone />
      <AddPantone />
    </div>
  </section>
</template>
<script setup>
import PaletteElementMain from './PaletteElementMain.vue';
import PaletteElementSecond from './PaletteElementSecond.vue';
import PaletteElementTertiary from './PaletteElementTertiary.vue';
import SimplePantone from './SimplePantone.vue';
import AddPantone from './AddPantone.vue';
</script>

<style>
.palette-group {
  margin-top: 100px;
  margin-bottom: 60px;
}
.pantone-group {
  margin-top: 60px;
  gap: 84px 46px;
  max-width: 900px;
  margin-bottom: 160px;
}

@media screen and (max-width: 1200px) {
  #tertiary-color {
    transform: translateY(-200px);
  }
}
@media screen and (max-width: 992px) {
  .palette-group {
    position: relative;
  }
  #tertiary-color {
    left: 50vw;
    transform: translateX(-100%);
    bottom: -70px;
  }
  .pantone-group {
    justify-content: center;
    margin-bottom: 0px;
  }
}

@media screen and (max-width: 768px) {
  #tertiary-color {
    bottom: calc(50vw - 90px);
    left: -20px;
    transform: none;
  }
}
</style>
