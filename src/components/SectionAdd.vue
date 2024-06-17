<template>
  <div>
    <section class="align-self-start col-12 section-book" id="section-new">
      <div class="content">
        <div
          class="add-line"
          @mouseenter="handleMouseEnter('addIcon')"
          @mouseleave="handleMouseLeave('addIcon')"
        >
          <div
            class="add-icon"
            type="button"
            data-toggle="dropdown"
            aria-expanded="false"
            ref="addIcon"
          >
            <svg class="icon icon-plus" width="16" height="16">
              <use href="/src/assets/icons/symbol-defs.svg#icon-plus"></use>
            </svg>
          </div>

          <div
            class="dropdown-menu block-add dropdown-menu-center"
            :class="{ show: isDropdownVisible }"
            @mouseenter="handleMouseEnter('dropdown')"
            @mouseleave="handleMouseLeave('dropdown')"
            ref="dropdownMenu"
          >
            <a class="dropdown-item" type="button" data-toggle="modal" data-target="#headingModal">
              <svg class="icon icon-heading" width="42" height="42">
                <use href="/src/assets/icons/symbol-defs.svg#icon-heading"></use>
              </svg>
              <span>Heading</span>
            </a>
            <a class="dropdown-item" type="button" data-toggle="modal" data-target="#textModal">
              <svg class="icon icon-text-editor" width="42" height="42">
                <use href="/src/assets/icons/symbol-defs.svg#icon-text-editor"></use>
              </svg>
              <span>Text Editor</span></a
            >
            <a class="dropdown-item" type="button" data-toggle="modal" data-target="#imageModal">
              <svg class="icon icon-image" width="42" height="42">
                <use href="/src/assets/icons/symbol-defs.svg#icon-image"></use>
              </svg>
              <span>Image</span></a
            >
          </div>
        </div>
      </div>
    </section>
    <HeadingModal @save-header="handleSaveHeader" />
    <TextModal @save-text="handleSaveText" />
    <ImageModal @save-image="handleSaveImage" />
  </div>
</template>
<script setup>
import HeadingModal from './AddSection/HeadingModal.vue';
import TextModal from './AddSection/TextModal.vue';
import ImageModal from './AddSection/ImageModal.vue';
</script>
<script>
export default {
  data() {
    return {
      isDropdownVisible: false,
      hoverAddIcon: false,
      hoverDropdown: false,
    };
  },
  methods: {
    handleMouseEnter(element) {
      if (element === 'addIcon') {
        this.hoverAddIcon = true;
      } else if (element === 'dropdown') {
        this.hoverDropdown = true;
      }
      this.updateDropdownVisibility();
    },
    handleMouseLeave(element) {
      if (element === 'addIcon') {
        this.hoverAddIcon = false;
      } else if (element === 'dropdown') {
        this.hoverDropdown = false;
      }
      this.isDropdownVisible = this.hoverAddIcon || this.hoverDropdown;
    },
    updateDropdownVisibility() {
      this.$refs.addIcon.click();
    },
    handleSaveHeader(headerText) {
      const addLine = this.$refs.addIcon.closest('.add-line');
      const newHeader = document.createElement('h1');
      newHeader.classList.add('mb-4');
      newHeader.classList.add('editable-content');
      newHeader.textContent = headerText; // or your dynamic headerText variable
      addLine.parentNode.insertBefore(newHeader, addLine);

      // Apply the directive logic to the new element
      this.$applyEditableContent(newHeader);
    },

    handleSaveText(simpleText) {
      console.log(simpleText);
      const addLine = this.$refs.addIcon.closest('.add-line');
      const newText = document.createElement('div');
      newText.classList.add('mb-2');
      newText.classList.add('editable-content');
      newText.innerHTML = simpleText;
      addLine.parentNode.insertBefore(newText, addLine);
    },

    handleSaveImage(imagePaste) {
      const addLine = this.$refs.addIcon.closest('.add-line');
      const newImg = document.createElement('img');
      newImg.src = imagePaste.src;
      newImg.classList.add('new-image');
      newImg.classList.add('mb-2');
      newImg.classList.add('editable-content');
      newImg.style.cssText = `width: ${imagePaste.width}px`;
      addLine.parentNode.insertBefore(newImg, addLine);
    },
  },
};
</script>
