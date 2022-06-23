<script setup lang="ts">
import type { ProductForList } from '../../types/product/list/ProductForList'
import { useServerPicture } from '~/composables/useServerPicture'
const { t } = useI18n()

const props = defineProps<{
  product: ProductForList
  isShoppingList?: boolean
}>()
const emit = defineEmits(['add', 'remove', 'selectNumber'])
const { picture } = useServerPicture('cover', props.product.coverPicture)

const inStock = 10
let numberSelected = $ref(props.product.number)
const selectableNumbers = [...Array(inStock).keys()].reverse()

function add() {
  numberSelected++
  emit('add')
}
function remove() {
  numberSelected--
  emit('remove')
}
</script>

<template>
  <q-card class="q-ma-md flex justify-center content-center column alig">
    <q-img class="q-ma-md product-card-picture" fit="contain" style="width: 100%;" :src="picture" />
    <q-card-section class="flex column justify-between">
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
      <div class="flex row no-wrap q-px-md q-pt-md">
        <div style="flex: 1;" class="justify-start items-center flex">
          <q-btn v-if="isShoppingList" outline class="text-primary text-weight-medium" icon="remove" round @click="remove" />
        </div>
        <div style="flex: 1;" class="items-center justify-center content-center">
          <q-select
            v-if="isShoppingList"
            v-model="numberSelected"
            transition-show="flip-up"
            transition-hide="flip-down"
            outlined
            :options="selectableNumbers"
            @update:model-value="$emit('selectNumber', numberSelected)"
          />
        </div>
        <div style="flex: 1;" class="justify-end items-center flex">
          <q-btn outline class="text-primary text-weight-medium" icon="add" round @click="add" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss">
@media (min-width: $breakpoint-lg-min) {
  .product-card-picture {
    height: 400px;
  }
}

@media (max-width: $breakpoint-md-max) {
  .product-card-picture {
    height: 400px;
  }
}

@media (max-width: $breakpoint-sm-max) {
  .product-card-picture {
    height: 300px;
  }
}

@media (max-width: $breakpoint-xs-max) {
  .product-card-picture {
    height: 300px;
  }
}
</style>
