<template>
  <div
    class="modal fade"
    id="customizeModal"
    tabindex="-1"
    aria-labelledby="customizeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg modal-1000">
      <div class="modal-content">
        <div class="modal-header position-relative pt-40 pb-4">
          <h1 class="modal-title fs-32 fw-bold text-center sec-font mx-auto" id="exampleModalLabel">
            Customize Brand Book
          </h1>
          <button
            type="button"
            class="btn-close position-absolute"
            data-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row block-divide">
              <div class="col-12 col-xl-6 mb-4 mb-xl-0">
                <div class="row">
                  <div class="col fs-14">
                    <b>This is a draft book.</b><br />
                    Make it official by removing the watermark. This will also ensure your book
                    stays online.

                    <!-- !!! THIS COMMENTED PART USES IF BOOK IS OFFICIAL -->
                    <!-- 
                    <svg class="icon icon-official" width="36" height="52">
                      <use href="@/assets/icons/symbol-defs.svg#icon-official"></use>
                    </svg> -->
                    <!-- !!! THIS COMMENTED PART USES IF BOOK IS OFFICIAL -->
                  </div>
                  <div class="col-auto">
                    <div class="date d-flex flex-column fs-14 text-right align-items-end">
                      Expiration date
                      <div class="date fs-4 fw-bold lh-1">29.10.2024</div>
                    </div>
                  </div>
                  <div class="col-12 mt-2">
                    <button class="btn main-btn">Remove watermark</button>

                    <!-- !!! THIS COMMENTED PART USES IF BOOK IS OFFICIAL -->
                    <!-- <div class="col fs-14">
                      <b>This is an official book.</b><br />
                      The book’s expiration date will extend automatically at the end of the period
                      & you will be billed automatically.
                    </div> -->
                    <!-- !!! THIS COMMENTED PART USES IF BOOK IS OFFICIAL -->
                  </div>
                </div>
              </div>

              <div class="col-12 col-xl-6 sec-block-divide">
                <div class="col row pb-3">
                  <div class="col fs-14 flex-column">
                    <b>Edit Book contents</b>
                    <p class="m-0">Add, edit or delete titles, texts and images.</p>
                  </div>
                  <div class="col-auto">
                    <button class="btn sec-btn">
                      <svg class="icon icon-edit2" width="17" height="17">
                        <use href="@/assets/icons/symbol-defs.svg#icon-edit2"></use>
                      </svg>
                      Edit book
                    </button>
                  </div>
                </div>
                <div class="col row pt-3">
                  <div class="col fs-14 flex-column">
                    <b>Edit Brand elements</b>
                    <p class="m-0">Restart wizard to modify your inputs.</p>
                  </div>
                  <div class="col-auto align-self-end">
                    <button class="btn sec-btn">
                      <svg class="icon icon-generate" width="17" height="17">
                        <use href="@/assets/icons/symbol-defs.svg#icon-generate"></use>
                      </svg>
                      Regenerate book
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row changeable py-3">
              <div class="col border-end pe-0">
                <p class="fs-14 col-12 mb-3 fw-bold">Customize fonts</p>
                <div class="col-12 row mb-4">
                  <p class="d-flex gap-1 align-items-center col-12 col-md m-0 mb-2 mb-md-0">
                    <svg class="icon icon-title-font" width="20" height="17">
                      <use href="@/assets/icons/symbol-defs.svg#icon-title-font"></use>
                    </svg>
                    Change Title font:
                  </p>
                  <div class="col-auto">
                    <FontSelector fontType="main" style="min-width: 200px"></FontSelector>
                  </div>
                  <div class="col-auto p-0">
                    <FontWeightSelector
                      fontWeightType="main"
                      style="min-width: 130px"
                    ></FontWeightSelector>
                  </div>
                </div>

                <div class="col-12 row">
                  <p class="d-flex gap-1 align-items-center col-12 col-md m-0 mb-2 mb-md-0">
                    <svg class="icon icon-body-font" width="20" height="17">
                      <use href="@/assets/icons/symbol-defs.svg#icon-body-font"></use>
                    </svg>
                    Change body font:
                  </p>
                  <div class="col-auto">
                    <FontSelector fontType="secondary" style="min-width: 200px"></FontSelector>
                  </div>
                  <div class="col-auto p-0">
                    <FontWeightSelector
                      fontWeightType="secondary"
                      style="min-width: 130px"
                    ></FontWeightSelector>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-xl-auto mt-4 mt-xl-0">
                <p class="fs-14 col-12 mb-3 fw-bold">Change theme color</p>
                <div class="col d-flex gap-4 p-0">
                  <svg class="icon icon-change flex-shrink-0" width="121" height="85">
                    <use href="@/assets/icons/symbol-defs.svg#icon-change"></use>
                  </svg>
                  <ThemeColor />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0 justify-content-center py-4 mb-2">
          <button
            class="btn main-btn px-5"
            aria-label="Close"
            @click="saveChanges"
            data-dismiss="modal"
          >
            Apply changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ThemeColor from './ThemeColor.vue';
import FontSelector from './FontSelector.vue';
import FontWeightSelector from './FontWeightSelector.vue';
import updateCSSVariablesSaveBtn from '../js/updateModal';
</script>
<script>
export default {
  methods: {
    saveChanges() {
      updateCSSVariablesSaveBtn(
        this.$store.state.mainColorBook,
        this.$store.state.mainFont,
        this.$store.state.secFont,
        this.$store.state.mainFontWeight,
        this.$store.state.secFontWeight
      );
    },
  },
};
</script>
