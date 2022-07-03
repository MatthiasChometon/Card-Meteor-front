<script setup lang="ts">
import { UserRoles } from '~/enums/users/UserRoles'
import { useConnectedUser } from '~/stores/users/connected'

const { connectedUser } = useConnectedUser()
const isVisitor = computed(() => connectedUser.role === UserRoles.visitor)
</script>

<template>
  <router-link v-if="!isVisitor" to="/shopping-cart">
    <q-icon color="primary" size="40px" name="shopping_cart" class="icon home-icon" />
  </router-link>
</template>
