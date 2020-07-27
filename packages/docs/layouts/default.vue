<template>
  <x-layout>
    <x-header>
      <template #brand>
        Just-X framework
      </template>
    </x-header>
    <x-sidebar>
      <x-card flat class="md\:height_full">
        <x-list>
          <x-list-item tag="n-link" to="/components/Button">
            Buttons
          </x-list-item>
          <x-list-item tag="n-link" to="/components/Card">
            Card
          </x-list-item>
          <x-list-item>Inputs</x-list-item>
          <x-list-item>Layout</x-list-item>
          <x-list-item tag="n-link" to="/components/Alert">Alerts</x-list-item>
          <x-list-item>Inputs</x-list-item>
        </x-list>
      </x-card>
    </x-sidebar>
    <x-content>
      <nuxt />
    </x-content>
    <x-footer></x-footer>
    <customizer></customizer>
  </x-layout>
</template>

<style></style>
<script>
export default {}
</script>
