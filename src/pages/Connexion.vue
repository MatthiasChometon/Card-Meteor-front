<script setup lang="ts">
const isDisplay: bool= ref(false);
</script>

<template>
  <div class="q-pa-md">
    <q-btn label="Connexion" @click="isDisplay = !isDisplay" />
    <q-dialog v-model="isDisplay">
      <q-card style="height: 500px; width: 10000px" class="q-px-sm q-pb-md">
        <div class="col-6">
          <q-card-section>
            <div class="text-h6">Connexion</div>
          </q-card-section>
        </div>

        <q-separator />
        <q-card-section>
          <FormConnexio />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
 