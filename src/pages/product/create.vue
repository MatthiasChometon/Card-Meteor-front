<script setup lang="ts">
import { useMutation } from '@vue/apollo-composable'
import { useNotification } from '../../stores/notification'
import { CREATE_CARD } from '~/graphql/card/create'
import { useInCreationCard } from '~/stores/card/create'

const { sendNotification } = useNotification()
const inCreationCard = useInCreationCard()
const { mutate: createCard, onDone } = useMutation(CREATE_CARD, {
  fetchPolicy: 'network-only',
})
function create() {
  const { __typename, ...newCard } = inCreationCard.value
  createCard({ newCard })
}
onDone((result) => {
  sendNotification(result, { path: 'register.onSuccess' }, { path: 'register.onError' })
})
defineEmits(['clickValidateCard'])
</script>

<template>
  <CardCreation @click-validate-card="create" />
</template>
