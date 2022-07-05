<script setup lang="ts">
const { t } = useI18n()
const emit = defineEmits(['validate', 'sendComment'])

const newComment = ref('')
const isCardValidated = ref(false)

const buttonText = computed(() => {
  const isValidatedKey = isCardValidated.value ? 'validate' : 'sendComment'
  return t(`card.comment.form.${isValidatedKey}`)
})

function click() {
  isCardValidated.value ? emit('validate') : emit('sendComment', newComment.value)
}
</script>

<template>
  <Title traduction-text="card.comment.form.title" />
  <div class="flex justify-center content-center q-pb-md">
    <q-checkbox v-model="isCardValidated" color="primary" />
    <div class="flex justify-center content-center">
      {{ t('card.comment.form.validated') }}
    </div>
  </div>
  <q-input
    v-if="!isCardValidated" v-model="newComment" outlined color="primary"
    :label="t('card.comment.form.comment')" type="textarea" autogrow
  />
  <q-btn style="min-width: 240px;" class="q-my-md" color="primary" @click="click">
    {{ buttonText }}
  </q-btn>
</template>
