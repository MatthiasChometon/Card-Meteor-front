<script setup lang="ts">
const { t } = useI18n()
defineEmits(['clickValidateCard'])
</script>

<template>
  <div class="flex" style="height: 100%;">
    <div style="flex: 1;" class="justify-center flex content-center">
      <CardCreationRendering />
    </div>
    <div style="flex: 1;" class="justify-center flex content-center">
      <CardCreationForm />
    </div>
    <div style="flex: 1;" class="justify-center flex content-center">
      <CardCreationComments @click-validate-card="$emit('clickValidateCard')" />
      <q-btn color="primary" class="text-primary text-weight-medium" @click="$emit('clickValidateCard')">
        {{ t('card.create.button') }}
      </q-btn>
    </div>
  </div>
</template>
