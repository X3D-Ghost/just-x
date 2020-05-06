<template>
  <component
    :is="tag"
    :class="[
      'x-list-item',
      type ? `x-list-item_${type}` : '',
      active ? 'x-list-item_active' : '',
      disabled ? 'x-list-item_disabled' : '',
    ]"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'XListItem',
  props: {
    tag: {
      type: String,
      default: 'div',
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
  },
}
</script>

<style lang="scss">
@import 'XListItem';
</style>
