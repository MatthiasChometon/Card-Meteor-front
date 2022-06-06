<script setup lang="ts">
import { useMutation } from '@vue/apollo-composable'
import { useNotification } from '~/stores/notification'
import { useConnectedUser } from '~/stores/users/connected'
import { REGISTER } from '~/graphql/Register'
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

const repeatedPassword = $ref('')
const isPasswordVisible: boolean = $ref(false)
const isRepeatedPasswordVisible: boolean = $ref(false)

onDone((result) => {
  const variables = { username: newUser.username }
  sendNotification(result, { path: 'register.onSuccess', variables }, { path: 'register.onError' })
  if (result.errors)
    return

  setConnectedUser(result.data.register)
  router.replace('/')
})

const isEmailValid = $computed(() => newUser.email.match(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
))

const isPhoneValid = $computed(() => newUser.phone.match(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
))

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

      <q-input
        v-model="newUser.email" outlined :label="t('register.email')" lazy-rules
        :rules="[val => val && isEmailValid || t('form.rulesError.')]"
      />

      <q-input
        v-model="newUser.phone" outlined :label="t('register.phone')" lazy-rules
        :rules="[val => val && isPhoneValid || t('form.rulesError.phoneNotValid', { key: t('register.phone') })]"
      />

      <q-input
        v-model="newUser.password"
        :rules="[val => val && val.length > 6 || t('form.rulesError.empty', { key: t('register.password') })]"
        lazy-rules outlined :type="isPasswordVisible ? 'text' : 'password'" :label="t('register.password')"
      >
        <template #append>
          <q-icon
            :name="isPasswordVisible ? 'visibility' : 'visibility_off'" class="cursor-pointer"
            @click="isPasswordVisible = !isPasswordVisible"
          />
        </template>
      </q-input>

      <q-input
        v-model="repeatedPassword" outlined :label="t('register.repeatedPassword')"
        lazy-rules
        :rules="[val => val && val === newUser.password || t('form.rulesError.repeatedPasswordNotValid')]"
        :type="isRepeatedPasswordVisible ? 'text' : 'password'"
      >
        <template #append>
          <q-icon
            :name="isRepeatedPasswordVisible ? 'visibility' : 'visibility_off'" class="cursor-pointer"
            @click="isRepeatedPasswordVisible = !isRepeatedPasswordVisible"
          />
        </template>
      </q-input>

      <q-card-actions align="center">
        <q-btn :label="t('register.title')" type="submit" color="primary" />
      </q-card-actions>

      <LoginLink />
    </q-form>
  </div>
</template>
