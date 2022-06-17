<script setup lang="ts">
import { UserRoles } from '~/enums/users/UserRoles'
import { useAccountButton } from '~/stores/navbar/account'
import { useConnectedUser } from '~/stores/users/connected'

const { connectedUser } = useConnectedUser()
const isOpen = useAccountButton()
const isUser = computed(() => connectedUser.role === UserRoles.user)
const firstNameLetter = computed(() => connectedUser?.firstName?.charAt(0)?.toUpperCase())
const lastNameLetter = computed(() => connectedUser?.lastName?.charAt(0)?.toUpperCase())
</script>

<template>
  <div v-if="isUser">
    <q-btn outline class="text-primary text-weight-medium home-icon" round @click="isOpen = !isOpen">
      {{ firstNameLetter }}.{{ lastNameLetter }}
    </q-btn>
    <AccountDrawer />
  </div>
</template>
