<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { GET_ORDERS } from '~/graphql/order/get'
import { useUserOrdersState } from '~/stores/orders/userOrdersState'

const state = useUserOrdersState()
const pagination = ref({ start: 0, end: 5 })
const { result, variables } = useQuery(GET_ORDERS, { ordersParams: { state, pagination } },
  { fetchPolicy: 'cache-and-network' })

watch(state, () => variables.value = { ordersParams: { state, pagination } })
const orders = computed(() => result?.value?.userOrders ?? [])

function setNewPagination(newPagination: number) {
  const maxProductsPerPage = 6
  pagination.value.start = (newPagination - 1) * maxProductsPerPage
  pagination.value.end = newPagination * maxProductsPerPage - 1
}
</script>

<template>
  <div class="full-height full-width flex justify-center content-center">
    <OrdersList :orders="orders" @set-new-pagination="(pagination) => setNewPagination(pagination)" />
  </div>
</template>
