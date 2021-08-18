<template>
  <component
    :is="tag"
    :type="buttonType"
    :disabled="disabled"
    :class="[classList]"
    @click="$emit('click')"
  >
    <span v-if="iconLeft" class="x-button__icon x-button__icon_left"></span>
    <span class="x-button__content">
      <slot></slot>
    </span>
    <span v-if="iconRight" class="x-button__icon x-button__icon_right"></span>
  </component>
</template>

<script>
export default {
  name: "XButton",
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
    },
    buttonType: {
      type: String,
      default: "button",
    },
    type: {
      type: String,
      default: null,
    },
    tag: {
      type: String,
      default: "button",
    },
    iconLeft: {
      type: String,
      default: null,
    },
    iconRight: {
      type: String,
      default: null,
    },
    rounded: {
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
    circle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      const className = "x-button";
      const classlist = [className];
      if (this.size) classlist.push(`${className}_${this.size}`);
      if (this.block) classlist.push(`${className}_block`);
      if (this.rounded) classlist.push(`${className}_rounded`);
      if (this.outlined) classlist.push(`${className}_outlined`);
      if (this.text) classlist.push(`${className}_text`);
      if (this.type) classlist.push(`${className}_${this.type}`);
      if (this.circle) classlist.push(`${className}_circle`);
      return classlist;
    },
  },
};

// import './XButton.scss';
</script>

<style lang="scss">
@import "./XButton.scss";
</style>
