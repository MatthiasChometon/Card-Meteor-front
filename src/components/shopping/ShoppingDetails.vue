<script setup lang="ts">
import type { ShoppingProduct } from '../../types/product/shopping/ShoppingProduct'
const { t } = useI18n()

const props = defineProps<{
  shoppingProducts: ShoppingProduct[]
}>()
defineEmits(['add', 'remove', 'selectNumber', 'order'])
</script>

<template>
  <div class="flex">
    <div style="flex: 2;" class="justify-center content-center flex primary-border q-mx-md q-mt-md">
      <div class="text-primary text-h4 q-pt-md">
        {{ t('product.shopping.title') }}
      </div>
      <ProductList
        :products="props.shoppingProducts"
        :is-shopping-list="true"
        @add="(product) => $emit('add', product)"
        @remove="(product) => $emit('remove', product)"
        @select-number="({ selectedNumber, product }) => $emit('selectNumber', { selectedNumber, product })"
      />
    </div>
    <div style="flex: 1;">
      <ShoppingPayment />
      <ShoppingSummary @order="$emit('order')" />
    </div>
  </div>
</template>
