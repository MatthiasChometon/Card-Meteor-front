<script setup lang="ts">
import { useInCreationCard } from '~/stores/card/create'

const inCreationCard = useInCreationCard()
</script>

<template>
  <div
    style="height: 2.4%; width: 100%; font-size: 0.43rem; padding-right: 10.4%;"
    class="flex justify-end text-black text-caption content-center"
  >
    {{ inCreationCard.edition }}
  </div>
</template>
