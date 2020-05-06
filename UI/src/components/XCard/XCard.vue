<template>
  <div class="x-card">
    <component
      :is="headerTag"
      :class="[
        'x-card__header',
        `x-card__header_${headerType}`,
        `x-card__header_text_${headerTextType}`,
      ]"
    >
      <slot name="header">
        {{ header }}
      </slot>
    </component>
    <div :class="bodyClasses">
      <h4 v-if="title">{{ title }}</h4>
      <h6 v-if="subTitle">{{ subTitle }}</h6>
      <slot></slot>
    </div>
    <component
      :is="footerTag"
      :class="[
        'x-card__footer',
        `x-card__footer_${footerType}`,
        `x-card__footer_text_${footerTextType}`,
      ]"
    >
      <slot name="footer">
        {{ footer }}
      </slot>
    </component>
  </div>
</template>

<script>
export default {
  name: 'XCard',
  props: {
    header: {
      default: null,
      type: String,
    },
    headerTag: {
      type: String,
      default: 'div',
    },
    headerType: {
      type: String,
      default: null,
    },
    headerTextType: {
      type: String,
      default: null,
    },
    footer: {
      type: String,
      default: null,
    },
    footerTag: {
      type: String,
      default: 'div',
    },
    footerType: {
      type: String,
      default: null,
    },
    footerTextType: {
      type: String,
      default: null,
    },
    imgSrc: {
      default: null,
      type: String,
    },
    title: {
      default: null,
      type: String,
    },
    subTitle: {
      default: null,
      type: String,
    },
    overlay: {
      type: Boolean,
      default: false,
    },
    bgType: {
      type: String,
      default: null,
    },
    textType: {
      type: String,
      default: null,
    },
  },
  computed: {
    bodyClasses() {
      const obj = ['x-card__content']
      if (this.overlay) obj.push('x-card__content_overlay')
      if (this.bgType) obj.push(`x-card_bg_${this.bgType}`)
      if (this.textType) obj.push(`x-card_text_${this.textType}`)
      return obj
    },
  },
}
</script>

<style lang="scss">
@import 'XCard';
</style>
