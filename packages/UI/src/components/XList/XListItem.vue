<template>
  <component
    :is="tag"
    :class="[
      'x-list-item',
      type ? `x-list-item_${type}` : '',
      active ? 'x-list-item_active' : '',
      disabled ? 'x-list-item_disabled' : '',
    ]"
    :to="to"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "XListItem",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    type: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String || Object,
      default: null,
    },
  },
};
</script>

<style lang="scss">
@import "XListItem";
</style>
