<script setup lang="ts">
import { useMutation, useQuery } from '@vue/apollo-composable'
import { useRouterParams } from '~/composables/useRouterParams'
import { useServerPicture } from '~/composables/useServerPicture'
import { GET_CARD_FOR_COMMENT } from '~/graphql/card/comment/get'
import { SEND_CARD_COMMENT } from '~/graphql/card/comment/send'
import { VALIDATE_CARD } from '~/graphql/card/comment/validate'
import { useCardComments } from '~/stores/card/comments'
import { useInCreationCard } from '~/stores/card/create'
import { useNotification } from '~/stores/notification'

const { cardId } = useRouterParams<{ cardId: number }>()
const id = Number(cardId)
const inCreationCard = useInCreationCard()
const comments = useCardComments()
const router = useRouter()
const { sendNotification } = useNotification()
const { result, loading: isLoading } = useQuery(GET_CARD_FOR_COMMENT, { id }, { fetchPolicy: 'cache-and-network' })
const { mutate: sendComment, onDone: onCommendSend } = useMutation(SEND_CARD_COMMENT)
const { mutate: validateCard, onDone: onValidatedCard } = useMutation(VALIDATE_CARD)

watch(result, () => {
  const data = result.value.card
  if (data === undefined)
    return

  const { comments: userCardComments, ...userCard } = result.value.card
  Object.assign(inCreationCard.value, userCard)
  Object.assign(comments.value, userCardComments)
})

const coverPicture = computed(() => {
  const picture = inCreationCard.value.coverPicture
  return typeof picture === 'string' ? picture : ''
})

const { picture: pictureToDisplay } = useServerPicture('cards/cover', coverPicture)

onCommendSend((result) => {
  sendNotification(result, { path: 'card.comment.onSendSuccess' }, { path: 'card.comment.onSendError' })
  router.replace('/product/list')
})

onValidatedCard((result) => {
  sendNotification(result, { path: 'card.comment.onValidationSuccess' }, { path: 'card.comment.onValidationError' })
  router.replace('/product/list')
})
</script>

<template>
  <div v-if="!isLoading" class="flex" style="height: 100%;">
    <div style="flex: 1;" class="justify-center flex content-center">
      <q-img style="width: 80%;" :src="pictureToDisplay" />
    </div>
    <div style="flex: 1;" class="justify-center flex content-center column">
      <CardCommentForm
        @validate="validateCard({ id })"
        @send-comment="(comment) => sendComment({ comment: { cardId: id, comment } })"
      />
    </div>
    <div style="flex: 1;" class="justify-center flex content-center">
      <CardCreationComments />
    </div>
  </div>
</template>
