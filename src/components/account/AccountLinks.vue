<script setup lang="ts">
import { useLinks } from '~/composables/useLinks'
const { userLinks } = useLinks()
</script>

<template>
  <Link
    v-for="link in userLinks" :key="link.text" :to="link.page" :link="link"
    class="text-h6 q-pa-md flex text-primary justify-center"
  />
</template>
