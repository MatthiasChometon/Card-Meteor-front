<script setup lang="ts">
const isDisplay: bool = ref(false);
</script>

<template>
  <div class="q-pa-md">
    <q-btn label="Connexion" @click="isDisplay = !isDisplay" />
    <q-dialog v-model="isDisplay" style="height: 500px; width: 900px">
      <q-card style="height: 500px; width: 900px" class="q-px-sm q-pb-md">
        <div class="col-6">
          <q-card-section>
            <div class="text-h6" align="center" justify="center">
              S'inscrire
            </div>
          </q-card-section>
        </div>

        <div align="center" justify="center">
          <FormInscription />
        </div>
        <div class="text-h8" align="center" justify="center">
          déjà un compte ? Connecte toi
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>
 