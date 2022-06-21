import type { ComputedRef } from 'vue'

export function useCardCoverPicture(coverPicture: string): { picture: ComputedRef<string> } {
  const serverUrl = import.meta.env.VITE_GRAPHQL_URL
  const picture = computed(() => `${serverUrl}/cover/${coverPicture}`)

  return { picture }
}
