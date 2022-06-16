<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <router-link to="/product/list" class="flex justify-center content-center">
    <div
      class="text-h6 text-center text-weight-thin text-italic flex justify-center content-center"
      style="text-shadow: white 1px 0 10px; color: white;"
    >
      {{ t('button.productList') }}
    </div>
    <q-icon name="chevron_right" class="icon q-primary flex justify-center content-center home-icon" />
  </router-link>
</template>
