<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div>
    <div class="row">
      <q-card
        class="my-card"
        style="width: 1000%; max-width: 134em; min-width: 130em"
      >
        <FiltreUser />
      </q-card>
      <div
        style="
          border: 1px solid blue;
          width: 70%;
          margin-top: 2%;
          margin-right: 5%;
        "
      >
        <h5 class="column items-center">{{ t(`shoppingBasket.myItems`) }}</h5>
        <div class="row">
          <Produit style="margin-right: 5%" />

          <Produit style="margin-right: 5%; max-width: 500px" />

          <Produit style="margin-right: 5%" />
        </div>
        <div class="q-pa-lg flex flex-center">
          <q-pagination v-model="current" :max="5" direction-links />
        </div>
      </div>
      <div>
        <div
          style="
            border: 1px solid blue;
            width: 450px;
            height: 200px;
            margin-top: 8%;
          "
        >
          <InformationPayem />
        </div>
        <div
          style="
            border: 1px solid blue;
            width: 450px;
            height: 600px;
            margin-top: 2%;
          "
        >
          <Payement />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
