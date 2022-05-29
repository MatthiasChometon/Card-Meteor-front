<script setup lang="ts">
import { useProductPagination } from '../../../stores/products/pagination'
const { setPagination, paginationParam } = useProductPagination()
const currentPage = $computed({
  get() {
    return paginationParam.currentPage
  },
  set(newValue) {
    setPagination(newValue)
  },
})
</script>

<template>
  <q-pagination
    v-model="currentPage"
    :max="60"
    :max-pages="paginationParam.maxProductsPerPage"
    :boundary-numbers="false"
    direction-links
    flat
    color="grey-4"
    active-color="primary"
  />
</template>
