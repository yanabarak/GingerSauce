<template>
  <aside :class="{ is_expanded }" class="sticky-xl-top flex-shrink-0">
    <div class="menu">
      <ul class="px-0">
        <!-- <li>
          <a href="#introduction-book" class="menu-item">
            <span class="menu-icon">
              <svg class="icon icon-menu-introduction" width="25" height="25">
                <use href="@/assets/icons/symbol-defs.svg#icon-menu-introduction"></use>
              </svg>
            </span>
            <span class="text">Introduction</span>
          </a>
        </li>

        <li>
          <a href="#vision-book" class="menu-item">
            <span class="menu-icon">
              <svg class="icon icon-menu-vision" width="25" height="25">
                <use href="@/assets/icons/symbol-defs.svg#icon-menu-vision"></use>
              </svg>
            </span>
            <span class="text">Vision</span>
          </a>
        </li>

        <li>
          <a href="#mision-book" class="menu-item">
            <span class="menu-icon">
              <svg class="icon icon-menu-mission" width="25" height="25">
                <use href="@/assets/icons/symbol-defs.svg#icon-menu-mission"></use>
              </svg>
            </span>
            <span class="text">Mission</span>
          </a>
        </li>

        <li>
          <a href="#values-book" class="menu-item">
            <span class="menu-icon">
              <svg class="icon icon-menu-values" width="25" height="25">
                <use href="@/assets/icons/symbol-defs.svg#icon-menu-values"></use>
              </svg>
            </span>
            <span class="text">Core Values</span>
          </a>
        </li>

        <li>
          <a href="#logo-book" class="menu-item">
            <span class="menu-icon">
              <svg class="icon icon-menu-archetype" width="25" height="25">
                <use href="@/assets/icons/symbol-defs.svg#icon-menu-archetype"></use>
              </svg>
            </span>
            <span class="text">Brand Archetype</span>
          </a>
        </li>

        <li>
          <a href="#versions-book" class="menu-item">
            <span class="menu-icon">
              <svg class="icon icon-menu-logo" width="25" height="25">
                <use href="@/assets/icons/symbol-defs.svg#icon-menu-logo"></use>
              </svg>
            </span>
            <span class="text">Our Logo</span>
          </a>
        </li>

        <li>
          <a href="#space-book" class="menu-item">
            <span class="menu-icon">
              <svg class="icon icon-menu-space" width="25" height="25">
                <use href="@/assets/icons/symbol-defs.svg#icon-menu-space"></use>
              </svg>
            </span>
            <span class="text">Clear Space</span>
          </a>
        </li>

        <li>
          <a href="#minimum-book" class="menu-item">
            <span class="menu-icon">
              <svg class="icon icon-menu-size" width="25" height="25">
                <use href="@/assets/icons/symbol-defs.svg#icon-menu-size"></use>
              </svg>
            </span>
            <span class="text">Minimum Size</span>
          </a>
        </li>

        <li>
          <a href="#misuse-book" class="menu-item">
            <span class="menu-icon">
              <svg class="icon icon-menu-misuse" width="25" height="25">
                <use href="@/assets/icons/symbol-defs.svg#icon-menu-misuse"></use>
              </svg>
            </span>
            <span class="text">Logo Misuse</span>
          </a>
        </li>

        <li>
          <a href="#icons-book" class="menu-item">
            <span class="menu-icon">
              <svg class="icon icon-menu-feature" width="25" height="25">
                <use href="@/assets/icons/symbol-defs.svg#icon-menu-feature"></use>
              </svg>
            </span>
            <span class="text">Feature Icons</span>
          </a>
        </li>

        <li>
          <a href="#palette-book" class="menu-item">
            <span class="menu-icon">
              <svg class="icon icon-menu-palette" width="25" height="25">
                <use href="@/assets/icons/symbol-defs.svg#icon-menu-palette"></use>
              </svg>
            </span>
            <span class="text">Color Palette</span>
          </a>
        </li>

        <li>
          <a href="#fonts-book" class="menu-item">
            <span class="menu-icon">
              <svg class="icon icon-menu-fonts" width="25" height="25">
                <use href="@/assets/icons/symbol-defs.svg#icon-menu-fonts"></use>
              </svg>
            </span>
            <span class="text">Our Fonts</span>
          </a>
        </li>

        <li>
          <a href="#designer-book" class="menu-item">
            <span class="menu-icon">
              <svg class="icon icon-menu-designer" width="25" height="25">
                <use href="@/assets/icons/symbol-defs.svg#icon-menu-designer"></use>
              </svg>
            </span>
            <span class="text">Brandbook designer</span>
          </a>
        </li> -->
        <li v-for="item in menuItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            :class="['menu-item', { active: activeSection === item.id }]"
            @click.prevent="handleClick(item.id)"
          >
            <span class="menu-icon">
              <svg :class="`icon icon-menu-${item.icon}`" width="25" height="25">
                <use :href="`/src/assets/icons/symbol-defs.svg#icon-menu-${item.icon}`"></use>
              </svg>
            </span>
            <span class="text">{{ item.text }}</span>
          </a>
        </li>
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
</template>

<script>
export default {
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
    };
  },
  props: { is_expanded: Boolean, activeSection: String },
  methods: {
    handleClick(id) {
      this.$emit('set-active-section', id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>
