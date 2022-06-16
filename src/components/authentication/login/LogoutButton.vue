<script setup lang="ts">
const { t } = useI18n()
defineEmits(['clickLogout'])
</script>

<template>
  <q-btn color="primary" @click="$emit('clickLogout')">
    {{ t('account.logout') }}
  </q-btn>
</template>
