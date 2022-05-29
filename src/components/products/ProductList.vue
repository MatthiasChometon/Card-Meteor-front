<script setup lang="ts">
import type { ProductList } from '../../types/product/list/ProductList'

const props = defineProps<{
  products: ProductList
}>()
</script>

<template>
  <ProductFilter />
  <div class="flex full-width">
    <ProductCard v-for="product in props.products" :key="product.id" class="productCard" :product="product" />
  </div>
  <div class="flex full-width justify-center">
    <ProductPagination />
  </div>
</template>

<style lang="scss">
@media (min-width: $breakpoint-lg-min) {
  .productCard { width: 25%; }
}
@media (max-width: $breakpoint-md-max) {
  .productCard { width: 33%; }
}
@media (max-width: $breakpoint-sm-max) {
  .productCard { width: 50%; }
}
@media (max-width: $breakpoint-xs-max) {
  .productCard { width: 100%; }
}
</style>
