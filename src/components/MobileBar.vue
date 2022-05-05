=<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white text-primary">
      <q-toolbar class="shadow-2 rounded-borders">
        <q-btn flat dense icon="reorder" aria-label="Menu" />
        <q-toolbar-title> </q-toolbar-title>
        <q-toolbar-title> </q-toolbar-title>
        <q-toolbar-title>
          <q-img
            src="../assets/Logo.png"
            spinner-color="red"
            style="height: 50px; max-width: 50px"
          />
        </q-toolbar-title>

        <q-toolbar-title> </q-toolbar-title>
        <q-btn flat dense round icon="account_circle" aria-label="Menu" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
