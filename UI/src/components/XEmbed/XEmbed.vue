<template>
  <div class="x-embed">
    <component :is="type" class="x-embed__item">
      <slot></slot>
    </component>
  </div>
</template>

<script>
export default {
  name: 'XEmbed',
  props: {
    aspect: {
      type: Number || String,
      default: 16 / 9,
    },
    tag: {
      type: String,
      default: 'div',
    },
    type: {
      type: String,
      default: 'iframe',
    },
  },
}
</script>

<style lang="scss">
@import 'XEmbed';
</style>
