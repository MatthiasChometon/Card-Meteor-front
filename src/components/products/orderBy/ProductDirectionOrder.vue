<script setup lang="ts">
import { useProductListFilter } from '../../../stores/products/listFilter'
import { Direction } from '~/enums/products/filter/Direction'

const { setDirection, productListFilter } = useProductListFilter()
const icon = $computed(() => productListFilter.orderBy.direction === Direction.ASC ? 'arrow_upward' : 'arrow_downward')
</script>

<template>
  <q-btn
    round size="16px" flat class="flex justify-center items-center" color="grey"
    :icon="icon"
    @click="setDirection"
  />
</template>
