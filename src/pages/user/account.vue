<!-- <script setup lang="ts">
import { useMutation } from '@vue/apollo-composable'
import type { Ref } from '@vue/runtime-dom'
import { GET_ACCOUNT } from '~/graphql/account/get'
import { MODIFY_ACCOUNT } from '~/graphql/account/modify'
import { useNotification } from '~/stores/notification'
import { useAccount } from '~/stores/users/account'
import { useConnectedUser } from '~/stores/users/connected'

const { t } = useI18n()
const { sendNotification } = useNotification()
const { updateConnectedUser } = useConnectedUser()
const account = useAccount()
const { mutate: getAccount, onDone: onGetDone, loading: isLoading } = useMutation(GET_ACCOUNT)
const { mutate: modify, onDone: onModifyDone } = useMutation(MODIFY_ACCOUNT, {
  fetchPolicy: 'network-only',
})

const newPassword: Ref<string> = ref('')
const hasToModifyPassword = $ref(false)

function modifyAccount() {
  const { __typename, ...userValue } = account.value
  const input = hasToModifyPassword ? { ...userValue, password: newPassword.value } : userValue
  modify({ input })
}

onBeforeMount(() => getAccount())
onGetDone(result => account.value = result.data?.account)
onModifyDone((result) => {
  sendNotification(result, { path: 'account.onModifySuccess' }, { path: 'account.onModifyError' })
  if (result.errors)
    return
  updateConnectedUser(result.data.updateAccount)
})
</script>

<template>
  <div v-if="!isLoading" class="full-height flex justify-center items-center column">
    <div class="flex justify-center text-h5 q-pb-md text-primary">
      {{ t('account.title') }}
    </div>

    <q-form class="q-gutter-md q-pt-md" @submit="modifyAccount">
      <q-input
        v-model="account.firstName" outlined :label="t('register.firstName')" lazy-rules
        :rules="[val => val && val.length > 0 || t('form.rulesError.empty', { key: t('register.firstName') })]"
      />

      <q-input
        v-model="account.lastName" outlined :label="t('register.lastName')" lazy-rules
        :rules="[val => val && val.length > 0 || t('form.rulesError.empty', { key: t('register.lastName') })]"
      />

      <q-input
        v-model="account.username" outlined :label="t('register.username')" lazy-rules
        :rules="[val => val && val.length > 0 || t('form.rulesError.empty', { key: t('register.username') })]"
      />

      <EmailInput :email="account.email" @update="(email) => account.email = email" />
      <PhoneInput :phone="account.phone" @update="(phone) => account.phone = phone" />

      <q-toggle
        v-model="hasToModifyPassword"
        color="secondary"
        :label="t('account.hasToModifyPassword')"
      />
      <PasswordConfirmationInput v-if="hasToModifyPassword" :password="newPassword" @update="(password) => newPassword = password" />

      <q-card-actions align="center">
        <q-btn color="primary" type="submit" :label="t('account.modifyButton')" />
      </q-card-actions>
    </q-form>
  </div>
</template> -->

<template>
  test
</template>
