<template>
  <q-header elevated class="bg-white flex">
    <NavbarIcon style="flex: 1;" class="q-pa-md q-pl-md desktop-navbar" />
    <NavbarLinks style="flex: 2;" class="justify-center content-center desktop-navbar" />
    <NavbarOptions style="flex: 1;" class="justify-end items-center no-wrap desktop-navbar" />

    <div class="mobile-navbar">
      <q-icon style="flex: 1;" color="primary" size="60px" name="menu" class="q-pa-md mobile-navbar" />
    </div>
    <NavbarIcon style="flex: 3;" class="mobile-navbar q-pa-md" />
    <div class="mobile-navbar">
      <AccountButton size="40px" />
    </div>
  </q-header>
</template>

<style lang="scss">
@media (min-width: $breakpoint-sm-min) {
  .mobile-navbar { display: none; }
  .desktop-navbar { display: flex; }
}

@media (max-width: $breakpoint-sm-max) {
  .mobile-navbar {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .desktop-navbar { display: none; }
}

body.body--dark .q-header,
body.body--dark .q-footer,
body.body--dark .q-drawer {
  background: $dark  !important;
}
</style>
