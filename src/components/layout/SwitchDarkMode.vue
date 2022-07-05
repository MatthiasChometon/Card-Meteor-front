<script setup lang="ts">
import { useQuasar } from 'quasar'
const $q = useQuasar()

const toggle = ref(false)
watch(toggle, () => {
  $q.dark.set(!$q.dark.isActive)
})
</script>

<template>
  <q-toggle
    v-model="toggle" class="home-not-display" size="50px" keep-color checked-icon="dark_mode" color="primary"
    unchecked-icon="light_mode"
  />
</template>
