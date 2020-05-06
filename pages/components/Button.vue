<template>
  <div class="container buttons">
    <section>
      <h2>basic variants</h2>
      <XButton> Default </XButton>
      <XButton type="primary"> Primary </XButton>
      <XButton type="outline_primary"> Outline Primary </XButton>
      <XButton type="secondary"> Secondary </XButton>
      <XButton type="tertiary"> Tertiary </XButton>
      <XButton type="outline_warning"> Outline Warning </XButton>
      <XButton type="warning"> Warning </XButton>
      <XButton type="outline_error"> Outline Error </XButton>
      <XButton type="primary" disabled> Disabled Primary </XButton>
    </section>
    <section>
      <h2>Color variations</h2>
      <XButton type="primary"> Primary </XButton>
      <XButton type="secondary"> Secondary </XButton>
      <XButton type="tertiary"> Tertiary </XButton>
      <XButton type="success"> Success </XButton>
      <XButton type="info"> Info </XButton>
      <XButton type="warning"> Warning </XButton>
      <XButton type="error">Error </XButton>
    </section>
    <section>
      <h2>Outline</h2>
      <XButton type="primary" outlined> Primary </XButton>
      <XButton type="secondary" outlined> Secondary </XButton>
      <XButton type="tertiary" outlined> Tertiary </XButton>
      <XButton type="success" outlined> Success </XButton>
      <XButton type="info" outlined> Info </XButton>
      <XButton type="warning" outlined> Warning </XButton>
      <XButton type="error" outlined>Error </XButton>
    </section>
    <section>
      <h2>Block mode</h2>
      <XButton type="primary" block> Block Primary </XButton>
      <XButton type="outline_secondary" block>
        Block Outline Secondary
      </XButton>
    </section>
    <section>
      <h2>Sizes</h2>
      <XButton type="primary" size="sm"> SM size </XButton>
      <XButton type="info" size="md"> MD size (default) </XButton>
      <XButton type="outline_error" size="l"> L size </XButton>
      <XButton type="secondary" size="l"> L size </XButton>
      <XButton type="outline_success" size="xl"> XL size </XButton>
      <XButton type="success" size="xl"> XL size button </XButton>
    </section>
    <section>
      <h2>Rounded</h2>
      <XButton type="primary" rounded> Button </XButton>
      <XButton type="outline_primary" rounded> Outline Primary </XButton>
      <XButton type="secondary" rounded size="l"> Secondary </XButton>
      <XButton type="tertiary" rounded> Tertiary </XButton>
      <XButton type="outline_warning" rounded size="xl">
        Outline Warning
      </XButton>
      <XButton type="warning" rounded> Warning </XButton>
      <XButton type="outline_error" rounded soze="sm"> Outline Error </XButton>
      <XButton type="primary" rounded disabled> Disabled </XButton>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style scoped></style>
