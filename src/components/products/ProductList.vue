<script setup lang="ts">
import type { ProductList } from '../../types/product/list/ProductList'

const props = defineProps<{
  products: ProductList
  isShoppingList?: boolean
}>()
defineEmits(['add', 'remove', 'selectNumber'])
</script>

<template>
  <ProductFilter v-if="!isShoppingList" />
  <div class="flex full-width row">
    <ProductCard
      v-for="product in props.products" :key="product.id" class="product-card" :product="product"
      :is-shopping-list="isShoppingList" @add="$emit('add', product)" @remove="$emit('remove', product)"
      @select-number="(selectedNumber) => $emit('selectNumber', { selectedNumber, product })"
    />
  </div>
  <div v-if="!isShoppingList" class="flex full-width justify-center q-my-md">
    <ProductPagination />
  </div>
</template>

<style lang="scss">
.product-card {
  flex-wrap: nowrap;
}

@media (min-width: $breakpoint-lg-min) {
  .product-card {
    width: 15%;
  }
}

@media (max-width: $breakpoint-md-max) {
  .product-card {
    width: 20%;
  }
}

@media (max-width: $breakpoint-sm-max) {
  .product-card {
    width: 30%;
  }
}

@media (max-width: $breakpoint-xs-max) {
  .product-card {
    width: 100%;
  }
}
</style>
