<template>
  <component :is="`h${level}`" :class="['x-heading', `x-heading_${level}`]">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'XHeading',
  props: {
    level: {
      type: String || Number,
      default: 1,
      max: 6,
    },
    type: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.x-heading {
  &_1 {
    font-size: 3rem;
    margin: 3rem 0 1.5rem;
  }
  &_2 {
    font-size: 2.5rem;
    margin: 3rem 0 1.5rem;
  }
  &_3 {
    font-size: 1.875rem;
    margin: 3rem 0 1.5rem;
  }
  &_4 {
    font-size: 1.375rem;
    margin: 2.5rem 0 1rem;
  }
  &_5 {
    font-size: 1.125rem;
    margin: 2.5rem 0 1rem;
  }
  & + .x-heading {
    margin-top: 0;
  }
}
</style>
