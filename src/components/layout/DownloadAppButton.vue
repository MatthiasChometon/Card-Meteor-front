<script setup lang="ts">
import { useDownloadMobileApp } from '~/composables/useDownloadMobileApp'

const { download } = useDownloadMobileApp()
</script>

<template>
  <q-icon name="file_download" class="icon home-icon" color="primary" @click="download" />
</template>
