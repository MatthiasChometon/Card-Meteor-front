<script setup lang="ts">
import type { Product } from '../../types/product/list/Product'

const props = defineProps<{
  product: Product
}>()
const { product } = props
</script>

<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-img
        style="width : 100%; height: 50ù;
min-width : 300px;" src="../assets/Card.png"
      />

      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs">
          {{ product.name }} <span style="margin-left:60%">Prix</span>
        </div>
        <div class="text-caption text-grey">
          Arcétype dangereux
        </div>
      </q-card-section>
      <q-card-section>
        <q-separator />
        <q-btn align:center justify:center>
          Detail du produit
        </q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>
