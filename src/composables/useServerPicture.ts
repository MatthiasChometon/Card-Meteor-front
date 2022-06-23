import type { ComputedRef, Ref } from 'vue'

export function useServerPicture(path: string, coverPicture: Ref<string> | string): { picture: ComputedRef<string> } {
  const serverUrl = import.meta.env.VITE_GRAPHQL_URL

  const picture = computed(() => {
    const pictureName = typeof coverPicture === 'string' ? coverPicture : coverPicture.value
    return `${serverUrl}/${path}/${pictureName}`
  })

  return { picture }
}
