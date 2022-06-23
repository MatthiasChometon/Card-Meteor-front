<script setup lang="ts">
defineEmits(['clickValidateCard'])
</script>

<template>
  <div class="flex" style="height: 100%;">
    <div style="flex: 1;" class="justify-center flex content-center">
      <CardCreationRendering />
    </div>
    <div style="flex: 1;" class="justify-center flex content-center">
      <CardCreationForm />
    </div>
    <div style="flex: 1;" class="justify-center flex content-center">
      <CardCreationComments @click-validate-card="$emit('clickValidateCard')" />
    </div>
  </div>
</template>
