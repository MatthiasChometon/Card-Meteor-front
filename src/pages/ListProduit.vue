<template>
  <dv>
    <q-card class="my-card">
      <FiltreUser />
    </q-card>

    <div class="row">
      <Produit />
      <Produit />
      <Produit />
    </div>
    <Carrousel />
  </dv>
</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1200px
</style>
