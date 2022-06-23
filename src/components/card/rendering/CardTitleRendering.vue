<script setup lang="ts">
import { Type } from '~/enums/card/Type'
import { useInCreationCard } from '~/stores/card/create'

const inCreationCard = useInCreationCard()
const attributePicture = computed(() => new URL(`../../../assets/card-attributes/${inCreationCard.value.attribute}.png`, import.meta.url).href)
const textColor = computed(() => {
  const isFusionOrXyz = inCreationCard.value.type === Type.fusion || inCreationCard.value.type === Type.xyz
  return isFusionOrXyz ? 'text-white' : 'text-black'
})
</script>

<template>
  <div
    style="height: 11.5%; width: 100%; padding-top: 2.8%; padding-left: 7%; padding-right: 7%;"
    :class="`${textColor} flex justify-between content-end row inline`"
  >
    <div class="flex content-center" style="flex: 9;">
      {{ inCreationCard.name }}
    </div>
    <q-img :src="attributePicture" fit="contain" style="height: 72%; flex: 1.2;" ratio="1" />
  </div>
</template>
