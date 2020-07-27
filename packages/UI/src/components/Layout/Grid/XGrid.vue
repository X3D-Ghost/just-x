<template>
  <div :class="classList">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XGrid',
  props: {
    cols: {
      type: Number,
      default: 12,
    },
    rows: {
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
