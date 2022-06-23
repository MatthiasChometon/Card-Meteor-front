<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <router-link to="/card/create">
    <q-btn color="primary">
      {{ t('homepage.createButton') }}
    </q-btn>
  </router-link>
</template>
