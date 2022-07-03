<script setup lang="ts">
defineEmits(['clickValidateCard'])
</script>

<template>
  <div class="flex" style="height: 100%;">
    <div style="flex: 1;" class="justify-center flex content-center">
      <CardCreationRendering />
    </div>
    <div style="flex: 1;" class="justify-center flex content-center card-creation-form-container q-py-md">
      <CardCreationForm />
    </div>
    <div style="flex: 1; min-width: 270px;" class="justify-center flex content-center column q-py-md">
      <CardCreationComments />
      <CardCreationValidateButton @click-validate-card="$emit('clickValidateCard')" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: $breakpoint-sm-min) {
  .card-creation-form-container { min-width: 450px; }
}

@media (max-width: $breakpoint-xs-max) {
  .card-creation-form-container { min-width: 400px; }
}
</style>
