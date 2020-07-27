<template>
  <component :is="'a'">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'XLink',
  props: {
    tag: {
      type: String,
      default: 'n-link',
    },
    to: {
      type: String || Object,
      default: '/',
    },
    append: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
      default: '_self',
    },
    rel: {
      type: String,
      default: null,
    },
    replace: {
      type: Boolean,
      default: false,
    },
    noPrefetch: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped></style>
