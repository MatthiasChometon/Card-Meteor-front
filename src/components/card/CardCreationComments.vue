<script setup lang="ts">
const { t } = useI18n()
const comments = ['rere']
defineEmits(['clickValidateCard'])
</script>

<template>
  <div class="flex column jsutify-center content-center">
    <div class="flex justify-center text-h5 text-primary">
      {{ t('card.create.comment.title') }}
    </div>

    <div v-if="comments === []" class="q-pa-lg text-grey text-italic">
      {{ t('card.create.comment.empty') }}
    </div>

    <div v-if="comments.length > 0">
      <CardComment />
    </div>

    <q-btn color="primary" class="text-primary text-weight-medium" @click="$emit('clickValidateCard')">
      {{ t('card.create.button') }}
    </q-btn>
  </div>
</template>
