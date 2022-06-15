import { acceptHMRUpdate, defineStore } from 'pinia'
import type { CreateCard } from '~/types/Card/CreateCard'

export const useConnectedUser = defineStore('createCard', () => {
  const { $patch } = useConnectedUser()
  const card: CreateCard = $ref()

  function setCard(newCard: CreateCard): void {
    $patch({ card: newCard})
  }

  return {
    setCard,
    card,
  }
})


