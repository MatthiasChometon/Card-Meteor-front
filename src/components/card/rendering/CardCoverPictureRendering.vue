<script setup lang="ts">
import { useInCreationCard } from '~/stores/card/create'

const inCreationCard = useInCreationCard()
const coverPicture = computed(() => new URL(inCreationCard.value.backgroundPicture, import.meta.url).href)
</script>

<template>
  <div style="height: 55%; width: 100%; padding: 2%;" class="flex justify-center">
    <q-img :src="coverPicture" fit="contain" style="width: 79.8%; margin-left: 0.5%;" ratio="1" />
  </div>
</template>
