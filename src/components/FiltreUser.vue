<script setup lang="ts">

const Trie = ['nom', 'prix', 'arcétype'];

</script>

<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
        <span>Trier par</span>
      <q-select
      :options="Trie"
        label="Nom"
        transition-show="flip-up"
        transition-hide="flip-down"
       outlined
        v-model="model"
        style="width: 250px"
      />
  <span>Type de produit</span>
      <q-select
      :options="Trie"
        label="Tous afficher"
        transition-show="scale"
        transition-hide="scale"
       outlined
        v-model="model"
        style="width: 250px"
      />
      <span>Rechercher</span>
       <q-select
       :options="Trie"
        label="Rechercher"
        transition-show="scale"
        transition-hide="scale"
        outlined
        v-model="model"
        style="width: 250px"
      />
    </div>
  </div>
</template>


