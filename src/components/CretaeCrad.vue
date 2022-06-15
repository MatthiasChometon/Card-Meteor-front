<script setup lang="ts">
import { useCreateCard } from "~/stores/Card/CreateCard";
const card = useCreateCard();

const props = defineProps<{
  isShoppingList?: object;
}>();
</script>
<template>
  <div style="width: 300px;">
    <q-img src="../assets/CarteVierge.png" style="width: 25em">
      <div style="flex: 2;background: transparent !important;">
        <div class="q-ml-sm ;" style="flex: 2; width: 300px; height: 45px">
          <div class="q-ml-sm q-pa-lg jusfify">
            <div class="row">
              <div class="col">
                <span>{{ card.name }}</span>
              </div>
              <div class="col-2">
                <q-img
                  src="../assets/Tenebre.png"
                  spinner-color="red"
                  v-if="card.attribute === 'Tenebres'"
                />
                <q-img
                  src="../assets/Terre.png"
                  spinner-color="red"
                  v-if="card.attribute === 'Terre'"
                />
                <q-img
                  src="../assets/Lumière.png"
                  spinner-color="red"
                  v-if="card.attribute === 'Lumière'"
                />
                <q-img
                  src="../assets/Feu.png"
                  spinner-color="red"
                  v-if="card.attribute === 'Feu'"
                />
                <q-img
                  src="../assets/Vent.png"
                  spinner-color="red"
                  v-if="card.attribute === 'Vent'"
                />
                <q-img
                  src="../assets/Eau.png"
                  spinner-color="red"
                  v-if="card.attribute === 'Eau'"
                />
                <q-img
                  src="../assets/Divin.png"
                  spinner-color="red"
                  v-if="card.attribute === 'Divin'"
                />
              </div>
            </div>
          </div>
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
