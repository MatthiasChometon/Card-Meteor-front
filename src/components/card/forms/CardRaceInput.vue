<script setup lang="ts">
import { Race } from '~/enums/card/Race'
import { useInCreationCard } from '~/stores/card/create'
const { t } = useI18n()
const inCreationCard = useInCreationCard()
const races = Object.values(Race)
const translationPath = 'card.create.races'

const optionSelected = computed({
  get() { return t(`${translationPath}.${inCreationCard.value.race}`) },
  set(newValue: any) { inCreationCard.value.race = newValue },
})

const options = computed(() => races.map(value => ({
  label: t(`${translationPath}.${value}`),
  value,
})))
</script>

<template>
  <q-select
    v-model="optionSelected" class="q-pa-sm" outlined emit-value :options="options"
    :label="t('card.create.race')"
  />
</template>
