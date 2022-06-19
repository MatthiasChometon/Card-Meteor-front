<script setup lang="ts">
import { Attribute } from '~/enums/card/Attribute'
import { useInCreationCard } from '~/stores/card/create'
const { t } = useI18n()
const inCreationCard = useInCreationCard()
const attributes = Object.values(Attribute)
const translationPath = 'card.create.attributes'

const optionSelected = computed({
  get() { return t(`${translationPath}.${inCreationCard.value.attribute}`) },
  set(newValue: any) { inCreationCard.value.attribute = newValue },
})

const options = computed(() => attributes.map(value => ({
  label: t(`${translationPath}.${value}`),
  value,
})))
</script>

<template>
  <q-select
    v-model="optionSelected" class="q-pa-sm" outlined :options="options" emit-value
    :label="t('card.create.attribute')"
  />
</template>
