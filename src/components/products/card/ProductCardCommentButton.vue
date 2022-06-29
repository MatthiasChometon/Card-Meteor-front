<script setup lang="ts">
const props = defineProps<{
  productId: string
}>()
</script>

<template>
  <router-link :to="`/card/comment/${props.productId}`">
    <q-btn color="primary" icon="chat_bubble" round outline />
  </router-link>
</template>
