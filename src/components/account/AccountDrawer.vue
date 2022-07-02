<script setup lang="ts">
import { useAccountButton } from '~/stores/navbar/account'
const isOpen = useAccountButton()
</script>

<template>
  <q-drawer v-model="isOpen" side="right" overlay behavior="mobile" elevated>
    <div class="flex q-pa-md justify-end">
      <CloseDrawer @click-close-drawer="isOpen = !isOpen" />
    </div>
    <div class="flex column content-center">
      <AccountLinks />
    </div>
    <div class="flex q-pa-lg q-ma-lg justify-center">
      <LogoutButton />
    </div>
  </q-drawer>
</template>
