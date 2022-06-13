<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex justify-center">
    {{ t('login.registerLink.label') }}
    <router-link
      class="text-primary" style="margin-left: 3px;" to="/authentication/register"
    >
      {{ t('login.registerLink.link') }}
    </router-link>
  </div>
</template>
