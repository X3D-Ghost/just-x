<template>
  <component :is="tag"><slot /></component>
</template>

<script>
export default {
  name: 'XLabel',
  props: {
    tag: {
      type: String,
      default: 'label',
    },
  },
}
</script>

<style scoped></style>
