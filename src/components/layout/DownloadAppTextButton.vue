<script setup lang="ts">
import { useDownloadMobileApp } from '~/composables/useDownloadMobileApp'

const { t } = useI18n()
const { download } = useDownloadMobileApp()
</script>

<template>
  <q-btn :label="t('downloadAppButton')" color="primary" @click="download" />
</template>
