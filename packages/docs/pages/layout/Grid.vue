<template>
  <div>
    <h1>Utilities</h1>
    <section>
      <div class="grid">
        <div class="grid__col_1">grid__col_1</div>
      </div>
      <div class="grid grid_cols_1">
        <div class="grid__col_1">grid__col_1</div>
      </div>
      <div class="grid grid_cols_24">
        <div class="grid__col_1">grid__col_1</div>
        <div class="grid__col_22">grid__col_22</div>
        <div class="grid__col_1">grid__col_1</div>
      </div>
      <div class="grid grid_cols_12">
        <div class="grid__col_3 test"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Grid',
}
</script>

<style lang="scss">
.test {
  background: red;
  width: 50px;
  height: 50px;
  box-shadow: 0 0 5px 5px blue;
  @include padding(2 4 5 6);
  @include margin(3 auto);
}
</style>
