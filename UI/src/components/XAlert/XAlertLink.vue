<template>
  <component :is="tag">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'XAlertLink',
  props: {
    tag: {
      type: String,
      default: 'a',
    },
    to: {
      type: String,
      default: '',
    },
  },
  created() {
    // console.log('this')
  },
}
</script>

<style lang="scss">
@import 'XAlert';
</style>
