<template>
  <q-layout>
    <q-footer bordered class="bg-white text-primary">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
      >
        <div class="row">
          <div class="col-8">
            <q-img
              src="../assets/Logo.png"
              spinner-color="red"
              style="height: 80px; max-width: 90px"
            />
          </div>
          <div class="col-2">
            <q-tab
              label="© 2022 Meteor Card"
            />
          </div>
          <div>
            <q-tab name="images" label="politique de confidentialité" />
            <q-tab name="images" label="conditions" />
          </div>
        </div>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>
