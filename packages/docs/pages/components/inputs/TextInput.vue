<template>
  <div class="container">
    <section>
      <h1>Text input</h1>
      <x-text-input label="default" value="" message="default button" />
      <x-text-input label="rounded" value="" message="rounded" rounded />
      <x-text-input label="outlined" value="" message="outlined" outlined />
    </section>
    <section>
      <h1>Sizes</h1>
      <x-text-input label="sm size" value="" message="sm" size="sm" />
      <x-text-input label="md size" value="" message="md" size="md" />
      <x-text-input label="lg size" value="" message="lg" size="lg" />
      <x-text-input
        label="sm size info outlined"
        type="info"
        value=""
        message="sm"
        size="sm"
        outlined
      />
      <x-text-input
        label="md size"
        type="secondary"
        value=""
        message="md"
        size="md"
        outlined
      />
      <x-text-input
        label="lg size"
        type="success"
        value=""
        message="lg"
        size="lg"
        outlined
      />
    </section>
    <section>
      <h1>Types</h1>
      <x-text-input label="primary" type="primary" value="" message="mess" />
      <x-text-input
        label="secondary"
        type="secondary"
        value=""
        message="mess"
      />
      <x-text-input label="success" type="success" value="" message="mess" />
      <x-text-input label="warning" type="warning" value="" message="mess" />
      <x-text-input label="info" type="info" value="" message="info" />
      <x-text-input label="error" type="error" value="" message="mess" />
      <x-text-input
        label="outlined primary"
        type="primary"
        value=""
        message="primary outlined"
        outlined
      />
      <x-text-input
        label="outlined error"
        type="error"
        value=""
        message="error"
        outlined
      />
      <x-text-input
        label="outlined success"
        type="success"
        value=""
        message="success"
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
