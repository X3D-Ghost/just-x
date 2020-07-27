<template>
  <div :class="classList">
    <label :for="inputId" class="x-field__label x-textarea__label">
      {{ label }}
    </label>
    <textarea
      :id="inputId"
      :name="name"
      :cols="cols"
      :rows="rows"
      :value="inputValue"
      class="x-field__input x-textarea__input"
      @input="update"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'XTextarea',
  props: {
    value: {
      type: String || Number,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    id: {
      type: String || Number,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    /* size: {
      type: String,
      default: 'md',
    }, */
    type: {
      type: String,
      default: null,
    },
    bgColor: {
      type: String,
      default: 'white',
    },
    cols: {
      type: Number,
      default: 30,
    },
    rows: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      inputValue: this.value,
      inputId: null,
    }
  },
  computed: {
    classList() {
      const className = 'x-field'
      const obj = [className]
      if (this.outlined) obj.push(`${className}_outlined`)
      if (this.rounded) obj.push(`${className}_rounded`)
      if (this.size) obj.push(`${className}_size_${this.size}`)
      if (this.type) obj.push(`${className}_${this.type}`)
      if (this.bgColor) obj.push(`${className}_bg_${this.bgColor}`)
      return obj
    },
  },
  mounted() {
    const uid = this._uid
    this.inputId = this.id ? this.id : 'x-text-input-' + uid
  },
  methods: {
    update() {
      const data = this.inputValue
      this.$emit('change', data)
    },
  },
}
</script>

<style lang="scss">
@import 'XTextarea';
</style>
