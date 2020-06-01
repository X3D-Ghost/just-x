<template>
  <div :class="classList">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XCol',
  props: {
    col: {
      type: Number,
      default: null,
    },
    colStart: {
      type: Number,
      default: null,
    },
    colEnd: {
      type: Number,
      default: null,
    },
    row: {
      type: Number,
      default: null,
    },
    rowStart: {
      type: Number,
      default: null,
    },
    rowEnd: {
      type: Number,
      default: null,
    },
  },
  computed: {
    classList() {
      const className = 'x-grid'
      const obj = [className]
      if (this.cols) obj.push(`${className}_cols_${this.cols}`)
      if (this.rows) obj.push(`${className}_rows_${this.rows}`)
      return obj
    },
  },
}
</script>

<style scoped></style>
