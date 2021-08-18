<template>
  <div :class="cardClassList">
    <component
      :is="headerTag"
      v-if="$slots.header"
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
      v-if="$slots.footer"
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
  name: "XCard",
  props: {
    header: {
      default: null,
      type: String,
    },
    headerTag: {
      type: String,
      default: "div",
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
      default: "div",
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
    flat: {
      type: Boolean,
      default: null,
    },
    depth: {
      type: Boolean,
      default: null,
    },
    rounded: {
      type: Boolean,
      default: null,
    },
    horizontal: {
      type: Boolean,
      default: null,
    },
    outlined: {
      type: Boolean,
      default: null,
    },
  },
  computed: {
    cardClassList() {
      const obj = ["x-card"];
      if (this.flat) obj.push(`x-card_flat`);
      if (this.outlined) obj.push(`x-card_outlined`);
      if (this.horizontal) obj.push(`x-card_horizontal`);
      if (this.bgType) obj.push(`bg-color_${this.bgType}`);
      if (this.textType) obj.push(`x-card_text_${this.textType}`);
      return obj;
    },
    bodyClasses() {
      const obj = ["x-card__content"];
      if (this.overlay) obj.push("x-card__content_overlay");
      return obj;
    },
  },
};
</script>

<style lang="scss">
@import "XCard";
</style>
