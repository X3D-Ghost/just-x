<template>
  <component :is="tag" class="x-header x-container_fluid">
    <div v-if="$slots.brand" class="x-header__brand">
      <slot name="brand"></slot>
    </div>
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'XHeader',
  props: {
    tag: {
      type: String,
      default: 'header',
    },
  },
}
</script>

<style lang="scss">
@import 'XHeader';
</style>
