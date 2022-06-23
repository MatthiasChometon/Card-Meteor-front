import type { ComputedRef } from 'vue'

export function useRouterParams<T>(): T {
  const router = useRouter()
  const params: ComputedRef<T> = computed(() => {
    const params: any = router.currentRoute.value.params
    return params
  })
  return params.value
}
