<script setup lang="ts">
import { useProductListFilter } from '../../../stores/products/listFilter'
const { t } = useI18n()
const { setEditor, productListFilter } = useProductListFilter()

const isFilter = $computed({
  get() {
    return !!productListFilter.filterBy.editor
  },
  set(newValue) {
    setEditor(newValue)
  },
})
</script>

<template>
  <div class="flex text-primary justify-center items-center">
    {{ t('product.filterBy.user') }}
    <q-checkbox v-model="isFilter" color="primary" />
  </div>
</template>
