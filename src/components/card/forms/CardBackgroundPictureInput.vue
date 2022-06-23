<script setup lang="ts">
import type { Ref } from 'vue'
import { useInCreationCard } from '~/stores/card/create'
const { t } = useI18n()
const inCreationCard = useInCreationCard()
const backgroundPicture: Ref<null | File> = ref(null)
watch(backgroundPicture, () => {
  const isFile = backgroundPicture.value instanceof File
  if (!isFile)
    return
  inCreationCard.value.backgroundPicture = backgroundPicture.value
})
</script>

<template>
  <q-file v-model="backgroundPicture" class="q-pa-sm" outlined :label="t('card.create.backgroundPicture')">
    <template #prepend>
      <q-icon name="attach_file" />
    </template>
  </q-file>
</template>
