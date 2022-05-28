import { acceptHMRUpdate, defineStore } from 'pinia'
import { UserRoles } from '../../enums/users/UserRoles'
import type { ConnectedUser } from '~/enums/users/ConnectedUser'

export const useConnectedUser = defineStore('connectedUser', () => {
  let connectedUser: ConnectedUser | undefined = $ref()
  const isValidator: boolean = connectedUser?.role === UserRoles.validator
  const isUser: boolean = connectedUser?.role === UserRoles.user

  function setConnectedUser(user: ConnectedUser): void {
    connectedUser = user
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
