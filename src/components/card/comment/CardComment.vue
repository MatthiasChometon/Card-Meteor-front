<script setup lang="ts">
const props = defineProps<{
  comment: string
  creationDate: Date
}>()
</script>

<template>
  <div class="primary-border q-pa-sm q-ma-md">
    <div class="flex justify-between">
      <CardCommentDate :creation-date="props.creationDate" />
    </div>
    <div class="flex justify-center q-pa-sm text-secondary">
      "{{ props.comment }}"
    </div>
  </div>
</template>
