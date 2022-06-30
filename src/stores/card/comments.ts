import { createGlobalState } from '@vueuse/core'
import type { CardComment } from '~/types/card/CardComment'

const cardsComments: CardComment[] = []

export const useCardComments = createGlobalState(
  () => ref(cardsComments),
)
