<script setup lang="ts">
import { useMutation } from '@vue/apollo-composable'
import type { LoginInput } from '~/types/user/LoginInput'
import { LOGIN } from '~/graphql/Login'
import { useNotification } from '~/stores/notification'
import { useConnectedUser } from '~/stores/users/connected'
const { t } = useI18n()
const { sendNotification } = useNotification()
const { setConnectedUser } = useConnectedUser()
const router = useRouter()

const { mutate: login, onDone } = useMutation(LOGIN, {
  fetchPolicy: 'network-only',
})

const isPasswordVisible: boolean = $ref(false)
const loginInput: LoginInput = $ref({ email: '', password: '' })

onDone((result) => {
  const datas = result.data?.login
  const variables = { username: datas?.user?.username }
  sendNotification(result, { path: 'login.onSuccess', variables }, { path: 'login.onError' })
  if (result.errors)
    return
  setConnectedUser(datas)
  router.replace('/')
})

</script>

<template>
  <div class="full-height flex justify-center items-center column">
    <div class="flex justify-center text-h5 q-pb-md text-primary">
      connection
    </div>
    <q-form class="q-gutter-md q-pt-md" @submit="login({ input: loginInput })">
      <q-input
        v-model="loginInput.email" outlined :label="t('login.email')" lazy-rules
        :rules="[val => val && val.length > 0 || t('form.rulesError.empty', { key: t('login.email') })]"
      />

      <q-input
        v-model="loginInput.password"
        :rules="[val => val && val.length > 6 || t('form.rulesError.passwordTooShort', { passwordLength: 8 })]"
        lazy-rules outlined :type="isPasswordVisible ? 'text' : 'password'" :label="t('login.password')"
      >
        <template #append>
          <q-icon
            :name="isPasswordVisible ? 'visibility' : 'visibility_off'" class="cursor-pointer"
            @click="isPasswordVisible = !isPasswordVisible"
          />
        </template>
      </q-input>

      <q-card-actions align="center">
        <q-btn label="login" type="submit" color="primary" />
      </q-card-actions>

      <RegisterLink />
    </q-form>
  </div>
</template>
