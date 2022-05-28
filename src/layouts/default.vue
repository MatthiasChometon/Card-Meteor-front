<template>
  <q-layout>
    <div class="Navebarmobile">
      <Navebarmobile />
    </div>
    <div class="Navebar">
      <Navbar />
    </div>

    <q-page-container>
      <RouterView />
    </q-page-container>
    <div class="Navebar">
      <Footer />
    </div>
    <div class="Navebarmobile">
      <FooterMobile />
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
  }
}
</style>
