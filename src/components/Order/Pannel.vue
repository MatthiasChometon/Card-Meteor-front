<script setup lang="ts">
const { t } = useI18n()
const tab = ref('mails')
</script>

<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="width:50%;vertical-align: middle;">
 <q-card>
      <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" narrow-indicator>
        <q-tab name="mails" :label="t('Order.pannel-encour')" />
        <q-tab name="alarms" :label="t('Order.outForDelivery')" />
        <q-tab name="movies" :label="t('Order.delevery')" />
      </q-tabs>
</q-card>

      <Order />

    </div>
  </div>
</template>
