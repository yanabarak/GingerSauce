<template>
  <div class="d-flex gap-3 align-items-center">
    <button class="btn third-btn">
      <svg class="icon icon-download2" width="16" height="14">
        <use href="@/assets/icons/symbol-defs.svg#icon-download2"></use>
      </svg>
      Download
    </button>
    <div class="add-info fs-14">JPG, PNG, AI, SVG, PDF</div>
  </div>
</template>
<style scoped>
.add-info {
  color: #797979;

  @media screen and (max-width: 992px) {
    font-size: 10px;
  }
}
</style>
