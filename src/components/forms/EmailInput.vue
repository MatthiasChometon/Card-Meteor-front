<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{
  email: string
}>()
const email = ref(props.email)
const isEmailValid = $computed(() => email.value.match(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
))
const emit = defineEmits(['update'])
watch(email, () => emit('update', email))
</script>

<template>
  <q-input
    v-model="email" outlined :label="t('register.email')" lazy-rules
    :rules="[val => val && isEmailValid || t('form.rulesError.emailNotValid')]"
  />
</template>
