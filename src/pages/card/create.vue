<script setup lang="ts">
import { useMutation } from '@vue/apollo-composable'
import { useQuasar } from 'quasar'
import { useNotification } from '../../stores/notification'
import { CREATE_CARD } from '~/graphql/card/create'
import { useInCreationCard } from '~/stores/card/create'
import { useHtmlToPicture } from '~/composables/useHtmlToPicture'
import { useUserRole } from '~/composables/useUserRole'

const { isVisitor, isUser } = useUserRole()
const { t } = useI18n()
const $q = useQuasar()
const { sendNotification } = useNotification()
const router = useRouter()
const inCreationCard = useInCreationCard()
const { getPicturePath, picture: cardPicture } = useHtmlToPicture('cardCreation')
const { mutate: createCard, onDone } = useMutation(CREATE_CARD, {
  fetchPolicy: 'network-only',
})

function validateCard() {
  if (isVisitor.value) {
    const message = t('card.create.notConnected')
    $q.notify({ message, color: 'info' })
    router.replace('/authentication/register')
  }

  if (isUser.value)
    create()
}

async function create() {
  await getPicturePath()
  const { __typename, backgroundPicture, coverPicture, ...newCardWithoutPictures } = inCreationCard.value
  const newCard = { ...newCardWithoutPictures }
  createCard({
    newCard,
    coverPicture: cardPicture.value,
    backgroundPicture,
  })
}
onDone((result) => {
  sendNotification(result, { path: 'card.onCreationSuccess' }, { path: 'card.onCreationError' })
  const id = result.data.createCard.id
  router.replace(`/card/${id}`)
})
defineEmits(['clickValidateCard'])
</script>

<template>
  <CardCreation @click-validate-card="validateCard" />
</template>
