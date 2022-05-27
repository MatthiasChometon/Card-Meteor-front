<script setup lang="ts">
const { t } = useI18n()

const links: {
  page: string
  text: string
}[] = $ref([
  {
    page: '',
    text: 'navbar.homepage',
  },
  {
    page: '',
    text: 'navbar.products',
  },
  {
    page: '',
    text: 'navbar.createMyProduct',
  },
])

</script>

<template>
  <q-header elevated class="bg-white flex">
    <div style="flex: 1;" class="q-pa-md q-pl-md">
      <q-img
        src="../../assets/meteor-card-icon-with-text.png" spinner-color="white" style="width: 80px;"
        fit="contain"
      />
    </div>
    <div style="flex: 2;" class="flex justify-center content-center">
      <router-link
        v-for="link in links" :key="link.text" :to="link.page" replace
        class="text-h6 q-pa-md q-px-md text-primary"
      >
        {{ t(link.text) }}
      </router-link>
    </div>
    <div style="flex: 1;" class="flex justify-end items-center no-wrap">
      <SwitchDarkMode />
      <SwitchLanguageButton />
      <q-icon color="primary" size="40px" name="account_circle" class="q-px-md" />
      <q-icon color="primary" size="40px" name="shopping_cart" class="q-px-md" />
    </div>
  </q-header>
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
</style>
