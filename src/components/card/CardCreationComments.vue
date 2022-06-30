<script setup lang="ts">
import { useCardComments } from '~/stores/card/comments'

const { t } = useI18n()
const comments = useCardComments()
</script>

<template>
  <div class="flex column jsutify-center content-center">
    <div class="flex justify-center text-h5 text-primary">
      {{ t('card.comment.title') }}
    </div>

    <div v-if="comments?.length === 0" class="q-pa-lg text-grey text-italic">
      {{ t('card.comment.empty') }}
    </div>

    <div v-if="comments?.length > 0">
      <CardComment
        v-for="comment in comments" :key="new Date(comment.creationDate).getTime()"
        :comment="comment.comment" :creation-date="new Date(comment.creationDate)"
      />
    </div>
  </div>
</template>
