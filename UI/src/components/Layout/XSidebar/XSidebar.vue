<template>
  <component :is="tag" class="x-sidebar">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'XSidebar',
  props: {
    tag: {
      type: String,
      default: 'aside',
    },
  },
}
</script>

<style lang="scss">
@import 'XSidebar';
</style>
