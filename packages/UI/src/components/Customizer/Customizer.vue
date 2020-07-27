<template>
  <div class="customizer-wrapper">
    <x-button type="primary" outlined rounded @click="show = !show"
      >show/hide
    </x-button>
    <div v-if="show" class="customizer">
      <h1>theme customizer</h1>
      <div class="customizer__section">
        <h2>Colors scheme settings</h2>
        <x-text-input
          v-for="(param, i) in [
            '--color-primary',
            '--color-primary-light',
            '--color-primary-dark',
            '--color-secondary',
            '--color-secondary-light',
            '--color-secondary-dark',
          ]"
          :key="i"
          v-model="vars[param]"
          outlined
          :label="param"
          type="primary"
          @input="updateCSSVar(param)"
        />
      </div>
      <div class="customizer__section">
        <h2>Sizes and spacing</h2>
        <x-text-input
          v-model="vars['--space-unit']"
          outlined
          label="--space-unit"
          type="primary"
          @input="updateCSSVar('--space-unit')"
        />
      </div>
      <div class="customizer__section">
        <h2>Shadows</h2>
        <x-text-input
          v-for="(param, i) in [
            '--shadow-x',
            '--shadow-y',
            '--shadow-blur',
            '--shadow-thin',
            '--shadow-color',
          ]"
          :key="i"
          v-model="vars[param]"
          outlined
          :label="param"
          type="primary"
          @input="updateCSSVar(param)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Customizer',
  data() {
    return {
      vars: {
        '--color-primary': 'red',
      },
      show: false,
    }
  },
  methods: {
    updateCSSVar(name, val) {
      console.log(name, val)
      document.body.style.setProperty(name, this.vars[name])
    },
  },
}
</script>

<style lang="scss">
@import 'Customizer';
</style>
