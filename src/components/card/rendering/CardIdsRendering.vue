<script setup lang="ts">
import { useInCreationCard } from '~/stores/card/create'
const inCreationCard = useInCreationCard()
</script>

<template>
  <div
    style="height: 5.2%; width: 100%; padding-left: 4%; padding-right: 10%;"
    class="text-black flex"
  >
    <div class="flex justify-between content-center" style="width: 100%; height: 60%;">
      <div class="text-caption" style="font-size: 0.43rem;">
        {{ inCreationCard.serialNumber }}
      </div>
      <div class="text-caption" style="font-size: 0.43rem;">
        {{ inCreationCard.editor }}
      </div>
    </div>
  </div>
</template>
