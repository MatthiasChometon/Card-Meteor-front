import type { CreateGlobalStateReturn, RemovableRef } from '@vueuse/core'
import { createGlobalState } from '@vueuse/core'
import { useProductListFilter } from '../products/listFilter'
import type { Link } from '~/types/Link'

const userLinks: Link[] = [
  {
    page: '/user/account',
    text: 'links.account',
  },
  {
    page: '/user/orders',
    text: 'links.order',
  },
  {
    page: '/product/list',
    text: 'links.products',
    event: () => setEditor(),
  },
]

function setEditor() {
  const { setEditor } = useProductListFilter()
  setEditor(true)
}

export const useUserLinks: CreateGlobalStateReturn<RemovableRef<Link[]>> = createGlobalState(
  () => ref(userLinks),
)
