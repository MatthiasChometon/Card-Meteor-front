<script setup lang="ts">
const isDisplay: boolean = $ref(false)
</script>

<template>
  <div style="display: block; margin-left: auto; margin-right: auto">
    <div class="q-pa-md">
      <q-btn label="Connexion" @click="isDisplay = !isDisplay" />
      <q-dialog v-model="isDisplay" style="height: 75px; width: 300px">
        <q-card style="height: 700px; width: 900px" class="q-px-sm q-pb-md">
          <div class="col-6">
            <q-card-section>
              <div class="text-h6" align="center" justify="center">
                <q-btn
                  style="margin-left: 93%"
                  flat
                  color="#6182C3"
                  @click="isDisplay = false"
                >
                  <q-icon name="close"
                /></q-btn>
              </div>
            </q-card-section>
          </div>

          <div align="center" justify="center">
            <FormInscription />
          </div>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>
