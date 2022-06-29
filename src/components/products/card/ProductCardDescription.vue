<script setup lang="ts">
import type { ProductForList } from '~/types/product/list/ProductForList'
const { t } = useI18n()

const props = defineProps<{
  product: ProductForList
}>()
</script>

<template>
  <div class="text-h5 flex row" style="flex: 2;">
    <div style="flex: 1;" class="q-pl-md">
      {{ props.product.name }}
      <div class="text-caption text-grey">
        {{ t("product.card.archetype") }} : {{ props.product.archetype }}
      </div>
    </div>
    <div style="flex: 1;" class="justify-end flex q-pr-md">
      {{ props.product.price }} €
    </div>
  </div>
</template>
