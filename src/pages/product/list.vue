<script setup lang="ts">
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import { useProductListFilter } from '~/stores/products/listFilter'

const { productListFilter } = useProductListFilter()
const CARDS_LIST_QUERY = gql`
  query getCardsWithSearch($getCardInput: GetCardInput!) {
    cards(getCardInput: $getCardInput) {
      name
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

</script>

<template>
  <ProductList :products="result?.cards" />
</template>
