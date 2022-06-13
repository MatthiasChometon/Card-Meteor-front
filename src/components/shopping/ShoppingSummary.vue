<script setup lang="ts">
import { useShoppingCart } from '~/stores/products/shoppingCart'

const { shoppingSummary } = useShoppingCart()
const { t } = useI18n()
defineEmits(['order'])
</script>

<template>
  <div class="primary-border q-mx-md q-pa-md flex justify-center column content-center">
    <div class="text-primary text-h4 q-pt-md">
      {{ t('product.shopping.summary.title') }}
    </div>
    <div class="flex justify-between q-pt-lg text-subtitle1">
      <div>{{ t('product.shopping.summary.articles') }}</div>
      <div>{{ shoppingSummary.productsPrice }} €</div>
    </div>
    <div class="flex justify-between q-pt-sm text-subtitle1">
      <div>{{ t('product.shopping.summary.delivery') }}</div>
      <div>{{ shoppingSummary.shippingCostPrice }} €</div>
    </div>
    <div class="flex justify-between q-py-lg text-h5">
      <div>
        {{ t('product.shopping.summary.total') }}
      </div>
      <div>{{ shoppingSummary.totalPrice }} €</div>
    </div>
    <q-btn color="primary" :disabled="shoppingSummary.productsPrice === 0" @click="$emit('order')">
      {{ t('product.shopping.summary.validate') }}
    </q-btn>
  </div>
</template>
