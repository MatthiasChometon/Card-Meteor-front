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

      <q-btn flat color="#6182C3" size="30px" @click="isDisplay = true ;$router.replace('/DetailCompte')" >
        <q-icon name="account_circle" />
      </q-btn>
      <q-btn flat color="#6182C3" size="30px" @click="isDisplay = true">
        <q-icon name="shopping_cart" @click="$router.replace('/Panier')" />
      </q-btn>
    </q-toolbar>
  </q-header>
  
</template>
