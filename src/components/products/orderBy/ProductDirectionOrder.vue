<script setup lang="ts">
import { useProductListFilter } from '../../../stores/products/listFilter'
const { setDirection, getBooleanDirection } = useProductListFilter()
const direction = $computed({
  get() {
    return getBooleanDirection()
  },
  set(newValue) {
    setDirection(newValue)
  },
})
</script>

<template>
  <q-btn v-model="direction" round size="16px" flat class="flex justify-center items-center" color="grey" icon="arrow_upward" />
</template>
