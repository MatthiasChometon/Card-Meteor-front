import { createGlobalState, useStorage } from '@vueuse/core'
import { OrderState } from '~/enums/orders/OrderState'

const userOrdersState = OrderState.beingDelivered

export const useUserOrdersState = createGlobalState(
  () => useStorage('userOrdersState', userOrdersState),
)
