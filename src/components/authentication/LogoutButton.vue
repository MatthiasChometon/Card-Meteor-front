<script setup lang="ts">
import { useConnectedUser } from '~/stores/users/connected'

const { t } = useI18n()
const { logout } = useConnectedUser()
</script>

<template>
  <q-btn color="primary" @click="logout">
    {{ t('account.logout') }}
  </q-btn>
</template>
