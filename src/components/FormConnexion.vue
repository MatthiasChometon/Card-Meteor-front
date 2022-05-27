<script setup lang="ts">
const { t } = useI18n()

</script>
<template>
  <div class="q-pa-md">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
     <div class="col-6">
          <q-card-section>
            <div
              class="text-h6"
              align="center"
              justify="center"
              style=" margin-left: auto;
    margin-right: auto "
            >
              {{t(`FormConnected.Login`)}}
           
              
            </div>
          </q-card-section>
        </div>
      <div class="row q-col-gutter-x-md"></div>
      <div class="col">
        <q-input
        outlined
          v-model="name"
        :label="t(`FormConnected.mail`)"
          lazy-rules
           style="outline-color::#6182c3"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
     
          type="password"
          :label="t(`FormConnected.password`)"
          outlined
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />
      </div>
      <div align="center" justify="center">
        <q-btn type="submit" style="background: linear-gradient(#BD35C9, #6182C3,#6182C3,#22B7BF)">{{t(`FormConnected.ButtonLogin`)}}</q-btn> 
      </div>
      <div>
      <a href="http://localhost:3333/Inscription" text-align: center > {{t(`FormConnected.no-account`)}}</a>
      </div>
    </q-form>

  </div>
</template>