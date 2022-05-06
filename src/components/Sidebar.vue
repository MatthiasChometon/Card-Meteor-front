<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar color="white">
        <q-img
          src="../assets/Logo.png"
          spinner-color="red"
          style="height: 80px; max-width: 90px"
        />
        <q-tabs v-model="tab">
          <q-tab name="images"  color="#6182C3"  />
          <q-tab name="videos"   color="#6182C3" />
          <q-tab name="articles"   color="#6182C3" />
          <q-tab name="images"  color="#6182C3" label="Accueil" />
           <q-tab name="articles"   color="#6182C3" />
          <q-tab name="videos"   color="#6182C3" label="Mes produit" />
           <q-tab name="articles"   color="#6182C3" />
          <q-tab name="articles"   color="#6182C3" label="Creer mon produit" />
           <q-tab name="articles"   color="#6182C3" />
           <q-tab name="articles"   color="#6182C3" />
           <q-tab name="articles"   color="#6182C3" />
        </q-tabs>
        
        <q-btn  flat color="#6182C3" >
          <q-icon name="account_circle" class="text-purple q-gutter-md" />
          </q-btn>
      </q-toolbar>
    </q-header>

  </q-layout>
</template>
