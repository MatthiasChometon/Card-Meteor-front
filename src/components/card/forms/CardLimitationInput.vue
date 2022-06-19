<script setup lang="ts">
import { useInCreationCard } from '~/stores/card/create'
const { t } = useI18n()
const inCreationCard = useInCreationCard()
const limitation = [...Array(4).keys()]
</script>

<template>
  <q-select
    v-model="inCreationCard.limitation" class="q-pa-sm" outlined :options="limitation"
    :label="t('card.create.limitation')"
  />
</template>
