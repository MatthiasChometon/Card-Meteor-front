<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{
  isValid: boolean
}>()
const validText = computed(() => props.isValid ? 'validated' : 'notValidated')
</script>

<template>
  <div class="flex justify-center content-center q-pr-md">
    <q-icon color="primary" name="done" class="icon q-primary" />
    <div class="flex justify-center content-center text-primary">
      {{ t(`card.create.comment.${validText}`) }}
    </div>
  </div>
</template>
