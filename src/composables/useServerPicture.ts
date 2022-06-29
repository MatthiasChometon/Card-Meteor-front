import type { ComputedRef, Ref } from 'vue'

export function useServerPicture(path: string, coverPicture: Ref<string> | string): { picture: ComputedRef<string> } {
  const firebaseProjectId = import.meta.env.VITE_FIREBASE_PROJECT_ID
  const serverUrl = `https://firebasestorage.googleapis.com/v0/b/${firebaseProjectId}.appspot.com/o/`
  const encodedPath = encodeURIComponent(`${path}/`)

  const picture = computed(() => {
    const pictureName = typeof coverPicture === 'string' ? coverPicture : coverPicture.value
    return `${serverUrl}${encodedPath}${pictureName}?alt=media`
  })
  return { picture }
}
