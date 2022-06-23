<script setup lang="ts">
import { useInCreationCard } from '~/stores/card/create'
const { t } = useI18n()
const inCreationCard = useInCreationCard()
const levels = [...Array(14).keys()]
</script>

<template>
  <q-select v-model.number="inCreationCard.level" class="q-pa-sm" outlined :options="levels" :label="t('card.create.level')" />
</template>
