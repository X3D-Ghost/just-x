<template>
  <component :is="tag" :class="['x-navbar']">
    <div class="x-navbar__brand">
      <a
        role="button"
        aria-label="menu"
        class="x-navbar__burger burger"
        @click="openMenu"
      >
        <span aria-hidden="true" class="burger__line"></span>
        <span aria-hidden="true" class="burger__line"></span>
        <span aria-hidden="true" class="burger__line"></span>
      </a>
      <div
        :class="['x-navbar__menu', isMenuShow ? 'x-navbar__menu_show' : '']"
      ></div>
    </div>
  </component>
</template>

<script>
export default {
  name: "XNavbar",
  props: {
    tag: {
      type: String,
      default: "nav",
    },
  },
  data() {
    return {
      isMenuShow: true,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuShow = !this.isMenuShow;
    },
  },
};
</script>

<style lang="scss">
@import "XNavbar";
</style>
