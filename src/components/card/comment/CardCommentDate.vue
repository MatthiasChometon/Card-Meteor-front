<script setup lang="ts">
const props = defineProps<{
  creationDate: Date
}>()
</script>

<template>
  <div class="text-primary q-pa-md flex">
    <div class="q-pr-md">
      {{ props.creationDate.toLocaleDateString() }}
    </div>
    <div class="q-pl-md">
      {{ props.creationDate.getHours() }}h{{ props.creationDate.getHours() }}
    </div>
  </div>
</template>
