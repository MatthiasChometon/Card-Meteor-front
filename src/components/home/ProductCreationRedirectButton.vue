<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <router-link to="/product/card/create">
    <q-btn color="primary">
      {{ t('homepage.createButton') }}
    </q-btn>
  </router-link>
</template>
