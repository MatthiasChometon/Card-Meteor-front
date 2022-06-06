<script setup lang="ts">
import { UserRoles } from '~/enums/users/UserRoles'
import { useConnectedUser } from '~/stores/users/connected'

const { connectedUser } = useConnectedUser()
const isUser = $computed(() => connectedUser.role === UserRoles.user)
const firstNameLetter = $computed(() => connectedUser?.firstName?.charAt(0)?.toUpperCase())
const lastNameLetter = $computed(() => connectedUser?.lastName?.charAt(0)?.toUpperCase())
</script>

<template>
  <q-btn v-if="isUser" outline class="text-primary text-weight-medium" round>
    {{ firstNameLetter }}.{{ lastNameLetter }}
  </q-btn>
</template>
