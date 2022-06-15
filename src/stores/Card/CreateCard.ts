import type { CreateGlobalStateReturn, RemovableRef } from '@vueuse/core'
import { createGlobalState, useStorage } from '@vueuse/core'
import type { CreateCard } from '../../types/Card/CreateCard'

export const useCreateCard: CreateGlobalStateReturn<RemovableRef<CreateCard>> = createGlobalState(
  () => useStorage('vueuse-local-storage', {
    name: 'c gagnééé',
    level: 0,
    attribute: '',
    file: '',
    description: '',
    attack: 0,
    defense: 0,
    archetype: '',
  }),
)
