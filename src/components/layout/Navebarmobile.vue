<script setup lang="ts">
const { t } = useI18n();
const isDisplay: boolean = ref(false);

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
         <q-btn
             style="margin-left: 93% "
                flat
                color="#6182C3"
                @click="isDisplay = false"
              >
                <q-icon name="density_medium"
              /></q-btn>
              />
    </div>
    <div
      style="flex: 2"
      class="flex justify-center content-center"
    >
      <q-img
        src="../../assets/meteor-card-icon-with-text.png"
        spinner-color="white"
        style="width: 80px"
        fit="contain"
      />
    </div>
    <div style="flex: 1" class="flex justify-end items-center no-wrap">
      <q-btn flat @click="isDisplay = true">
        <q-icon
          color="primary"
          size="40px"
          name="account_circle"
          class="q-px-md"
        />
      </q-btn>
     
    </div>
  </q-header>

  <div class="q-pa-md">
    <q-btn label="Connexion" @click="isDisplay = !isDisplay" />
    <q-dialog v-model="isDisplay">
      <q-card
        style="height: 500px; width: 10000px; margin: 0 auto"
        class="q-px-sm q-pb-md"
      >
        <div class="col-6">
          <q-card-section>
            <div
              class="text-h6"
              align="center"
              justify="center"
             
            >
              <q-btn
             style="margin-left: 93% "
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
</style>

