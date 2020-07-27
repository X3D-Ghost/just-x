<template>
  <div class="container">
    <section>
      <h2>Colors</h2>
      <div class="alerts">
        <x-alert>default</x-alert>
        <x-alert type="primary">primary</x-alert>
        <x-alert type="secondary">secondary</x-alert>
        <x-alert type="warning">warning</x-alert>
        <x-alert type="error">error</x-alert>
        <x-alert type="success">success</x-alert>
      </div>
    </section>
    <section>
      <h2>Outline</h2>
      <div class="alerts">
        <x-alert type="primary" outlined>primary</x-alert>
        <x-alert type="secondary" outlined>secondary</x-alert>
        <x-alert type="warning" outlined>warning</x-alert>
        <x-alert type="error" outlined>error</x-alert>
        <x-alert type="success" outlined>success</x-alert>
      </div>
    </section>
    <section>
      <h2>text</h2>
      <div class="alerts">
        <x-alert type="primary" text>primary</x-alert>
        <x-alert type="secondary" text>secondary</x-alert>
        <x-alert type="warning" text>warning</x-alert>
        <x-alert type="error" text>error</x-alert>
        <x-alert type="success" text>success</x-alert>
      </div>
    </section>
    <section>
      <h2>Tile</h2>
      <div class="alerts">
        <x-alert type="primary" tile>primary</x-alert>
        <x-alert type="secondary" tile>secondary</x-alert>
        <x-alert type="warning" tile>warning</x-alert>
        <x-alert type="error" tile>error</x-alert>
        <x-alert type="success" tile>success</x-alert>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Alert',
}
</script>

<style></style>
