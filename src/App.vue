<script setup lang="ts">
useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
.primary-border {
  border: 1px solid $primary;
}

::selection {
  color: #fff;
  background: $accent;
}
</style>
