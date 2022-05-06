<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar color="white">
      <img src="../assets/Logo.png" style="height: 70px"/>
        
        <q-tabs v-model="tab">
          <q-tab name="images" color="#6182C3" />
          <q-tab name="videos" color="#6182C3" />
          <q-tab name="articles" color="#6182C3" />
          <q-tab name="images" color="#6182C3" label="Accueil" size="30px" />
          <q-tab name="articles" color="#6182C3" />
          <q-tab
            name="videos"
            color="#6182C3"
            label="Mes produit"
            size="30px"
          />
          <q-tab name="articles" color="#6182C3" />
          <q-tab
            name="articles"
            color="#6182C3"
            label="Creer mon produit"
            size="30px"
          />
          <q-tab name="articles" color="#6182C3" />
          <q-tab name="articles" color="#6182C3" />
          <q-tab name="articles" color="#6182C3" />
        </q-tabs>

        <q-btn flat color="#6182C3" size="30px">
          <q-icon name="account_circle" class="text-purple q-gutter-md" />
        </q-btn>
      </q-toolbar>
    </q-header>
  </q-layout>
</template>
