<script setup lang="ts">
const isDisplay: bool= ref(false);
</script>

<template>
<div style="display: block;
    margin-left: auto;
    margin-right: auto ">
  <div class="q-pa-md">
    <q-btn label="Connexion" @click="isDisplay = !isDisplay" />
    <q-dialog v-model="isDisplay" style="height: 75px; width: 300PX;" >
    <q-card style="height: 700px; ; width: 900px" class="q-px-sm q-pb-md">
      
                    <div
              class="text-h6"
              align="center"
              justify="center"
              style=" margin-left: auto;
    margin-right: auto "
            >

              <q-btn
                style="float: right"
                flat
                color="#6182C3"
                @click="isDisplay = false"
              >
                <q-icon name="close" class="text-purple q-gutter-md"
              /></q-btn>
            </div>

        <div align="center" justify="center">
          <FormInscription />
          </div>

      </q-card>
    </q-dialog>
  </div>
  </div>
</template>
 