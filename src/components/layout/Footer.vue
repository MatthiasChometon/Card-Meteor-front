<script setup lang="ts">
const { t } = useI18n();
const links: {
  page: string
  text: string
}[] = $ref([
  {
    page: '',
    text: 'footer.privacyPolicy',
  },
  {
    page: '',
    text: 'footer.conditions',
  },
])

</script>

<template>
<div class="Navebar">
  <q-footer class="bg-white text-primary flex justify-between">
    <div style="flex: 1" class="q-ma-md">
      <q-img
        src="../../assets/meteor-card-icon-with-text.png"
        spinner-color="red"
        style="height: 80px; max-width: 90px"
      />
    </div>
    <div
      style="flex: 4"
      class="q-ma-md flex justify-center items-center column text-accent"
    >
      <router-link
        v-for="link in links"
        :key="link.text"
        :to="link.page"
        replace
      >
        {{ t(link.text) }}
      </router-link>
    </div>
    <div style="flex: 1" class="q-ma-md justify-end flex content-center">
      © 2022 Meteor Card
    </div>
  </q-footer>
  </div>
  <div class="Navebarmobile ">
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
          src="../../assets/meteor-card-icon-with-text.png"
          spinner-color="white"
          style="width: 80px"
          fit="contain"
        />
          </div>
          <div class="col-2">
            <q-tab
              label="© 2022 Meteor Card"
            />
            <q-tab name="images" label="politique de confidentialité" />
            <q-tab name="images" label="conditions" />
          </div>
        </div>
      </q-tabs>
    </q-footer>
  </q-layout>
  </div>
</template>

<style lang="scss">
a {
  text-decoration: none;
}

body.body--dark .q-header,
body.body--dark .q-footer,
body.body--dark .q-drawer {
  background: #121212 !important;
}

/* Applique les règles de ce bloc uniquement aux écrans >= 768px */
@media screen and (max-width: 1000px) {
  /* Cache les éléments avec la classe CSS q-footer */
  .Navebarmobile {
    display: flex;
  }
  .Navebar {
    display: none;
  }
}
@media screen and (min-width: 1024px) {
  /* Cache les éléments avec la classe CSS q-footer */
  .Navebar {
    display: flex;
    text-align:center;
  }
  .Navebarmobile {
    display: none;
  }
}
.center-div p {
  position: relative;
  top: 50%;
  transform: perspective(1px) translateY(-50%);
}
</style>
