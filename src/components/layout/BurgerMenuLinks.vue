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
    page: '/card/create',
    text: 'navbar.createMyProduct',
  },
  {
    page: '/user/account',
    text: 'links.account',
  },
  {
    page: '/user/order',
    text: 'links.order',
  },
  {
    page: '/user/product/list',
    text: 'links.products',
  },
])
</script>

<template>
  <router-link
    v-for="link in links" :key="link.text" :to="link.page" replace
    class="text-h6 q-pa-md flex text-primary justify-center"
  >
    {{ t(link.text) }}
  </router-link>
</template>
