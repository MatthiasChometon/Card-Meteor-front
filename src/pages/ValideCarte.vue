<script setup lang="ts">
const isDisplay: bool= ref(false);
</script>

<template>
<div>
  <div class="row">
    <div class="col-1"></div>

    <div class="col-3">
      <q-img
        src="../assets/Car.png"
        spinner-color="red"
        style="height: 500px; max-width: 500px"
      />
    </div>

    <div class="col-4">
      <FormCard style="margin: 0 10px" />
    </div>
    </div>
    <div class="row" style=" height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;">
      <q-btn color="secondary">Valider</q-btn>
      <q-btn color="amber">Modifier </q-btn>
      <q-btn color="red">Suprimer</q-btn>
        <q-btn label="Commenter" color="primary" @click="isDisplay = true" />
    </div>
  </div>
   <q-dialog v-model="isDisplay" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Commenter</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
<q-input
      v-model="text"
      filled
      type="textarea"
      label="Commentaire"
    />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          
          <q-btn flat label="Commenter" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

</template>
