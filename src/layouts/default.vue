<template>
  <q-layout>

    <div >
      <Navbar />
    </div>

    <q-page-container>
      <RouterView />
    </q-page-container>
    <div >
      <Footer />
    </div>
  </q-layout>
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
