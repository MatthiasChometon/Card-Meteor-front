<template>
  <div class="column items-center" style="height: 10px">
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
              Se connecter
           
              
            </div>
          </q-card-section>
        </div>
      <div class="row q-col-gutter-x-md"></div>
      <div class="col">
        <q-input
          filled
          v-model="name"
          label="Votre email*"
          lazy-rules
           style="outline-color::#6182c3"
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
      <div align="center" justify="center">
        <q-btn label="Connexion" type="submit" style="background:#6182c3" />
      </div>
      <div>
      <a href="http://localhost:3333/Inscription">pas encore de compte ? Inscris toi</a>
      </div>
    </q-form>

  </div>
</template>