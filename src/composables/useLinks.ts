import { useUserRole } from './useUserRole'
import { useUserLinks } from '~/stores/links/user'
import { useVisitorLinks } from '~/stores/links/visitor'

export function useLinks() {
  const userLinks = useUserLinks()
  const visitorLinks = useVisitorLinks()
  const { isVisitor } = useUserRole()
  const allLinks = computed(() => !isVisitor.value ? visitorLinks.value.concat(userLinks.value) : visitorLinks.value)

  return {
    userLinks,
    visitorLinks,
    allLinks,
  }
}
