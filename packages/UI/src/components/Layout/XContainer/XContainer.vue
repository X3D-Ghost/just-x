<template>
  <component
    :is="tag"
    :class="[
      'x-container',
      full && typeof full === 'boolean'
        ? 'x-container_full'
        : typeof full === 'string'
        ? `x-container_full_${full}`
        : '',
    ]"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'XContainer',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    full: {
      type: String || Boolean,
      default: null,
    },
  },
}
</script>

<style lang="scss">
@import 'XContainer';
</style>
