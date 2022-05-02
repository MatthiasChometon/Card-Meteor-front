<script setup lang="ts">
import { useQuasar } from 'quasar'

const $q = useQuasar()
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <q-btn :label="t('button.toggle_dark')" color="primary" @click="$q.dark.set(!$q.dark.isActive)" />
  <q-btn :label="t('button.toggle_langs')" color="primary" class="q-ml-sm" @click="toggleLocales" />
</template>
