<script setup lang="ts">
import { useLinks } from '~/composables/useLinks'
const { visitorLinks } = useLinks()
</script>

<template>
  <div>
    <Link
      v-for="link in visitorLinks" :key="link.text" :to="link.page" :link="link"
      class="text-h6 q-pa-md q-px-md text-primary flex justify-center content-center home-links"
    />
  </div>
</template>
