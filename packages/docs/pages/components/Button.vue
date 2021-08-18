<template>
  <div class="container buttons">
    <section>
      <h2>basic variants</h2>
      <XButton> Default </XButton>
      <XButton type="primary"> Primary </XButton>
      <XButton type="primary" outlined> Outline Primary </XButton>
      <XButton type="secondary"> Secondary </XButton>
      <XButton type="accent"> accent </XButton>
      <XButton type="warning" outlined> Outline Warning </XButton>
      <XButton type="warning"> Warning </XButton>
      <XButton type="error" outlined> Outline Error </XButton>
      <XButton type="primary" disabled> Disabled Primary </XButton>
    </section>
    <section>
      <h2>Color variations</h2>
      <XButton type="primary"> Primary </XButton>
      <XButton type="secondary"> Secondary </XButton>
      <XButton type="accent"> accent </XButton>
      <XButton type="success"> Success </XButton>
      <XButton type="info"> Info </XButton>
      <XButton type="warning"> Warning </XButton>
      <XButton type="error">Error </XButton>
    </section>
    <section>
      <h2>Outline</h2>
      <XButton type="primary" outlined> Primary </XButton>
      <XButton type="secondary" outlined> Secondary </XButton>
      <XButton type="accent" outlined> accent </XButton>
      <XButton type="success" outlined> Success </XButton>
      <XButton type="info" outlined> Info </XButton>
      <XButton type="warning" outlined> Warning </XButton>
      <XButton type="error" outlined>Error </XButton>
    </section>
    <section>
      <h2>Block mode</h2>
      <XButton type="primary" block> Block Primary </XButton>
      <XButton type="secondary" outlined block>
        Block Outline Secondary
      </XButton>
    </section>
    <section>
      <h2>Sizes</h2>
      <XButton type="primary" size="sm"> SM size </XButton>
      <XButton type="info" size="md"> MD size (default) </XButton>
      <XButton type="error" size="l" outlined> L size </XButton>
      <XButton type="secondary" size="l"> L size </XButton>
      <XButton type="success" size="xl" outlined> XL size </XButton>
      <XButton type="success" size="xl"> XL size button </XButton>
    </section>
    <section>
      <h2>Rounded</h2>
      <XButton type="primary" rounded> Button </XButton>
      <XButton type="primary" rounded outlined> Outline Primary </XButton>
      <XButton type="secondary" rounded size="l"> Secondary </XButton>
      <XButton type="accent" rounded> accent </XButton>
      <XButton type="warning" rounded size="xl" outlined>
        Outline Warning
      </XButton>
      <XButton type="warning" rounded> Warning </XButton>
      <XButton type="error" rounded soze="sm" outlined> Outline Error </XButton>
      <XButton type="primary" rounded disabled> Disabled </XButton>
    </section>
    <section>
      <h2>Disabled</h2>
      <XButton type="accent" disabled> Accent </XButton>
      <XButton type="primary" disabled> Primary </XButton>
      <XButton type="secondary" disabled> Secondary </XButton>
      <XButton type="success" disabled> Success </XButton>
      <XButton type="info" disabled> Info </XButton>
      <XButton type="warning" disabled> Warning </XButton>
      <XButton type="error" disabled>Error </XButton>

      <XButton type="accent" disabled outlined rounded> Accent </XButton>
      <XButton type="primary" disabled outlined rounded> Primary </XButton>
      <XButton type="secondary" disabled outlined rounded> Secondary </XButton>
      <XButton type="success" disabled outlined rounded> Success </XButton>
      <XButton type="info" disabled outlined rounded> Info </XButton>
      <XButton type="warning" disabled outlined rounded> Warning </XButton>
      <XButton type="error" disabled outlined rounded>Error </XButton>
    </section>
    <section>
      <h2>Text</h2>
      <XButton type="accent" text> Accent </XButton>
      <XButton type="primary" text> Primary </XButton>
      <XButton type="secondary" text> Secondary </XButton>
      <XButton type="success" text> Success </XButton>
      <XButton type="info" text> Info </XButton>
      <XButton type="warning" text> Warning </XButton>
      <XButton type="error" text>Error </XButton>
    </section>
    <section>
      <h2>Circle</h2>
      <XButton type="accent" circle> + </XButton>
      <XButton type="primary" circle> + </XButton>
      <XButton type="secondary" circle> + </XButton>
      <XButton type="success" circle> + </XButton>
      <XButton type="info" circle> + </XButton>
      <XButton type="warning" circle> + </XButton>
      <XButton type="error" circle>+ </XButton>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style scoped></style>
