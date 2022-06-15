<script setup lang="ts">
const { locale, t } = useI18n()

const localeOptions = $ref([
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Francais' },
])
</script>

<template>
  <q-select
    v-model="locale"
    :options="localeOptions"
    :label="t('button.switchLanguage')"
    outlined
    emit-value
    map-options
    options-dense
    style="min-width: 160px"
  />
</template>
