<template>
  <div role="alert" aria-live="polite" aria-atomic="true" :class="classList">
    <div class="x-alert__wrapper">
      <span class="icon mdi-icon"></span>
      <slot></slot>
      <span
        v-if="dismissible"
        class="x-alert__button_close"
        @click="dismiss"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XAlert',
  props: {
    type: {
      type: String,
      default: null,
    },
    show: {
      type: Boolean,
      default: false,
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    tile: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
  },
  computed: {
    classList() {
      const baseClassName = 'x-alert'
      const obj = [baseClassName]
      if (this.type) obj.push(`${baseClassName}_${this.type}`)
      if (this.outlined) obj.push(`${baseClassName}_outlined`)
      if (this.text) obj.push(`${baseClassName}_text`)
      if (this.tile) obj.push(`${baseClassName}_tile`)
      return obj
    },
  },
  methods: {
    dismiss() {
      this.$set(this, 'show', false)
    },
  },
}
</script>

<style lang="scss">
@import 'XAlert';
</style>
