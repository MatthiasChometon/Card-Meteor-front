<template>
  <div class="desktop-navbar">
    <NavbarIcon style="flex: 1;" class="q-pa-md q-pl-md flex justify-start content-center" />
    <NavbarLinks style="flex: 2;" class="flex justify-center content-center" />
    <NavbarOptions style="flex: 1;" class="flex justify-end items-center no-wrap" />
  </div>
</template>

<style lang="scss">
@media (min-width: $breakpoint-sm-min) {
  .desktop-navbar {
    display: flex;
    justify-content: 'space-between';
  }
}

@media (max-width: $breakpoint-sm-max) {
  .desktop-navbar {
    display: none;
  }
}
</style>
