<template>
  <x-container>
    <div>
      <h1 class="title lg:mb-10">
        vx_framework
      </h1>
      <XCard>
        <h2 class="subtitle">
          site creating framework
        </h2>
      </XCard>
    </div>
  </x-container>
</template>

<script>
import XContainer from '@/UI/src/components/XContainer/XContainer'
export default {
  components: { XContainer },
  async asyncData(contenxt) {
    const pages = await contenxt.$axios.get(
      'https://73kprf.ru/wp-json/wp/v2/news'
    )
    // console.log(pages.data)
    return { pages: pages.data }
  },
}
</script>

<style></style>
