<template>
  <div>
    <h1>Utilities</h1>
    <section>
      <h2>Padding</h2>
      <div v-for="(item, d) in utils.padding.classes" :key="d">
        <div v-for="(breakpoint, b) in breakpoints" :key="b">
          <div
            v-for="i in 9"
            :key="i"
            :class="`${breakpoint ? `${breakpoint}:` : ''}${item}-${i - 1}`"
          >
            {{ `${breakpoint ? `${breakpoint}:` : ''}${item}-${i - 1}` }}
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2>Margin</h2>
      <div v-for="(item, d) in utils.margin.classes" :key="d">
        <div
          v-for="(i, index) in utils.margin.values"
          :key="index"
          :class="`${item}-${i}`"
        >
          {{ `${item}-${i}` }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Utilities',
  data() {
    return {
      breakpoints: ['', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      values: [],
      utils: {
        padding: {
          classes: ['p', 'pl', 'pr', 'pt', 'pb', 'px', 'py'],
        },
        margin: {
          classes: ['m', 'ml', 'mr', 'mt', 'mb', 'mx', 'my'],
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 'auto'],
        },
      },
    }
  },
}
</script>

<style scoped></style>
