<template>
  <component
    :is="tag"
    :to="to"
    :class="['x-badge', `x-badge_${type}`, rounded ? `x-badge_rounded` : '']"
    :title="title"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'XBadge',
  props: {
    type: {
      type: String,
      default: 'secondary',
    },
    title: {
      type: String,
      default: null,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: null,
    },
    tag: {
      type: String,
      default: this.to ? 'span' : 'nuxt-link',
    },
  },
}
</script>

<style lang="scss">
@import 'XBadge.scss';
</style>
