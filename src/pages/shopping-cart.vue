<script setup lang="ts">
import { useNotification } from '~/stores/notification'
import { useShoppingCart } from '~/stores/products/shoppingCart'
const { shoppingCart, addProduct, removeProduct, chooseProductNumber, order, onDone } = useShoppingCart()
const { sendNotification } = useNotification()
const router = useRouter()

onDone((result) => {
  const trackingNumber = result.data?.createOrder?.trackingNumber
  const variables = { trackingNumber }
  sendNotification(result, { path: 'card.onCreationSuccess', variables }, { path: 'card.onCreationError' })
  if (result.errors)
    return
  router.replace('/product/list')
})
</script>

<template>
  <ShoppingDetails
    :shopping-products="shoppingCart" @add="(product) => addProduct(product)"
    @remove="(product) => removeProduct(product)"
    @select-number="({ product, selectedNumber }) => chooseProductNumber(product, selectedNumber)" @order="order"
  />
</template>
