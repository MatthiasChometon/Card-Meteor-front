<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex justify-center">
    {{ t('register.loginLink.label') }}
    <router-link
      class="text-primary" style="margin-left: 3px;" to="/authentication/login"
    >
      {{ t('register.loginLink.link') }}
    </router-link>
  </div>
</template>
