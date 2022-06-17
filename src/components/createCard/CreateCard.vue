<script setup lang="ts">
import { useCreateCard } from '~/stores/Card/CreateCard'
const card = useCreateCard()

const level = ref([...Array(Number(card.value.level)).keys()])

const getImgUrl = $computed(() => new URL(`../assets/${card.value.attribute}.png`, import.meta.url).href)
const getImgUrlcard = $computed(() => new URL(`../assets/${card.value.type}.png`, import.meta.url).href)
</script>
<template>
  <div style="width: 300px; height: 100px">
    <q-img :src="getImgUrlcard" style="width: 25em;">
      <div style="flex: 1;
background: transparent !important; ">
        <div class="q-ml-sm ;" style="flex: 2; width: 280px; height: 45px; ">
          <div class="q-ml-xs q-pa-md  jusfify" >
            <div class="row">
              <div class="text-h6 ">
                <span  >{{ card.name }}</span>
              </div>
              <div class="col-6 " style="margin-left: 30%">
                <q-img :src="getImgUrl"  style="width: 28px;margin-left: 90%;" v-if="card.type==='Effet'" />
              </div>
               <div class="col-6 " style="margin-left: 40%">
                <q-img :src="getImgUrl"  style="width: 28px;margin-left: 90%;" v-if="card.type==='xyz'" />
              </div>
            </div>
          </div>
             
        </div   >
        <div class="row q-pa-sm q-ml-xl " style="margin-left:70px" v-if="card.type!='Piege'">
       <div v-for="star in level" >
       <div class="col">
          <q-img
              src="../assets/Niveau.png"
              spinner-color="red"
              style="width: 16px"
               v-if="card.type!='magie'"
              
              
            />
            </div>
            </div>
           
            </div>
            <div class="q-ml-lg q-ml-sm " style="margin-top:12px"  v-if="card.type==='Effet'">
            <q-img
              src="../assets/Card.png"
              spinner-color="red"
              style="width: 248px;  height: 250px; margin-left:4%"
              
            />
            
            
          </div>
          
            <div class="q-ml-lg q-ml-sm " style="margin-top:1px"  v-if="card.type==='xyz'">
            <q-img
              src="../assets/Card.png"
              spinner-color="red"
              style="width: 270px;  height: 260px; "
              
            />
            
            
          </div>
           <div class="q-ml-lg q-ml-sm " style="margin-top:32px;mzrgin-left:3px"  v-if="card.type==='Piege'">
            <q-img
              src="../assets/Card.png"
              spinner-color="red"
              style="width: 248px;  height: 255px; margin-left:4%"
              
            />
            </div>
              <div class="q-ml-lg q-ml-sm " style="margin-top:13px;mzrgin-left:1px"  v-if="card.type==='magie'">
            <q-img
              src="../assets/Card.png"
              spinner-color="red"
              style="width: 270px;  height: 270px; margin-left:1%"
              
            />
            </div>
             <div class="q-ml-md q-pa-md " style="margin-top:13px;mzrgin-left:1px"  v-if="card.type==='synchron'">
            <q-img
              src="../assets/Card.png"
              spinner-color="red"
              style="width: 270px;  height: 250px; margin-left:1%"
              
            />
            </div>
           <div class="text-body2 q-ml-lg " style="color:black;margin-top:30px" >
        <div>
        <span> {{card.archetype}}/{{card.type}}</span>
        </div>
<div>
       <span> {{card.description}}</span> 
       </div>
          </div>
          <div class="text-caption q-ml-xl" v-if="card.type==='xyz'" style="text-shadow: white 1px 0 4px; color:black;margin-top:70px;margin-left: 125px;">
        Attack:{{card.attack}}/ Defense:{{card.defense}}
      </div>
              <div class="text-caption q-ml-xl" v-if="card.type==='Effet'" style="text-shadow: white 1px 0 4px; color:black;margin-top:30px;margin-left: 125px;">
        Attack:{{card.attack}}/ Defense:{{card.defense}}
      </div>
       <div class="text-caption q-ml-xl" v-if="card.type==='synchron'" style="text-shadow: white 1px 0 4px; color:black;margin-top:40px;margin-left: 125px;">
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
