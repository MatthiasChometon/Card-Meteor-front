<script setup lang="ts">
const { t } = useI18n()
defineEmits(['clickValidateCard'])
</script>

<template>
  <q-btn color="primary" class="text-primary text-weight-medium" @click="$emit('clickValidateCard')">
    {{ t('card.create.button') }}
  </q-btn>
</template>
