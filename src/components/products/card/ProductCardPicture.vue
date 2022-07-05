<script setup lang="ts">
const props = defineProps<{
  picture: string
}>()
</script>

<template>
  <q-img class="product-card-picture" fit="contain" :src="props.picture" />
</template>
