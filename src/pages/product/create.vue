<script setup lang="ts">
import { useMutation } from '@vue/apollo-composable'
import { useNotification } from '../../stores/notification'
import { CREATE_CARD } from '~/graphql/card/create'
import { useInCreationCard } from '~/stores/card/create'
import { useHtmlToPicture } from '~/composables/useHtmlToPicture'

const { sendNotification } = useNotification()
const inCreationCard = useInCreationCard()
const { getPicturePath, picture: cardPicture } = useHtmlToPicture('cardCreation')
const { mutate: createCard, onDone } = useMutation(CREATE_CARD, {
  fetchPolicy: 'network-only',
})
async function create() {
  await getPicturePath()
  const { __typename, backgroundPicture, coverPicture, ...newCardWithoutPictures } = inCreationCard.value
  const newCard = { ...newCardWithoutPictures }
  createCard({
    newCard,
    coverPicture: cardPicture.value,
    backgroundPicture: inCreationCard.value.backgroundPicture,
  })
}
onDone((result) => {
  sendNotification(result, { path: 'register.onSuccess' }, { path: 'register.onError' })
})
defineEmits(['clickValidateCard'])
</script>

<template>
  <CardCreation @click-validate-card="create" />
</template>
