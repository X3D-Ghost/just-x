<template>
  <div class="container">
    <section>
      <h1>Text input</h1>
      <x-textarea label="default" value="" message="default button" />
      <x-textarea label="rounded" value="" message="rounded" rounded />
      <x-textarea label="outlined" value="" message="outlined" outlined />
    </section>
    <section>
      <h1>Sizes</h1>
      <x-textarea label="sm size" value="" message="sm" size="sm" />
      <x-textarea label="md size" value="" message="md" size="md" />
      <x-textarea label="lg size" value="" message="lg" size="lg" />
      <x-textarea
        label="sm size info outlined"
        type="info"
        value=""
        message="sm"
        size="sm"
        outlined
      />
      <x-textarea
        label="md size"
        type="secondary"
        value=""
        message="md"
        size="md"
        outlined
      />
      <x-textarea
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
      <x-textarea label="primary" type="primary" value="" message="mess" />
      <x-textarea label="secondary" type="secondary" value="" message="mess" />
      <x-textarea label="success" type="success" value="" message="mess" />
      <x-textarea label="warning" type="warning" value="" message="mess" />
      <x-textarea label="info" type="info" value="" message="info" />
      <x-textarea label="error" type="error" value="" message="mess" />
      <x-textarea
        label="outlined primary"
        type="primary"
        value=""
        message="primary outlined"
        outlined
      />
      <x-textarea
        label="outlined error"
        type="error"
        value=""
        message="error"
        outlined
      />
      <x-textarea
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
