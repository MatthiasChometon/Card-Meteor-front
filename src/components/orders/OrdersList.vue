<script setup lang="ts">
import type { Order } from '~/types/order/Order'

const props = defineProps<{
  orders: Order[]
}>()
defineEmits(['setNewPagination'])
</script>

<template>
  <div class="flex column">
    <OrderTabs class="q-ma-md" />
    <OrderTable class="q-ma-md" :orders="props.orders" />
    <OrderPagination class="q-ma-md" @set-new-pagination="(pagination) => $emit('setNewPagination', pagination)" />
  </div>
</template>
