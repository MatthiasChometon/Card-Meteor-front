<script setup lang="ts">
import { useMutation } from '@vue/apollo-composable'
import { GET_ACCOUNT } from '~/graphql/account/Get'
import { MODIFY_ACCOUNT } from '~/graphql/account/Modify'
import { useNotification } from '~/stores/notification'
import { useAccount } from '~/stores/users/account'
import { useConnectedUser } from '~/stores/users/connected'

const { t } = useI18n()
const { sendNotification } = useNotification()
const { updateConnectedUser } = useConnectedUser()
const user = useAccount()
const { mutate: getAccount, onDone: onGetDone } = useMutation(GET_ACCOUNT)
const { mutate: modify, onDone: onModifyDone } = useMutation(MODIFY_ACCOUNT, {
  fetchPolicy: 'network-only',
})
function modifyAccount() {
  const { __typename, ...input } = user.value
  modify({ input })
}

onBeforeMount(() => getAccount())
onGetDone(result => user.value = result.data?.account)
onModifyDone((result) => {
  sendNotification(result, { path: 'account.onModifySuccess' }, { path: 'account.onModifyError' })
  if (result.errors)
    return
  updateConnectedUser(result.data.updateAccount)
})

const hasToModifyPassword = $ref(false)
</script>

<template>
  <div class="full-height flex justify-center items-center column">
    <div class="flex justify-center text-h5 q-pb-md text-primary">
      {{ t('account.title') }}
    </div>

    <q-form class="q-gutter-md q-pt-md" @submit="modifyAccount">
      <q-input
        v-model="user.firstName" outlined :label="t('register.firstName')" lazy-rules
        :rules="[val => val && val.length > 0 || t('form.rulesError.empty', { key: t('register.firstName') })]"
      />

      <q-input
        v-model="user.lastName" outlined :label="t('register.lastName')" lazy-rules
        :rules="[val => val && val.length > 0 || t('form.rulesError.empty', { key: t('register.lastName') })]"
      />

      <q-input
        v-model="user.username" outlined :label="t('register.username')" lazy-rules
        :rules="[val => val && val.length > 0 || t('form.rulesError.empty', { key: t('register.username') })]"
      />

      <EmailInput :email="user.email" @update="(email) => user.email = email" />
      <PhoneInput :phone="user.phone" @update="(phone) => user.phone = phone" />

      <q-toggle
        v-model="hasToModifyPassword"
        color="secondary"
        :label="t('account.hasToModifyPassword')"
      />
      <PasswordConfirmationInput v-if="hasToModifyPassword" :password="user.password" @update="(password) => user.password = password" />

      <q-card-actions align="center">
        <q-btn color="primary" type="submit" :label="t('account.modifyButton')" />
      </q-card-actions>
    </q-form>
  </div>
</template>
