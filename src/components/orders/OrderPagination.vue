<script setup lang="ts">
const currentPage = ref(1)
const emit = defineEmits(['setNewPagination'])
watch(currentPage, () => emit('setNewPagination', currentPage.value))
</script>

<template>
  <q-card class="q-py-xs flex justify-center">
    <q-pagination
      v-model="currentPage"
      :max="60"
      :max-pages="8"
      :boundary-numbers="false"
      direction-links
      flat
      color="grey-4"
      active-color="primary"
    />
  </q-card>
</template>
