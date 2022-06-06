<script setup lang="ts">
import { UserRoles } from '~/enums/users/UserRoles'
import { useConnectedUser } from '~/stores/users/connected'

const { connectedUser } = useConnectedUser()
const isVisitor = $computed(() => connectedUser.role === UserRoles.visitor)
</script>

<template>
  <router-link v-if="isVisitor" to="/authentication/login">
    <q-icon color="primary" name="account_circle" class="q-px-md icon" />
  </router-link>
</template>
