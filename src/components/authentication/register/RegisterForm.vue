<script setup lang="ts">
import { useMutation } from '@vue/apollo-composable'
import { useNotification } from '~/stores/notification'
import { useConnectedUser } from '~/stores/users/connected'
import { REGISTER } from '~/graphql/register'
const { t } = useI18n()
const { sendNotification } = useNotification()
const { setConnectedUser } = useConnectedUser()
const router = useRouter()

const { mutate: register, onDone } = useMutation(REGISTER, {
  fetchPolicy: 'network-only',
})

const newUser = $ref({
  lastName: '',
  firstName: '',
  username: '',
  password: '',
  phone: '',
  email: '',
})

onDone((result) => {
  const variables = { username: newUser.username }
  sendNotification(result, { path: 'register.onSuccess', variables }, { path: 'register.onError' })
  if (result.errors)
    return

  setConnectedUser(result.data.register)
  router.replace('/')
})
</script>

<template>
  <div class="full-height flex justify-center items-center column no-wrap">
    <div class="flex justify-center text-h5 q-pb-md text-primary">
      {{ t('register.title') }}
    </div>
    <q-form class="q-gutter-md q-pt-md" @submit="register({ input: newUser })">
      <q-input
        v-model="newUser.firstName" outlined :label="t('register.firstName')" lazy-rules
        :rules="[val => val && val.length > 0 || t('form.rulesError.empty', { key: t('register.firstName') })]"
      />

      <q-input
        v-model="newUser.lastName" outlined :label="t('register.lastName')" lazy-rules
        :rules="[val => val && val.length > 0 || t('form.rulesError.empty', { key: t('register.lastName') })]"
      />

      <q-input
        v-model="newUser.username" outlined :label="t('register.username')" lazy-rules
        :rules="[val => val && val.length > 0 || t('form.rulesError.empty', { key: t('register.username') })]"
      />

      <EmailInput :email="newUser.email" @update="(email) => newUser.email = email" />
      <PhoneInput :phone="newUser.phone" @update="(phone) => newUser.phone = phone" />
      <PasswordConfirmationInput :password="newUser.password" @update="(password) => newUser.password = password" />

      <q-card-actions align="center">
        <q-btn :label="t('register.title')" type="submit" color="primary" />
      </q-card-actions>

      <LoginLink />
    </q-form>
  </div>
</template>
