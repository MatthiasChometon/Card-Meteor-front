<script setup lang="ts">
const { locale } = useI18n()

const localeOptions = $ref([
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Francais' },
])
</script>

<template>
  <q-select
    v-model="locale"
    :options="localeOptions"
    label="website language"
    dense
    borderless
    emit-value
    map-options
    options-dense
    style="min-width: 150px"
  />
</template>
