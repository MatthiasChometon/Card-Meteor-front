<script setup lang="ts">
const props = defineProps<{
  picture: string
}>()
</script>

<template>
  <q-img class="q-ma-md product-card-picture" fit="contain" style="width: 100%;" :src="props.picture" />
</template>

<style lang="scss">
@media (min-width: $breakpoint-lg-min) {
  .product-card-picture {
    height: 500px;
  }
}

@media (max-width: $breakpoint-md-max) {
  .product-card-picture {
    height: 440px;
  }
}

@media (max-width: $breakpoint-sm-max) {
  .product-card-picture {
    height: 300px;
  }
}

@media (max-width: $breakpoint-xs-max) {
  .product-card-picture {
    height: 300px;
  }
}
</style>
