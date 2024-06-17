<template>
  <div
    class="modal fade"
    id="headingModalEdit"
    tabindex="-1"
    aria-labelledby="headingModalEdit"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg modal-1000">
      <div class="modal-content">
        <div class="modal-header position-relative border-0">
          <h1 class="modal-title fs-32 fw-bold text-center sec-font mx-auto" id="headingModalEdit">
            Add Heading
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
            <input
              type="text"
              v-model="headerText"
              class="form-control form-control-lg border-dark text-dark fw-500"
            />
          </div>
        </div>
        <div class="modal-footer border-0 justify-content-center py-4 mb-2 gap-2">
          <button
            class="btn sec-btn px-5 col-3 justify-content-center"
            aria-label="Close"
            data-dismiss="modal"
          >
            Cancel
          </button>
          <button
            class="btn main-btn px-5 col-3 justify-content-center"
            aria-label="Close"
            data-dismiss="modal"
            @click="saveChanges"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from './../../eventBus.js';

export default {
  data() {
    return {
      headerText: '',
      currentElement: null,
      currentWrapper: null,
    };
  },
  created() {
    EventBus.$on('openModal', ({ element, wrapper, text }) => {
      this.currentElement = element;
      this.currentWrapper = wrapper;
      this.headerText = text;
      $('#headingModalEdit').modal('show');
    });
  },
  methods: {
    saveChanges() {
      if (this.currentElement) {
        this.currentElement.textContent = this.headerText;
      }
      $('#headingModalEdit').modal('hide');
    },
  },
};
</script>

<style>
/* Add any additional styling for the modal here */
</style>
