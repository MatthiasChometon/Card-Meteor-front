<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div
    class="absolute-full text-subtitle2 flex column content-center justify-center"
    style="background: transparent !important; height: 100%;"
  >
    <div class="flex column flex-center content-center">
      <div class="text-h3" style="text-shadow: white 1px 0 4px;">
        Meteor Card
      </div>
      <div
        class="text-h5 text-center q-ma-lg text-weight-thin text-italic"
        style="width: 40%; min-width: 300px; text-shadow: white 1px 0 10px;"
      >
        {{ t('homepage.presentation') }}
      </div>
      <ProductCreationRedirectButton />
    </div>

    <ProductListRedirectButton style="position: absolute; bottom: 0px; left: 10vw; right: 10vw;" class="q-pb-lg q-mb-lg" />
  </div>
</template>
