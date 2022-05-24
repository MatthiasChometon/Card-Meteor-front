<template>
  <div >
    <q-card class="my-card" flat bordered>
      <q-img src="../assets/Card.png" />

      <q-card-section>
        <div class="text-overline text-orange-9"></div>
        <div class="text-h5 q-mt-sm q-mb-xs">Uria   <span style="margin-left:7%">Prix:</span></div>
        <div class="text-caption text-grey">Arcétype dangereux</div>
        <q-space></q-space>
         <div class="text-caption text-grey"><q-btn style="margin-top:7%">Detail Produit</q-btn></div>
       
      </q-card-section>

      <q-card-actions>
        <q-space />

      
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>


<style lang="sass" scoped>
.my-card
  max-width: 10000px
</style>