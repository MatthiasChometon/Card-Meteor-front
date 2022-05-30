<script setup lang="ts">
import type { ProductList } from '../../types/product/list/ProductList'

const props = defineProps<{
  products: ProductList
}>()
</script>

<template>
  <ProductFilter />
  <div class="flex full-width">
    <ProductCard v-for="product in props.products" :key="product.id" class="product-card" :product="product" />
  </div>
  <div class="flex full-width justify-center">
    <ProductPagination />
  </div>
</template>

<style lang="scss">
@media (min-width: $breakpoint-lg-min) {
  .product-card { width: 25%; }
}
@media (max-width: $breakpoint-md-max) {
  .product-card { width: 33%; }
}
@media (max-width: $breakpoint-sm-max) {
  .product-card { width: 50%; }
}
@media (max-width: $breakpoint-xs-max) {
  .product-card { width: 100%; }
}
</style>
