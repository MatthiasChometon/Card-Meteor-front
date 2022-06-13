import { acceptHMRUpdate, defineStore } from 'pinia'
import { useQuasar } from 'quasar'
import type { GraphqlResult } from '../types/graphql/GraphqlResult'
import type { Translation } from '~/types/translation/Translation'

export const useNotification = defineStore('notification', () => {
  const $q = useQuasar()
  const { t } = useI18n()

  function sendNotification(result: GraphqlResult, successMessage: Translation, errorMessage: Translation) {
    const color = result.errors ? 'warning' : 'info'
    const messageToTranslate = result.errors ? errorMessage : successMessage
    const message = t(messageToTranslate.path, { ...messageToTranslate.variables })
    $q.notify({ color, textColor: 'white', message })
  }

  return { sendNotification }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useNotification, import.meta.hot))
