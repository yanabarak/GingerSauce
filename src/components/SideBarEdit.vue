<template>
  <div>
    <aside :class="{ is_expanded }" class="sticky-xl-top flex-shrink-0">
      <div class="menu drag-menu">
        <ul class="px-0">
          <draggable v-model="menuItems" handle=".icon-move">
            <li v-for="item in menuItems" :key="item.id" class="d-flex">
              <span class="icon-move d-flex align-items-center me-1">
                <svg class="icon icon-move" width="11" height="11">
                  <use href="/src/assets/icons/symbol-defs.svg#icon-move"></use>
                </svg>
              </span>
              <a
                :href="`#${item.id}`"
                :class="['menu-item flex-grow-1', { active: activeSection === item.id }]"
                @click.prevent="handleClick(item.id)"
              >
                <span class="menu-icon" v-if="typeof item.icon == 'string'">
                  <svg :class="`icon icon-menu-${item.icon}`" width="25" height="25">
                    <use :href="`/src/assets/icons/symbol-defs.svg#icon-menu-${item.icon}`"></use>
                  </svg>
                </span>
                <span class="menu-icon" v-else>
                  <img :src="item.icon.src" width="18" />
                </span>
                <span class="text">{{ item.text }}</span>
              </a>
              <span
                class="icon-delete d-flex align-items-center ms-auto"
                @click="removeItem(item.id)"
              >
                <svg class="icon icon-delete" width="18" height="18">
                  <use href="/src/assets/icons/symbol-defs.svg#icon-delete"></use>
                </svg>
              </span>
            </li>
            <li class="d-flex add-item">
              <span
                class="menu-icon d-flex align-items-center"
                data-toggle="modal"
                data-target="#imageModal"
              >
                <svg class="icon icon-plus" width="16" height="16" id="new-section-image">
                  <use href="/src/assets/icons/symbol-defs.svg#icon-plus"></use>
                </svg>
              </span>
              <input
                type="text"
                name="new-item"
                :class="{ error: inputError }"
                v-model="newItemText"
                placeholder="Add item"
                @input="removeError"
                @keydown.enter.prevent="addItem"
              />
              <span class="d-flex align-items-center ms-2 menu-icon" @click="addItem">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="16"
                  height="16"
                >
                  <path
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
              </span>
            </li>
          </draggable>
        </ul>
      </div>

      <div class="powered mt-auto d-flex justify-content-center align-items-center">
        <svg class="icon icon-gingersauce_square" width="8" height="8">
          <use href="@/assets/icons/symbol-defs.svg#icon-gingersauce_square"></use>
        </svg>
        Powered by gingersauce
      </div>
      <div class="footer menu">
        <ul class="m-0">
          <li>
            <a href="#" class="menu-item">
              <span class="menu-icon">
                <svg class="icon icon-menu-help" width="25" height="25">
                  <use href="@/assets/icons/symbol-defs.svg#icon-menu-help"></use>
                </svg>
              </span>
              <span class="text">Help</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <AddIconModal @save-image="handleSaveImage" />
  </div>
</template>
<script setup>
import AddIconModal from './AddIconModal.vue';
</script>
<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  data() {
    return {
      menuItems: [
        { id: 'introduction-book', text: 'Introduction', icon: 'introduction' },
        { id: 'vision-book', text: 'Vision', icon: 'vision' },
        { id: 'mision-book', text: 'Mission', icon: 'mission' },
        { id: 'values-book', text: 'Core Values', icon: 'values' },
        { id: 'logo-book', text: 'Brand Archetype', icon: 'archetype' },
        { id: 'versions-book', text: 'Our Logo', icon: 'logo' },
        { id: 'space-book', text: 'Clear Space', icon: 'space' },
        { id: 'minimum-book', text: 'Minimum Size', icon: 'size' },
        { id: 'misuse-book', text: 'Logo Misuse', icon: 'misuse' },
        { id: 'icons-book', text: 'Feature Icons', icon: 'feature' },
        { id: 'palette-book', text: 'Color Palette', icon: 'palette' },
        { id: 'fonts-book', text: 'Our Fonts', icon: 'fonts' },
        { id: 'designer-book', text: 'Brand Designer', icon: 'designer' },
      ],
      newItemImg: '',
      newItemText: '',
      inputError: false,
    };
  },
  props: { is_expanded: Boolean, activeSection: String },
  computed: {
    isTextIcon() {
      return typeof this.item.icon === 'string' && !this.item.icon.includes('<');
    },
  },
  methods: {
    handleClick(id) {
      this.$emit('set-active-section', id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    removeItem(id) {
      this.menuItems = this.menuItems.filter(item => item.id !== id);
    },
    addItem() {
      if (this.newItemText.trim()) {
        const newItem = {
          id: this.newItemText.toLowerCase().replace(/ /g, '-'),
          text: this.newItemText,
          icon: this.newItemImg,
        };
        this.menuItems.push(newItem);
        this.newItemText = ''; // Clear the input field after adding the item
        this.newItemImg = '';
        this.inputError = false; // Remove error state
        this.handleSaveImage('null');
      } else {
        this.inputError = true; // Set error state
      }
    },
    removeError() {
      this.inputError = false;
    },
    handleSaveImage(imagePaste) {
      var newImg = document.createElement('img');
      if (!imagePaste.src) {
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        svgElement.setAttribute('class', 'icon icon-plus');
        svgElement.setAttribute('width', '16');
        svgElement.setAttribute('height', '16');
        svgElement.setAttribute('id', 'new-section-image');
        const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        useElement.setAttributeNS(
          'http://www.w3.org/1999/xlink',
          'href',
          '/src/assets/icons/symbol-defs.svg#icon-plus'
        );
        svgElement.appendChild(useElement);
        newImg = svgElement;
      } else {
        newImg.src = imagePaste.src;
        newImg.classList.add('new-image');
        newImg.classList.add('mb-2');
        newImg.classList.add('editable-content');
        newImg.id = 'new-section-image';
        newImg.setAttribute('width', '16');
      }
      this.newItemImg = newImg;
      document.getElementById('new-section-image').replaceWith(newImg);
    },
  },
};
</script>
