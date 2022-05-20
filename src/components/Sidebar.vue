<script setup lang="ts">
const isDisplay: boolean = ref(false)

</script>
<template>
  <q-header bordered class="bg-white text-primary">
    <q-toolbar color="white">
      <img src="../assets/Logo.png" style="height: 70px" />
 
      <q-tabs >
        <q-tab  align="center" justify="center" />
      <q-tab  align="center" justify="center" name="articles" color="#6182C3" />
      <q-tab  align="center" justify="center" name="articles" color="#6182C3" />
              <q-route-tab to="/"  align="center" justify="center" name="images" color="#6182C3" label="Accueil" size="120px" style="grid-template-columns: 1fr 1fr 1fr;" />
        <q-tab  align="center" justify="center" name="articles" color="#6182C3" />
        <q-tab align="center" justify="center" name="videos" color="#6182C3" label="les produits" size="30px" />
        <q-tab align="center" justify="center" name="articles" color="#6182C3" />
        <q-btn flat color="#6182C3" label="créer mon produit">
          
          <q-menu fit>
            <q-list style="min-width: 100px">
              <q-item clickable>
                       <q-route-tab to="/CreateCard"  align="center" justify="center" name="images" color="#6182C3" label="Carte" size="120px" style="grid-template-columns: 1fr 1fr 1fr;" />

              </q-item>
               <q-separator />
              <q-item clickable>
                       <q-route-tab  to="/CreateDect" align="center" justify="center" name="videos" color="#6182C3" label="Dect" size="30px" />

              </q-item>
              <q-separator />
              <q-item clickable>
                      <q-tab align="center" justify="center" name="videos" color="#6182C3" label="Box"  />

              </q-item>
              <q-separator />
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
</template>
