<script setup lang="ts">
import { useCreateCard } from '~/stores/Card/CreateCard'
const card = useCreateCard()

const chiffre= [1,2,3,4,5,6,7,8,9,10,11,12]
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
              <div class="text-h6 col">
                <span style="color:black">{{ card.name }}</span>
              </div>
              <div class="col-2 " style="margin-left: 30%;">
                <q-img :src="getImgUrl"  style="width: 28px;margin-left: 90%;" />
              </div>
            </div>
          </div>
             
        </div   >
        <div class="row q-pa-sm q-ml-xl " style="margin-left:70px">
       <div v-for="star in chiffre"  >
       <div class="col">
          <q-img
              src="../assets/Niveau.png"
              spinner-color="red"
              style="width: 16px"
              
            />
            </div>
            </div>
           
            </div>
            <div class="q-ml-lg q-ml-sm " style="margin-top:12px" >
            <q-img
              src="../assets/Card.png"
              spinner-color="red"
              style="width: 248px;  height: 250px; margin-left:4%"
            />
          </div>
           <div class="text-body2 q-ml-lg " style="color:black;margin-top:30px" >
         {{card.description}}
          </div>
          <div class="text-caption q-ml-xl" v-if="card.type==='Effet'" style="text-shadow: white 1px 0 4px; color:black;margin-top:50px;margin-left: 125px;">
        Attack:{{card.attack}}/ Defense:{{card.defense}}
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
