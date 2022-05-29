<script setup lang="ts">
const { t } = useI18n();
const isDisplay: boolean = $ref(false);

const links: {
  page: string;
  text: string;
}[] = $ref([
  {
    page: "/",
    text: "navbar.homepage",
  },
  {
    page: "/ListProduit",
    text: "navbar.products",
  },
  {
    page: "/CreateCard",
    text: "navbar.createMyProduct",
  },
]);
</script>

<template>
  <q-header elevated class="bg-white flex">
    <div style="flex: 1" class="q-pa-md q-pl-md">
      <div class="Navebar">
        <q-img
          src="../../assets/meteor-card-icon-with-text.png"
          spinner-color="white"
          style="width: 80px"
          fit="contain"
        />
      </div>
      <div class="Navebarmobile">
        <q-btn flat class="NavebarMobile">
          <q-icon
            color="primary"
            size="40px"
            name="density_medium"
            style="right: 20px"
        /></q-btn>
      </div>
    </div>
<div class="Navebar">
     <div
      class="flex justify-center content-center"
      v-for="link in links"
      :key="link.text"
    >
      <router-link
        class="text-h6 q-pa-md q-px-md text-primary Navebar"
        replace
        :to="link.page"
      >
        {{ t(link.text) }}
      </router-link>
  
     <div class="Navebarmobile">
       <q-img
          src="../../assets/meteor-card-icon-with-text.png"
          spinner-color="white"
          style="width: 80px"
          fit="contain"
        />
     </div>

</div>
     </div>

    <div style="flex: 1" class="flex justify-end items-center no-wrap">
      <div class="Navebar">
        <SwitchDarkMode />
        <SwitchLanguageButton />
      </div>
      <q-btn flat @click="isDisplay = true">
        <q-icon
          color="primary"
          size="40px"
          name="account_circle"
          class="q-px-md"
        />
      </q-btn>
      <div class="Navebar">
        <q-btn flat @click="$router.replace('/Panier')">
          <q-icon
            color="primary"
            size="40px"
            name="shopping_cart"
            class="q-px-md"
        /></q-btn>
      </div>
    </div>
  </q-header>

  <div class="q-pa-md">
    <q-dialog v-model="isDisplay">
      <q-card
        style="height: 500px; width: 10000px; margin: 0 auto"
        class="q-px-sm q-pb-md"
      >
        <div class="col-6">
          <q-card-section>
            <div class="text-h6" align="center" justify="center">
              <q-btn
                style="margin-left: 93%"
                flat
                color="#6182C3"
                @click="isDisplay = false"
              >
                <q-icon name="close"
              /></q-btn>
            </div>
          </q-card-section>
        </div>

        <q-card-section style="margin: 0 auto">
          <FormConnexion style="margin-left: auto; margin-right: auto" />
        </q-card-section>
      </q-card>
    </q-dialog>
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
