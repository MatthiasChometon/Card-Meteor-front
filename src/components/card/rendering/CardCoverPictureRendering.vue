<script setup lang="ts">
import { useInCreationCard } from '~/stores/card/create'

const inCreationCard = useInCreationCard()
const coverPicture = computed(() => {
  const backgroundPicture = inCreationCard.value.backgroundPicture
  const hasFile = backgroundPicture instanceof File
  if (backgroundPicture === undefined || !hasFile)
    return
  return URL.createObjectURL(backgroundPicture)
})
</script>

<template>
  <div style="height: 55%; width: 100%; padding: 2%;" class="flex justify-center">
    <q-img :src="coverPicture" fit="cover" style="width: 79.8%; margin-left: 0.5%;" ratio="1" />
  </div>
</template>
