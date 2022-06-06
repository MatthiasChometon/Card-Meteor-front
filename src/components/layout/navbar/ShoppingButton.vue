<script setup lang="ts">
import { UserRoles } from '~/enums/users/UserRoles'
import { useConnectedUser } from '~/stores/users/connected'

const { connectedUser } = useConnectedUser()
const isUser = $computed(() => connectedUser.role === UserRoles.user)
</script>

<template>
  <q-icon v-if="isUser" color="primary" size="40px" name="shopping_cart" class="icon" />
</template>
