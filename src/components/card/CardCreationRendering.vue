<script setup lang="ts">
import { useInCreationCard } from '~/stores/card/create'

const inCreationCard = useInCreationCard()
const typeForPicture = computed(() => {
  const emptyMonsterType = inCreationCard.value.hasEffect ? 'effect' : 'normal'
  return inCreationCard.value.type === ''
    ? emptyMonsterType
    : inCreationCard.value.type
})
const backgroundPicture = computed(() => new URL(`../../assets/card-templates/${typeForPicture.value}.png`, import.meta.url).href)

</script>

<template>
  <q-img id="cardCreation" :src="backgroundPicture" class="card-creation-rendering-picture">
    <div
      style="background: transparent !important; height: 100%; padding: 0px !important; width: 100%;"
      class="flex column"
    >
      <CardTitleRendering />
      <CardStarsRendering />
      <CardBackgroundPictureRendering />
      <CardEditionRendering />
      <CardDescriptionRendering />
      <CardIdsRendering />
    </div>
  </q-img>
</template>

<style scoped lang="scss">
@media (min-width: $breakpoint-lg-min) {
  .card-creation-rendering-picture {
    height: 520px;
    width: 356.8px;
  }
}

@media (max-width: $breakpoint-md-max) {
  .card-creation-rendering-picture {
    height: 455px;
    width: 312.2px;
  }
}

@media (max-width: $breakpoint-sm-max) {
  .card-creation-rendering-picture {
    height: 422.5px;
    width: 289.9px;
  }
}

@media (max-width: $breakpoint-xs-max) {
  .card-creation-rendering-picture {
    height: 325px;
    width: 223px;
  }
}
</style>
