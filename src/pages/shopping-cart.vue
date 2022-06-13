<script setup lang="ts">
import { useShoppingCart } from '~/stores/products/shoppingCart'
const { shoppingCart, addProduct, removeProduct, chooseProductNumber } = useShoppingCart()
</script>

<template>
  <ShoppingDetails
    :shopping-products="shoppingCart"
    @add="(product) => addProduct(product)"
    @remove="(product) => removeProduct(product)"
    @select-number="({ product, selectedNumber }) => chooseProductNumber(product, selectedNumber)"
  />
</template>
