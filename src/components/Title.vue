<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{
  traductionText: string
}>()
</script>

<template>
  <div class="flex justify-center text-h5 q-pb-md text-primary">
    {{ t(props.traductionText) }}
  </div>
</template>
