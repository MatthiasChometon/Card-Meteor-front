<script setup lang="ts">
const { t } = useI18n()

const links: {
  page: string
  text: string
}[] = $ref([
  {
    page: '/',
    text: 'navbar.homepage',
  },
  {
    page: '/product/list',
    text: 'navbar.products',
  },
  {
    page: '',
    text: 'navbar.createMyProduct',
  },
])

</script>

<template>
  <div>
    <router-link
      v-for="link in links" :key="link.text" :to="link.page" replace
      class="text-h6 q-pa-md q-px-md text-primary flex justify-center content-center home-links"
    >
      {{ t(link.text) }}
    </router-link>
  </div>
</template>

<style lang="scss">
a {
  text-decoration: none;
}
</style>
