import type { CreateGlobalStateReturn, RemovableRef } from '@vueuse/core'
import { createGlobalState } from '@vueuse/core'
import type { Link } from '~/types/Link'

const visitorLinks: Link[] = [
  {
    page: '/',
    text: 'navbar.homepage',
  },
  {
    page: '/product/list',
    text: 'navbar.products',
  },
  {
    page: '/card/create',
    text: 'navbar.createMyProduct',
  },
]

export const useVisitorLinks: CreateGlobalStateReturn<RemovableRef<Link[]>> = createGlobalState(
  () => ref(visitorLinks),
)
