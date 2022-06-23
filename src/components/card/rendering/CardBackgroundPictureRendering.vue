<script setup lang="ts">
import type { Ref } from 'vue'
import { useServerPicture } from '~/composables/useServerPicture'
import { useInCreationCard } from '~/stores/card/create'

const inCreationCard = useInCreationCard()

const pictureName = computed(() => {
  const backgroundPicture = inCreationCard.value.backgroundPicture
  const isString = typeof backgroundPicture === 'string'
  return isString ? backgroundPicture : ''
})
const { picture } = useServerPicture('background', pictureName)

const pictureToDisplay: Ref<string> = computed(() => {
  const backgroundPicture = inCreationCard.value.backgroundPicture
  const isFile = backgroundPicture instanceof File
  const isString = typeof backgroundPicture === 'string'

  if (isString)
    return picture.value

  if (isFile)
    return URL.createObjectURL(backgroundPicture)

  return ''
})
</script>

<template>
  <div style="height: 55%; width: 100%; padding: 2%;" class="flex justify-center">
    <q-img :src="pictureToDisplay" fit="cover" style="width: 79.8%; margin-left: 0.5%;" ratio="1" />
  </div>
</template>
