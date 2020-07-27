<template>
  <component :is="tag" class="x-footer">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'XFooter',
  props: {
    tag: {
      type: String,
      default: 'footer',
    },
  },
}
</script>

<style lang="scss">
@import 'XFooter';
</style>
