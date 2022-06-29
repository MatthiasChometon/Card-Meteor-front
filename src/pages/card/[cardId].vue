<script setup lang="ts">
import { useMutation, useQuery } from '@vue/apollo-composable'
import { useHtmlToPicture } from '~/composables/useHtmlToPicture'
import { useRouterParams } from '~/composables/useRouterParams'
import { GET_CARD } from '~/graphql/card/get'
import { UPDATE_CARD } from '~/graphql/card/update'
import { useInCreationCard } from '~/stores/card/create'
import { useNotification } from '~/stores/notification'

const { cardId } = useRouterParams<{ cardId: number }>()
const id = Number(cardId)
const inCreationCard = useInCreationCard()
const { getPicturePath, picture: cardPicture } = useHtmlToPicture('cardCreation')
const { sendNotification } = useNotification()

const { result } = useQuery(GET_CARD, { id }, { fetchPolicy: 'cache-and-network' })
const { mutate: updateCard, onDone } = useMutation(UPDATE_CARD, {
  fetchPolicy: 'network-only',
})

async function update() {
  await getPicturePath()
  const { __typename, backgroundPicture, coverPicture, ...cardWithoutPictures } = inCreationCard.value
  const cardToUpdate = { ...cardWithoutPictures, id }
  const updateParams: any = {
    cardToUpdate,
    coverPicture: cardPicture.value,
  }
  const hasNewBackgroundPicture = backgroundPicture instanceof File
  if (hasNewBackgroundPicture)
    updateParams.backgroundPicture = backgroundPicture
  await updateCard(updateParams)
}
onDone((result) => {
  sendNotification(result, { path: 'card.onUpdateSuccess' }, { path: 'card.onUpdateError' })
})

watch(result, () => {
  const data = result.value.userCard
  if (data === undefined)
    return

  Object.assign(inCreationCard.value, result.value.userCard)
})
</script>

<template>
  <CardCreation @click-validate-card="update" />
</template>
