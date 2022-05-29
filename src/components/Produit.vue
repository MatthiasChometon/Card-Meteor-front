<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <div
        style="
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <q-img style="width: 150px; height: 150px" src="../assets/Card.png" />
      </div>
      <q-separator></q-separator>

      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs" style="width: 250px; height: 80px">
          Uria <span style="margin-left: 20%">Prix</span>
          <div class="text-caption text-grey">Arcétype dangereux</div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <q-btn align:center justify:center>-</q-btn>

          <q-input
            v-model.number="model"
            type="number"
            outlined
            style="max-width: 50px; margin-left: 2px"
          />
          <q-btn align:center justify:center>+</q-btn>
          <div style="margin-left: 15%">
            <q-btn flat @click="isDisplay = true">
              <q-icon
                color="primary"
                size="20px"
                name="
create"
                class="q-px-md"
              />
            </q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>