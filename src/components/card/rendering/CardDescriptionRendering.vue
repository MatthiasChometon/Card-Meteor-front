<script setup lang="ts">
import type { ComputedRef } from '@vue/runtime-dom'
import { useInCreationCard } from '~/stores/card/create'

const inCreationCard = useInCreationCard()
const cardProperties: ComputedRef<string> = computed(() => {
  const race = upperCaseFirstLetter(inCreationCard.value.race)
  const type = upperCaseFirstLetter(inCreationCard.value.type)
  const effect = inCreationCard.value.hasEffect ? 'Effect' : 'Normal'
  return inCreationCard.value.type === ''
    ? `[ ${race} / ${effect} ]`
    : `[ ${race} / ${type} / ${effect} ]`
})

function upperCaseFirstLetter(word: string): string {
  return `${word.charAt(0).toUpperCase()}${word.substring(1)}`
}
</script>

<template>
  <div style="flex: 4; width: 100%;" class="flex justify-center content-center">
    <div style="width: 84%; height: 94%;">
      <div class="text-black text-weight-bold" style="font-size: 0.7rem;">
        {{ cardProperties }}
      </div>
      <div style="color: #403737;" class="description">
        {{ inCreationCard.description }}
      </div>
      <div class="text-black flex justify-end card-battle-points">
        <div>{{ inCreationCard.attack }}</div>
        <div style="padding-left: 17%;">
          {{ inCreationCard.defense }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: $breakpoint-lg-min) {
  .description {
    font-size: 0.6rem;
    height: 66%;
  }
}

@media (max-width: $breakpoint-md-max) {
  .description {
    font-size: 0.5rem;
    height: 63%;
  }
}

@media (max-width: $breakpoint-sm-max) {
  .description {
    font-size: 0.43rem;
    height: 60%;
  }
}

@media (min-width: $breakpoint-sm-min) {
  .card-battle-points {
    font-size: 0.73rem;
  }
}

@media (max-width: $breakpoint-xs-max) {
  .description {
    font-size: 0.36rem;
    height: 54%;
  }

  .card-battle-points {
    font-size: 0.6rem;
  }
}
</style>
