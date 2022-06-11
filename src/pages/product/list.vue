<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { useProductListFilter } from '~/stores/products/listFilter'
import { useShoppingCart } from '~/stores/products/shoppingCart'

const { productListFilter } = useProductListFilter()
const CARDS_LIST_QUERY = gql`
  query getCardsWithSearch($getCardInput: GetCardInput!) {
    cards(getCardInput: $getCardInput) {
      id
      name
      archetype
      coverPicture
      price
    }
  }
`
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
