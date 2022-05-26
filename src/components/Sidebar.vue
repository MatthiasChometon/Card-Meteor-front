<script setup lang="ts">
const isDisplay: boolean = ref(false);
</script>
<template>
  <q-header bordered class="bg-white text-primary">
    <q-toolbar color="white">
      <img src="../assets/Logo.png" style="height: 70px" />
      <v-spacer />

      <q-tabs align="center">
        <q-tab align="center" justify="center" right />
        <q-spacer />

        <q-route-tab
          to="/"
          align="center"
          justify="center"
          name="images"
          color="#6182C3"
          label="Accueil"
          size="120px"
        />
        <q-spacer />
       <q-route-tab
         to="/ListProduit"
          align="center"
          justify="center"
          name="videos"
          color="#6182C3"
          label="les produits"
          size="30px"
        />
        <q-spacer />
        <q-btn flat color="#6182C3" label="créer mon produit" style="width: 280px;">
          <q-menu fit>
            <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section  align="center"
                  justify="center" @click="$router.replace('/CreateCard')">Carte</q-item-section>
            </q-item>
                 <q-separator />
            <q-item clickable>
              <q-item-section  align="center"
                  justify="center">Dect</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section  align="center"
                  justify="center">Box</q-item-section>
            </q-item>
          </q-list>
          </q-menu>
        </q-btn>
      </q-tabs>
      <q-space />

      <q-btn flat color="#6182C3" size="30px" @click="isDisplay = true">
        <q-icon name="account_circle" class="text-purple q-gutter-md" />
      </q-btn>
    </q-toolbar>
  </q-header>
  <div class="q-pa-md" >
    <q-btn label="Connexion" @click="isDisplay = !isDisplay" />
    <q-dialog v-model="isDisplay">
      <q-card
        style="height: 500px; width: 10000px; margin: 0 auto"
        class="q-px-sm q-pb-md"
      >
        <div class="col-6">
          <q-card-section>
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
                <q-icon name="close" /></q-btn>
            </div>
          </q-card-section>
        </div>

        <q-card-section style="margin: 0 auto">
          <FormConnexio style=" margin-left: auto;
    margin-right: auto "/>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
