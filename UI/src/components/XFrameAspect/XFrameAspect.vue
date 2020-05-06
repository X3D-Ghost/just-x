<template>
  <component :is="tag" class="x-frame">
    <div
      class="x-frame__spacer"
      :style="[{ height: '0px' }, { 'padding-bottom': `${aspect}%` }]"
    ></div>
    <div class="x-frame__content">
      <slot></slot>
    </div>
  </component>
</template>

<script>
export default {
  name: 'XFrameAspect',
  props: {
    aspect: {
      type: Number || String,
      default: '1:1',
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
}
</script>

<style lang="scss">
@import 'XFrameAspect';
</style>
