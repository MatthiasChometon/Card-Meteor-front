<script setup lang="ts">
import type { OrderProduct } from '~/types/order/OrderProduct'

const { t } = useI18n()
const props = defineProps<{
  orderProducts: OrderProduct[]
}>()
</script>

<template>
  <div class="text-h6 q-pa-sm">
    {{ t('orders.productsTitle') }}
  </div>
  <OrderDetailsProduct
    v-for="orderProduct in props.orderProducts" :key="orderProduct.id"
    :order-product="orderProduct"
  />
</template>
