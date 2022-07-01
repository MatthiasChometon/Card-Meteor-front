<script setup lang="ts">
import type { OrderProduct } from '~/types/order/OrderProduct'

const props = defineProps<{
  orderProduct: OrderProduct
}>()
</script>

<template>
  <div class="row q-pa-sm">
    <q-badge> {{ props.orderProduct.number }}</q-badge>
    <div class="q-ml-xl">
      {{ props.orderProduct.product.name }}
    </div>
  </div>
</template>
