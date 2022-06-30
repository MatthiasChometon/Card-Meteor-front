<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
<div>
 <div class="text-h6 q-pa-xs " >
  {{ t('Order.List-Product') }}
    </div>
    <div class="row q-pa-md">
       <div> <Badge/> </div>  <div class="q-ml-xl">Produit</div>
    </div>
</div>
</template>
