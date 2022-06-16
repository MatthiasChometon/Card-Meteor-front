<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{
  phone: string
}>()
const phone = ref(props.phone)
const isPhoneValid = $computed(() => phone.value.match(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
))
const emit = defineEmits(['update'])
watch(phone, () => emit('update', phone))
</script>

<template>
  <q-input
    v-model="phone" outlined :label="t('register.phone')" lazy-rules
    :rules="[val => val && isPhoneValid || t('form.rulesError.phoneNotValid')]"
  />
</template>
