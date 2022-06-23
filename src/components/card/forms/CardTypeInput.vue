<script setup lang="ts">
import { Type } from '~/enums/card/Type'
import { useInCreationCard } from '~/stores/card/create'
const { t } = useI18n()
const inCreationCard = useInCreationCard()
const types = Object.keys(Type)
const translationPath = 'card.create.types'

const optionSelected = computed({
  get() {
    const type = Object.entries(Type)
      .find(([_key, value]) => value === inCreationCard.value.type)
    const typeForTranslation = type?.[0]
    return t(`${translationPath}.${typeForTranslation}`)
  },
  set(newValue: string) {
    const newType = Object.entries(Type).find(([key, _value]) => key === newValue)
    if (newType)
      inCreationCard.value.type = newType[1]
  },
})

const options = computed(() => types.map(value => ({
  label: t(`${translationPath}.${value}`),
  value,
})))
</script>

<template>
  <q-select
    v-model="optionSelected" class="q-pa-sm" outlined :options="options" :label="t('card.create.type')"
    emit-value
  />
</template>
