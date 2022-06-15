<script setup lang="ts">
defineEmits(['createcard'])
</script>
<template>
  <div>
    <span>Historique de l'utilisateur</span>
  </div>

  <div class="q-pa-md q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="text-h6">
        <div class="text-h6">
          <q-checkbox v-model="right" label="validé" /> <q-spacer />
          <span style="float: right">29 / 04 / 2022</span>
        </div>
      </q-card-section>
    </q-card>
    <q-card class="my-card">
      <q-card-section class="text-h6">
        <div class="text-h6">
          <span class="material-icons"> close </span> <span>Modifier le</span>
          <q-spacer /> <span style="float: right">29 / 04 / 2022</span>
        </div>
      </q-card-section>
    </q-card>
  </div>
  <div>
    <q-btn @click="$emit('createcard')">
      Proposer
    </q-btn>
  </div>
</template>
