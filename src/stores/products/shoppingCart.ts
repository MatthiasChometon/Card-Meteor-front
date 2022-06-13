import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Product } from '~/types/product/list/Product'
import type { PaypalPayment } from '~/types/product/shopping/PaypalPayment'
import type { ShoppingProducts } from '~/types/product/shopping/ShoppingProducts'
import type { ShoppingSummary } from '~/types/product/shopping/ShoppingSummary'

export const useShoppingCart = defineStore('shoppingCart', () => {
  const shoppingCart: ShoppingProducts = $ref([])
  const shoppingPayment: PaypalPayment = $ref({
    email: '',
    password: '',
  })
  const shoppingSummary: ShoppingSummary = $ref({
    totalPrice: 0,
    shippingCostPrice: 4,
    productsPrice: 0,
  })

  watch(shoppingCart, () => {
    shoppingSummary.productsPrice = computedProductsPrice()
    shoppingSummary.totalPrice = computedTotalPrice()
  })

  function computedProductsPrice(): number {
    const total = shoppingCart.reduce((total, product) => total + product.number * product.price, 0)
    return total
  }

  function computedTotalPrice(): number {
    const { productsPrice, shippingCostPrice } = shoppingSummary
    const total = productsPrice + shippingCostPrice
    return total
  }

  function addProduct(product: Product): void {
    const index: number = getProductIndex(product)
    const number = (shoppingCart[index]?.number ?? 0) + 1
    const productToAdd = { ...product, number }
    if (index !== -1)
      shoppingCart[index] = productToAdd

    else
      shoppingCart.push(productToAdd)
  }

  function removeProduct(product: Product): void {
    const index: number = getProductIndex(product)
    const hasToRemoveFromList = shoppingCart[index]?.number === 1
    if (hasToRemoveFromList)
      shoppingCart.splice(index, 1)
    else
      shoppingCart[index].number = shoppingCart[index]?.number - 1
  }

  function chooseProductNumber(product: Product, number: number): void {
    const index: number = getProductIndex(product)
    if (number === 0)
      shoppingCart.splice(index, 1)
    else shoppingCart[index].number = number
  }

  function getProductIndex(product: Product): number {
    return shoppingCart.findIndex(shoppingProduct => shoppingProduct.id === product.id)
  }

  return {
    shoppingCart,
    shoppingPayment,
    shoppingSummary,
    addProduct,
    removeProduct,
    chooseProductNumber,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useShoppingCart, import.meta.hot))
