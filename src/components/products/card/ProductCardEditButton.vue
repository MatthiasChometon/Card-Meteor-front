<script setup lang="ts">
const props = defineProps<{
  productId: string
}>()
</script>

<template>
  <router-link :to="`/card/${props.productId}`">
    <q-btn color="primary" icon="edit" round outline />
  </router-link>
</template>
