import type { CreateGlobalStateReturn, RemovableRef } from '@vueuse/core'
import { createGlobalState, useStorage } from '@vueuse/core'

export const useBurgerMenuButton: CreateGlobalStateReturn<RemovableRef<boolean>> = createGlobalState(
  () => useStorage('vueuse-local-storage', false),
)
