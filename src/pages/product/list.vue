<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { CARDS_LIST_QUERY } from '~/graphql/product/list'
import { useProductListFilter } from '~/stores/products/listFilter'
import { useShoppingCart } from '~/stores/products/shoppingCart'

const { productListFilter } = useProductListFilter()

const { result, variables } = useQuery(CARDS_LIST_QUERY, {
  getCardInput: productListFilter,
}, { fetchPolicy: 'cache-and-network' })

watch(productListFilter, () => {
  variables.value = {
    getCardInput: productListFilter,
  }
})

const { addProduct } = useShoppingCart()
</script>

<template>
  <ProductList :products="result?.cards" @add="(product) => addProduct(product)" />
</template>
