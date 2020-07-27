<template>
  <div class="x-input">
    <label v-if="label" :for="inputId" class="x-field__label">
      {{ label }}
    </label>
    <select :id="inputId" class="x-select"></select>
  </div>
</template>

<script>
export default {
  name: 'XSelect',
  data() {
    return {
      inputValue: this.value,
      inputId: null,
    }
  },
  mounted() {
    const uid = this._uid
    this.inputId = this.id ? this.id : 'x-text-input-' + uid
  },
}
</script>

<style scoped></style>
