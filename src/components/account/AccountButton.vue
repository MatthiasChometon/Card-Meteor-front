<script setup lang="ts">
import { useUserRole } from '~/composables/useUserRole'
import { useAccountButton } from '~/stores/navbar/account'
import { useConnectedUser } from '~/stores/users/connected'

const { connectedUser } = useConnectedUser()
const isOpen = useAccountButton()
const { isVisitor } = useUserRole()
const firstNameLetter = computed(() => connectedUser?.firstName?.charAt(0)?.toUpperCase())
const lastNameLetter = computed(() => connectedUser?.lastName?.charAt(0)?.toUpperCase())
</script>

<template>
  <div v-if="!isVisitor">
    <q-btn outline class="text-primary text-weight-medium home-icon" round @click="isOpen = !isOpen">
      {{ firstNameLetter }}.{{ lastNameLetter }}
    </q-btn>
    <AccountDrawer />
  </div>
</template>
