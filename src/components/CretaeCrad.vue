<script setup lang="ts">

const props = defineProps<{
  isShoppingList?: object
}>()

</script>
<template>
  <div style="width: 300px">
    <q-img src="../assets/CarteVierge.png" é
    style="width: 25em; background-color:Orange"
      ><div
        style="
          margin-left: 37px;
          margin-top: 9%;
          height: 39px;
          width: 80%;
          background-color:orange;color:white;
          margin-right: 90%;
        "
        class="row"
      >
        <div class="col" style="margin-right: 45%; border-style: none">
          <span>Dragon</span>
        </div>
        <div class="col">
          <q-img
            src="../assets/Tenebre.png"
            spinner-color="red"
            style="width: 30%;margin-left: 70%;"
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
          ></q-img>
        </div>
      </div>

      <div style="margin-left: 10%; margin-top: 110%" class="row">
        <div class="col" style="border-style: none">
          <div style="height: 40px;width: 250px;">
            <span>Dragon Dragon Dragon Dragon Dragon Dragon Dragon Dragon</span>
          </div>
        </div>
        
      </div>
       <div style="margin-left: 50%; margin-top: 125%" class="row">
        <div class="col" style="border-style: none">
          <div style="">
            <span>attack/defense</span>
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
