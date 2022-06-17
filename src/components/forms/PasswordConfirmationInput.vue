<script setup lang="ts">
const { t } = useI18n()
const isPasswordVisible: boolean = $ref(false)
const isRepeatedPasswordVisible: boolean = $ref(false)
const props = defineProps<{
  password: string
}>()

const password = ref(props.password)
const repeatedPassword = $ref('')
const emit = defineEmits(['update'])
watch(password, () => emit('update', password.value))
</script>

<template>
  <q-input
    v-model="password"
    :rules="[val => val && val.length > 6 || t('form.rulesError.empty', { key: t('register.password') })]" lazy-rules
    outlined :type="isPasswordVisible ? 'text' : 'password'" :label="t('register.password')"
  >
    <template #append>
      <q-icon
        :name="isPasswordVisible ? 'visibility' : 'visibility_off'" class="cursor-pointer"
        @click="isPasswordVisible = !isPasswordVisible"
      />
    </template>
  </q-input>

  <q-input
    v-model="repeatedPassword" outlined :label="t('register.repeatedPassword')" lazy-rules
    :rules="[val => val && val === password || t('form.rulesError.repeatedPasswordNotValid')]"
    :type="isRepeatedPasswordVisible ? 'text' : 'password'"
  >
    <template #append>
      <q-icon
        :name="isRepeatedPasswordVisible ? 'visibility' : 'visibility_off'" class="cursor-pointer"
        @click="isRepeatedPasswordVisible = !isRepeatedPasswordVisible"
      />
    </template>
  </q-input>
</template>
