<template>
  <q-layout>
    <Navbar />

    <q-page-container>
      <RouterView class="q-py-lg" />
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<style lang="scss">
.q-page-container {
  width: 100%;
}
.q-layout {
  display: flex;
}


</style>
