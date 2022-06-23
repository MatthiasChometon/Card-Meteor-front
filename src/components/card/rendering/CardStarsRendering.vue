<script setup lang="ts">
import { useInCreationCard } from '~/stores/card/create'

const inCreationCard = useInCreationCard()
const stars = computed(() => [...Array(inCreationCard.value.level).keys()])
</script>

<template>
  <div style="height: 5.3%; width: 100%; padding-right: 11%;" class="flex justify-end content-end">
    <q-img
      v-for="star in stars" :key="star" style="margin-left: 0.4%;" class="star" src="../../../assets/star.png"
      fit="fill" ratio="1"
    />
  </div>
</template>

<style scoped lang="scss">
@media (min-width: $breakpoint-sm-min) {
  .star {
    height: 75%;
    width: 6.6%;
  }
}

@media (max-width: $breakpoint-xs-max) {
  .star {
    height: 82%;
    width: 6.7%;
  }
}
</style>
