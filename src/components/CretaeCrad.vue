<script setup lang="ts">
import { useCreateCard } from '~/stores/Card/CreateCard'
const card = useCreateCard()

const props = defineProps<{
  isShoppingList?: object
}>()
const getImgUrl = $computed(() => new URL(`../assets/${card.value.attribute}.png`, import.meta.url).href)
const getImgUrlcard = $computed(() => new URL(`../assets/${card.value.type}.png`, import.meta.url).href)
</script>
<template>
  <div style="width: 300px">
    <q-img :src="getImgUrlcard" style="width: 25em">
      <div style="flex: 1;
background: transparent !important; ">
        <div class="q-ml-sm ;" style="flex: 2; width: 280px; height: 45px; ;">
          <div class="q-ml-sm q-pa-lg jusfify">
            <div class="row">
              <div class="col">
                <span>{{ card.name }}</span>
              </div>
              <div class="col-2 " style="margin-left: 30%;">
                <q-img :src="getImgUrl"  style="width: 28px;margin-left: 90%;" />
              </div>
            </div>
          </div>
             
        </div  >
        <div class="q-ml-sm q-pa-md jusfify">
          <q-img
              src="../assets/Niveau.png"
              spinner-color="red"
              style="width: 30px"
            />
            </div>
      </div>
    </q-img>
  </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
