<script setup lang="ts">
import type { ProductList } from '../../types/product/list/ProductList'
const products: ProductList = []
</script>

<template>
  <ProductList :products="products" />
</template>
