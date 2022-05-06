<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img src="../assets/Card.png" />

      <q-card-section>
        <div class="text-overline text-orange-9"></div>
        <div class="text-h5 q-mt-sm q-mb-xs">Uria</div>
        <div class="text-caption text-grey">Arcétype dangereux</div>
        <div class="text-caption text-grey">
          Ni Invocable Normalement ni Posable Normalement. Uniquement Invocable
        </div>
      </q-card-section>

      <q-card-actions>
        <q-space />

        <span>Prix:</span>
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
    width: 100%
    max-width: 350px
</style>