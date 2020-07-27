<template>
  <div :class="classList">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XCardGroup',
  props: {
    type: {
      type: String,
      default: null,
    },
  },
  computed: {
    classList() {
      const obj = ['x-card-group']
      if (this.type) obj.push(`x-card-group_${this.type}`)
      return obj
    },
  },
}
</script>

<style lang="scss">
@import 'XCardGroup';
</style>
