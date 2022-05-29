<script setup lang="ts">
import { ProductStep } from '../../../enums/products/filter/ProductStep'
import { useProductListFilter } from '../../../stores/products/listFilter'
const { t, locale } = useI18n()
const { productListFilter, setStep } = useProductListFilter()

const value = $computed(() => productListFilter.filterBy.step)
const filterBy = $computed({
  get() {
    if (!value)
      return undefined
    return { label: t(`product.filterBy.step.type.${value}`), value }
  },
  set(newValue) {
    setStep(newValue?.value)
  },
})
const filterByOptions = $computed(() => Object.values(ProductStep).map(value => ({
  label: t(`product.filterBy.step.type.${value}`),
  value,
})))

watch(locale, () => {
  if (filterBy)
    filterBy.label = t(`product.filterBy.step.type.${filterBy.value}`)
})
</script>

<template>
  <q-select
    v-model="filterBy" outlined :label="t('product.filterBy.step.label')" clearable transition-show="flip-up"
    transition-hide="flip-down" :options="filterByOptions"
  />
</template>
