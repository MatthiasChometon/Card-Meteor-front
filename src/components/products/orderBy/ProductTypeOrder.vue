<script setup lang="ts">
import { ProductOrderBy } from '../../../enums/products/filter/ProductOrderBy'
import { useProductListFilter } from '../../../stores/products/listFilter'
const { t, locale } = useI18n()
const { productListFilter, setOrderName } = useProductListFilter()

const value = $computed(() => productListFilter.orderBy.name)
const orderBy = $computed({
  get() {
    return { label: t(`product.orderBy.type.${value}`), value }
  },
  set(newValue) {
    setOrderName(newValue.value)
  },
})
const orderByOptions = $computed(() => Object.values(ProductOrderBy).map(value => ({
  label: t(`product.orderBy.type.${value}`),
  value,
})))

watch(locale, () => orderBy.label = t(`product.orderBy.type.${orderBy.value}`))
</script>

<template>
  <q-select
    v-model="orderBy" outlined :label="t('product.orderBy.label')" transition-show="flip-up"
    transition-hide="flip-down" :options="orderByOptions"
  />
</template>
