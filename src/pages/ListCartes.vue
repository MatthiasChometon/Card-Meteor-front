<template>
  <div>
    <div class="row justify-center full-height full-width text-center">
      <div>
        <span class="text-h1">Mes cartes</span>
        <q-space> </q-space>
        <q-checkbox left-label v-model="left" label="Validée" />
      </div>
    </div>
    <div class="row">
      <div class="col-1"></div>

      <div class="col-2" style="margin: 0 10px">
        <Imgautil style="height: 250px; max-width: 400px" />
      </div>

      <div class="col-3">
        <DetailCarte />
      </div>
      <div class="col-1"></div>

      <div class="col-2" style="margin: 0 10px">
        <Imgautil style="height: 250px; max-width: 400px" />
      </div>

      <div class="col-2">
        <DetailCarte />
      </div>
      <div class="col-1"></div>

      <div class="col-2" style="margin: 0 10px; margin-top: 3em">
        <Imgautil style="height: 250px; max-width: 400px" />
      </div>

      <div class="col-2">
        <DetailCarte />
      </div>
    </div>
  </div>
</template>
