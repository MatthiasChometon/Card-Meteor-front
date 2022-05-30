<script setup lang="ts">
const { t } = useI18n();
const isDisplay: boolean = $ref(false);
const compte: boolean = $ref(false);
</script>
<template>
    <div>
         <q-btn flat @click="isDisplay = true">
        <q-icon
          color="primary"
          size="40px"
          name="account_circle"
          class="q-px-md"
        />
      </q-btn>
    </div>
    <div class="q-pa-md">
    <q-dialog v-model="isDisplay">
      <q-card
        style="height: 500px; width: 10000px; margin: 0 auto"
        class="q-px-sm q-pb-md"
      >
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

        <q-card-section >
        <div v-if="compte===false">
          <FormConnexion style="margin-left: auto; margin-right: auto"/>
          <div style="text-align: center;">
          <a  @click="compte=true"  >
          {{ t(`Form.Login.no-account`) }}</a>
          </div>
      </div>
        <div v-else>
          <FormInscription style="margin-left: auto; margin-right: auto"/>
          <div style="text-align: center;">
           <a  text-align: center @click="compte=false">
          {{ t(`Form.Register.haveAccount`) }}</a>
          </div>
      </div>
      


      </q-card-section>
        
      </q-card>
    </q-dialog>
  </div>
</template>