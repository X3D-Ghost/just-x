<template>
  <div>
    <h1>X-Card</h1>
    <section class="mb-4">
      <x-card> XCard </x-card>
    </section>
    <section class="mb-4">
      <x-card>
        <template #header>header</template>
        card body
        <template #footer>footer</template>
      </x-card>
    </section>
    <section class="mb-4">
      <x-card horizontal>
        <template #header>header</template>
        card body
        <template #footer>footer</template>
      </x-card>
    </section>
    <section class="mb-4">
      <x-card bg-type="primary" flat horizontal>
        <template #header>header</template>
        card body
        <template #footer>footer</template>
      </x-card>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style scoped>
body {
  background-color: #e6e6e6;
}
</style>
