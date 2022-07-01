<script setup lang="ts">
import type { Order } from '~/types/order/Order'

const orderProps = defineProps<{
  orders: Order[]
}>()
const { t } = useI18n()
const columns: any = computed(() => [
  {
    name: 'trackingNumber',
    required: true,
    label: t('orders.trackingNumber'),
    align: 'left',
    field: 'trackingNumber',
  },
  { name: 'deliveryDate', label: t('orders.deliveryDate'), align: 'left', field: 'deliveryDate', sortable: true, format: (val: string) => new Date(val).toLocaleDateString() },
  { name: 'totalPrice', label: t('orders.totalPrice'), field: 'totalPrice', align: 'left', sortable: true, format: (val: number) => `${val}€` },
  { name: 'productsPrice', label: t('orders.productsPrice'), field: 'productsPrice', align: 'left', format: (val: number) => `${val}€` },
  { name: 'shippingCostPrice', label: t('orders.shippingCostPrice'), field: 'shippingCostPrice', align: 'left', format: (val: number) => `${val}€` },
  { name: 'creationDate', label: t('orders.creationDate'), field: 'creationDate', align: 'left', format: (val: string) => new Date(val).toLocaleDateString() },
])
</script>

<template>
  <div>
    <q-table
      row-key="trackingNumber" :title="t('orders.title')" :rows="orderProps.orders" :columns="columns"
      :dense="$q.screen.lt.md" :grid="$q.screen.xs" :no-data-label="t('orders.noDatas')" hide-pagination
    >
      <template #header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template #body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn
              size="sm" color="primary" round dense :icon="props.expand ? 'expand_less' : 'expand_more'"
              @click="props.expand = !props.expand"
            />
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <OrderDetails :order-products="props.row.orderProducts" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
