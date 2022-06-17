<script setup lang="ts">
onMounted(() => {
  const layoutClasses = document.getElementsByClassName('q-layout')
  layoutClasses[0]?.classList?.add('home')
})
onUnmounted(() => {
  const layoutClasses = document.getElementsByClassName('q-layout')
  layoutClasses[0]?.classList?.remove('home')
})
</script>

<template>
  <q-img src="../assets/space-night.gif" spinner-color="white" style="height: 100vh; max-width: 100vw">
    <HomePresentation />
  </q-img>
</template>

<style lang="scss">
.home {
  .q-field {
    background-color: #33335670;
  }

  .q-page-container {
    padding-top: 0px !important;
  }

  .q-header {
    box-shadow: 0px 0px 0px white !important;
    background: transparent !important;
  }

  .home-links, .home-icon {
    text-shadow: 4px 0px 20px black;
  }

  .home-icon, .home-links, .q-field--float .q-field__label,
  .q-field--auto-height.q-field--labeled .q-field__native {
    color: white !important;
  }

  .home-not-display {
    display: none !important;
  }

  .q-field--outlined .q-field__control:before {
    border-color: white;
  }
}
</style>
