<template>
  <ProductFilter />
  <div style="margin=">
    <div>
      <q-card
        class="my-card" style="width: 1000%;
  max-width: 134em;
  min-width: 130em;"
      />

      <q-space />
      <div class="row" style="padding-top: 5%">
        <Produit
          style="
margin-right: 10%;
"
        />

        <Produit
          style="
margin-right: 10%;max-width: 500px
"
        /> />

        <Produit
          style="
margin-right: 10%;
"
        />
      </div>
      <div class="q-pa-lg flex flex-center">
        <q-pagination v-model="current" :max="5" direction-links />
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1200px
</style>
