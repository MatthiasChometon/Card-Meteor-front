<script setup lang="ts">
const { t } = useI18n();
const links: {
  page: string
  text: string
}[] = $ref([
  {
    page: '',
    text: 'footer.privacyPolicy',
  },
  {
    page: '',
    text: 'footer.conditions',
  },
])

</script>

<template>
  <q-footer class="bg-white text-primary flex justify-between">
    <div style="flex: 1" class="q-ma-md">
      <q-img
        src="../../assets/meteor-card-icon-with-text.png"
        spinner-color="red"
        style="height: 80px; max-width: 90px"
      />
    </div>
    <div
      style="flex: 4"
      class="q-ma-md flex justify-center items-center column text-accent"
    >
      <router-link
        v-for="link in links"
        :key="link.text"
        :to="link.page"
        replace
      >
        {{ t(link.text) }}
      </router-link>
    </div>
    <div style="flex: 1" class="q-ma-md justify-end flex content-center">
      © 2022 Meteor Card
    </div>
  </q-footer>
</template>
<style>
/* Applique les règles de ce bloc uniquement aux écrans >= 768px */
@media screen and (min-width: 768px) {
  /* Cache les éléments avec la classe CSS q-footer */
  .q-footer {
    display: none;
  }
}
</style>
