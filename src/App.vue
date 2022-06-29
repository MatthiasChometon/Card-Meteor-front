<script setup lang="ts">
useHead({
  title: 'Meteor Card',
  meta: [
    { name: 'description', content: 'Meteor Card' },
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
