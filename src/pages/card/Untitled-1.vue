<script setup lang="ts">
import { useCreateCard } from "~/stores/Card/CreateCard";
const card = useCreateCard();

const props = defineProps<{
  isShoppingList?: object;
}>();
</script>
<template>
  <div style="width: 300px">
    <q-img
      src="../assets/CarteVierge.png"
      é
      style="width: 25em;"
    >
      <div style="background: transparent !important">
        <div
          class="row"
        >
          <div class="col" style="margin-right: 45%; border-style: none">
            <span>{{ card.name }}</span>
          </div>
          <div class="col">
            <q-img
              src="../assets/Tenebre.png"
              spinner-color="red"
              style="width: 30%; margin-left: 70%"
            />
          </div>
        </div>
        <div
          style="margin-left: 20%; margin-top: 16%; height: 20px; width: 92%"
          class="row"
        >
          <div class="col" style="margin-right: 25%">
            <q-img
              src="../assets/Niveau.png"
              spinner-color="red"
              style="width: 30%; margin-left: 90%; width: 30px"
            />
          </div>
        </div>
        <div style="margin-left: 10%; margin-top: 25%" class="row">
          <div style="margin-right: 3000px">
            <q-img
              src="../assets/Card.png"
              spinner-color="red"
              style="width: 248px; margin-right: 950px; height: 255px"
            />
          </div>
        </div>

        <div style="margin-left: 10%; margin-top: 110%" class="row">
          <div class="col" style="border-style: none">
            <div style="height: 40px; width: 250px">
              <span>{{ card.description }}</span>
            </div>
          </div>
        </div>
        <div style="margin-left: 50%; margin-top: 125%" class="row">
          <div class="col" style="border-style: none">
            <div style="">
              <span>Attack{{ card.attack }}/defense{{ card.defense }}</span>
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
