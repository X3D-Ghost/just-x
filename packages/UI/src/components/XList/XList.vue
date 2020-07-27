<template>
  <component :is="tag" class="x-list">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'XList',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    type: {
      type: String,
      default: 'default',
    },
    horizontal: {
      type: Boolean || String || Object,
      default: false,
    },
  },
  computed: {
    classes() {
      const obj = []
      if (this.type) obj.push(`x-list_${this.type}`)
      if (this.horizontal) {
        typeof this.horizontal === 'boolean'
          ? obj.push(`x-list_horizontal`)
          : obj.push(`${this.type}:x-list_horizontal`)
      }
      return obj
    },
  },
}
</script>

<style lang="scss">
@import 'XList';
</style>
