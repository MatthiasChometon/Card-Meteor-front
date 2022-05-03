<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <span>Trier par</span>
      <q-select outlined v-model="model" :options="options" label="Nom" />
      <div>
        <span>Filtrer par</span>
      </div>
      <span>Type de produit</span>

      <q-select
        outlined
        v-model="model"
        :options="options"
        label="Tous afficher"
      />
      <span>état du produit</span>

      <q-select
        outlined
        v-model="model"
        :options="options"
        label="Tous afficher"
      />
      <span>Rechercher</span>
      <q-select outlined v-model="model" :options="options" label="Catégorie" />
    </div>
  </div>
</template>