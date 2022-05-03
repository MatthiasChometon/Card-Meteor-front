<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar color="white">
        <q-img
          src="../assets/Logo.png"
          spinner-color="red"
          style="height: 80px; max-width: 90px"
        />
        <q-toolbar-title> </q-toolbar-title>
        <q-toolbar-title color="#6182C3"> Acceuil </q-toolbar-title>
        <q-toolbar-title color="#6182C3"> Les produits </q-toolbar-title>

        <q-toolbar-title color="#6182C3"> Creer mon produit </q-toolbar-title>
         <q-btn
          flat
          dense
          round
          icon="account_circle"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
