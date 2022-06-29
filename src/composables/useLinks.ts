import { useUserRole } from './useUserRole'
import { useUserLinks } from '~/stores/links/user'
import { useVisitorLinks } from '~/stores/links/visitor'

export function useLinks() {
  const userLinks = useUserLinks()
  const visitorLinks = useVisitorLinks()
  const { isUser } = useUserRole()
  const allLinks = computed(() => isUser.value ? visitorLinks.value.concat(userLinks.value) : visitorLinks.value)

  return {
    userLinks,
    visitorLinks,
    allLinks,
  }
}
