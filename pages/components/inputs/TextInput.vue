<template>
  <div class="container">
    <section>
      <h1>Text input</h1>
      <x-text-input label="default" value="" message="mess" />
      <x-text-input label="rounded" value="" message="rounded" rounded />
      <x-text-input label="outlined" value="" message="outlined" outlined />
    </section>
    <section>
      <h1>Sizes</h1>
      <x-text-input label="xs size" value="" message="xs" size="xs" />
      <x-text-input label="sm size" value="" message="sm" size="sm" />
      <x-text-input label="md size" value="" message="md" size="md" />
      <x-text-input label="lg size" value="" message="lg" size="lg" />
    </section>
    <section>
      <h1>Types</h1>
      <x-text-input label="default" type="primary" value="" message="mess" />
      <x-text-input label="default" type="secondary" value="" message="mess" />
      <x-text-input label="default" type="success" value="" message="mess" />
      <x-text-input label="default" type="warning" value="" message="mess" />
      <x-text-input label="default" type="error" value="" message="mess" />
      <x-text-input
        label="outlined"
        type="primary"
        value=""
        message="mess"
        outlined
      />
      <x-text-input
        label="outlined"
        type="error"
        value=""
        message="mess"
        outlined
      />
      <x-text-input
        label="outlined"
        type="success"
        value=""
        message="mess"
        outlined
      />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Inputs',
}
</script>

<style scoped></style>
