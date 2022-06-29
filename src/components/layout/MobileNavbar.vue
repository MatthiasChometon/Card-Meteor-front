<template>
  <div class="q-px-md mobile-navbar">
    <div>
      <BurgerMenuButton />
    </div>
    <NavbarIcon class="q-pa-md" />
    <div>
      <AuthenticationButton class="q-pr-md" />
      <ShoppingButton class="q-px-md" />
    </div>
  </div>
</template>

<style lang="scss">
@media (min-width: $breakpoint-sm-min) {
  .mobile-navbar {
    display: none;
  }
}

@media (max-width: $breakpoint-sm-max) {
  .mobile-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
