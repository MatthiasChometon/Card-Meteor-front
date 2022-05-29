<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <div class="q-pa-md">
    <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
      <div class="col-6">
        <q-card-section>
          <div
            class="text-h6"
            align="center"
            justify="center"
            style="margin-left: auto; margin-right: auto"
          >
            {{ t(`Form.Login.Login`) }}
          </div>
        </q-card-section>
      </div>
      <div class="row q-col-gutter-x-md" />
      <div class="col">
        <q-input
          outlined
          :label="t(`Form.Login.mail`)"
          lazy-rules
          style="outline-color::#6182c3"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          :label="t(`Form.Login.password`)"
          outlined
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />
      </div>
      <div align="center" justify="center">
        <q-btn
          type="submit"
          style="
            background: linear-gradient(#bd35c9, #6182c3, #6182c3, #22b7bf);
          "
        >
          {{ t(`Form.Login.ButtonLogin`) }}
        </q-btn>
      </div>
      <div>
        <a href="http://localhost:3333/Inscription" text-align: center>
          {{ t(`Form.Login.no-account`) }}</a>
      </div>
    </q-form>
  </div>
</template>
