<script setup lang="ts">
import { useProductListFilter } from '../../../stores/products/listFilter'
const { t } = useI18n()
const { productListFilter, setFilterName } = useProductListFilter()
const name = $computed({
  get() {
    return productListFilter.filterBy.name
  },
  set(newValue) {
    setFilterName(newValue)
  },
})
</script>

<template>
  <q-input v-model="name" outlined :label="t('product.filterBy.search')" clearable />
</template>
