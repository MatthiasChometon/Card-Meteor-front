import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ConnectedUser } from '~/types/user/ConnectedUser'
import type { LoginResponse } from '~/types/user/LoginResponse'

export const useConnectedUser = defineStore('connectedUser', () => {
  const { $patch } = useConnectedUser()
  const connectedUser: ConnectedUser = $ref({
    role: 'visitor',
  })

  function setConnectedUser({ user, accessToken, refreshToken }: LoginResponse): void {
    $patch({ connectedUser: user })
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
  }

  function updateConnectedUser(user: ConnectedUser): void {
    $patch({ connectedUser: user })
  }

  return {
    updateConnectedUser,
    setConnectedUser,
    connectedUser,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useConnectedUser, import.meta.hot))
