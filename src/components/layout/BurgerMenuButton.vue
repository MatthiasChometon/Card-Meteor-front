<script setup lang="ts">
import { useBurgerMenuButton } from '~/stores/navbar/burgerMenu'
const isOpen = useBurgerMenuButton()
</script>

<template>
  <q-icon color="primary" size="60px" name="menu" class="q-pa-md mobile-navbar home-icon" @click="isOpen = !isOpen" />
  <q-drawer v-model="isOpen" side="left" overlay behavior="mobile" elevated>
    <div class="flex q-pa-md justify-end">
      <CloseDrawer @click-close-drawer="isOpen = !isOpen" />
    </div>
    <div class="flex column content-center">
      <BurgerMenuLinks />
    </div>
    <div class="flex q-pa-lg q-ma-lg justify-center">
      <LogoutButton @click-logout="isOpen = !isOpen" />
    </div>
  </q-drawer>
</template>
