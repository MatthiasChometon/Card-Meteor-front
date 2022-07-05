<script setup lang="ts">
import type { ProductForList } from '~/types/product/list/ProductForList'
import { ProductStep } from '~/enums/products/filter/ProductStep'
import { useUserRole } from '~/composables/useUserRole'
import { useConnectedUser } from '~/stores/users/connected'

const props = defineProps<{
  product: ProductForList
  isShoppingList?: boolean
}>()
const emit = defineEmits(['add', 'remove', 'selectNumber'])

const inStock = 10
let numberSelected = $ref(props.product.number)
const selectableNumbers = [...Array(inStock).keys()].reverse()
const { isValidator } = useUserRole()
const { connectedUser } = useConnectedUser()

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
  <div class="flex row no-wrap q-px-md q-pt-md">
    <div style="flex: 1;" class="justify-start items-center flex">
      <q-btn
        v-if="isShoppingList" outline class="text-primary text-weight-medium" icon="remove" round
        @click="remove"
      />
    </div>
    <div style="flex: 1;" class="items-center justify-center content-center">
      <q-select
        v-if="isShoppingList" v-model="numberSelected" transition-show="flip-up" transition-hide="flip-down"
        outlined :options="selectableNumbers" @update:model-value="$emit('selectNumber', numberSelected)"
      />
    </div>
    <div style="flex: 1;" class="justify-end items-center flex no-wrap">
      <q-btn
        v-if="product.step === ProductStep.released" outline
        class="text-primary text-weight-medium" icon="add" round @click="add"
      />
      <ProductCardEditButton
        v-if="product.step === ProductStep.beingCreated && product.editor === connectedUser.username" class="q-px-sm"
        :product-id="props.product.id"
      />
      <ProductCardCommentButton
        v-if="product.step === ProductStep.beingCreated && isValidator" class="q-px-sm"
        :product-id="props.product.id"
      />
    </div>
  </div>
</template>
