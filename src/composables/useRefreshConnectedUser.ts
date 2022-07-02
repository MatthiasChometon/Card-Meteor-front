import { useMutation } from '@vue/apollo-composable'
import { REFRESH } from '~/graphql/authentication/refresh'
import { useConnectedUser } from '~/stores/users/connected'

interface UseRefreshConnectedUser {
  refreshConnectedUser: () => Promise<void>
}

export function useRefreshConnectedUser(): UseRefreshConnectedUser {
  const { setConnectedUser } = useConnectedUser()

  const { mutate: refreshTokens, onDone: onRefreshTokens } = useMutation(REFRESH, {
    fetchPolicy: 'network-only',
  })

  async function refreshConnectedUser() {
    const refreshToken = localStorage.getItem('refreshToken')
    if (refreshToken === null)
      return
    await refreshTokens({ refreshToken })
  }

  onRefreshTokens((result) => {
    const datas = result.data?.refreshTokens
    if (result.errors)
      return
    setConnectedUser(datas)
  })

  const refreshUserInterval = computed(() => {
    const accessTokenExpirationTime = import.meta.env.VITE_ACCESS_TOKEN_EXPIRATION_TIME ?? ''
    const interval: number = +accessTokenExpirationTime
    return interval
  })

  useIntervalFn(() => {
    refreshConnectedUser()
  }, refreshUserInterval)

  onBeforeMount(() => refreshConnectedUser())

  return { refreshConnectedUser }
}
