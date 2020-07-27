<template>
  <form :action="action" class="x-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'XForm',
  props: {
    action: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss">
@import 'XForm';
</style>
