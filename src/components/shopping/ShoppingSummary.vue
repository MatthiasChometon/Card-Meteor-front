<script setup lang="ts">
const { t } = useI18n()

const 
</script>

<template>
  <div class="primary-border q-ma-md q-pa-md flex justify-center columns">
    <div class="text-primary text-h4 q-pt-md">
      {{ t('product.shopping.summary.title') }}
    </div>
    <div>
      <div>   {{ t('product.shopping.summary.articles') }}</div>
    <div></div>
    </div>

    {{ t('product.shopping.summary.delivery') }}

    {{ t('product.shopping.summary.total') }}
    <q-btn>
      {{ t('product.shopping.summary.validate') }}
    </q-btn>
  </div>
</template>
