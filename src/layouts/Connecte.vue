<template>
  <q-layout
    style="
      background-image: url('https://trello.com/1/cards/62849ccc3050dc1b8d203134/attachments/62849cedf6b2102e47822866/download/ng-colab-space_night_2.png');
      background-repeat: no-repeat;
      background-size: cover;
    "
  >
    <SideBarconnected />

    <q-page-container>
      <q-page style="padding-top: 60px" class="q-pa-md">
        <RouterView />
      </q-page>
    </q-page-container>

    <Footer />
  </q-layout>
</template>
