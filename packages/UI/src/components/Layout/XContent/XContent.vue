<template>
  <component :is="tag" class="x-content">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'XContent',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
}
</script>

<style lang="scss">
@import 'XContent';
</style>
