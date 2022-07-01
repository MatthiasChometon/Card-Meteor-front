<script setup lang="ts">
import { useUserOrdersState } from '~/stores/orders/userOrdersState'

const { t } = useI18n()
const orderState = useUserOrdersState()
const emit = defineEmits(['updateOrderState'])
watch(orderState, () => emit('updateOrderState', orderState.value))
</script>

<template>
  <q-card>
    <q-tabs v-model="orderState" dense class="text-grey" active-color="primary" indicator-color="primary" narrow-indicator>
      <q-tab :name="1" :label="t('orders.beingDelivered')" />
      <q-tab :name="2" :label="t('orders.delivered')" />
    </q-tabs>
  </q-card>
</template>
