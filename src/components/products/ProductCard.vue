<script setup lang="ts">
import type { ProductForList } from '../../types/product/list/ProductForList'
import { useServerPicture } from '~/composables/useServerPicture'

const props = defineProps<{
  product: ProductForList
  isShoppingList?: boolean
}>()

defineEmits(['add', 'remove', 'selectNumber'])
const { picture } = useServerPicture('cards/cover', props.product.coverPicture)
</script>

<template>
  <q-card class="q-ma-md flex justify-center content-center column">
    <ProductCardPicture :picture="picture" />
    <q-card-section class="flex column justify-between">
      <ProductCardDescription :product="product" />
      <ProductCardButtons
        :product="product" :is-shopping-list="isShoppingList"
        @select-number="(selectedNumber) => $emit('selectNumber', selectedNumber)" @add="$emit('add')"
        @remove="$emit('remove')"
      />
    </q-card-section>
  </q-card>
</template>
