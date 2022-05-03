<template>
  <div class="column items-center" style="height: 10px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <div class="col">
        <q-img
          src="../assets/Logo.png"
          spinner-color="red"
          style="max-width: 600px"
        />
      </div>
      <div class="row q-col-gutter-x-md"></div>
      <div class="col">
        <q-input
          filled
          v-model="name"
          label="Votre email*"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="password"
          label="Votre mot de passe*"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />
      </div>
      <div class="col">
        <q-btn label="Connexion" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>