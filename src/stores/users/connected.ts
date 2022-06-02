import { acceptHMRUpdate, defineStore } from 'pinia'
import { UserRoles } from '../../enums/users/UserRoles'
import type { ConnectedUser } from '~/types/user/ConnectedUser'
import type { LoginResponse } from '~/types/user/LoginResponse'

export const useConnectedUser = defineStore('connectedUser', () => {
  let connectedUser: ConnectedUser | undefined = $ref()
  const isValidator: boolean = connectedUser?.role === UserRoles.validator
  const isUser: boolean = connectedUser?.role === UserRoles.user

  function setConnectedUser({ user, accessToken, refreshToken }: LoginResponse): void {
    connectedUser = user
    const storageToken = useStorage('tokens', { refreshToken, accessToken })
    storageToken.value = { refreshToken, accessToken }
  }

  return {
    isValidator,
    isUser,
    setConnectedUser,
    connectedUser,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useConnectedUser, import.meta.hot))
