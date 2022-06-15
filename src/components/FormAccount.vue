<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start" style="margin-left:5%">
      <q-input outlined  label="Firstname" />

      <q-input outlined label="lastName" style="margin-left:5%">
      </q-input>

      <q-input v-model="email" outlined type="email" label="username" style="margin-left:5%" />

    </div>
 <div class="q-gutter-md row items-start" style="margin-top: 5%;">

      <q-input outlined  label="email" style="margin-left: 5%;"/>

      <q-input outlined  label="telephone" style="margin-left: 10%;" />

     <q-input outlined  label="password" style="margin-left: 10%;"/>

    </div>
  </div>
</template>

