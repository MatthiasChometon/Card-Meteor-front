<script setup lang="ts">
const { t } = useI18n()
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
    <div style="flex: 1;" class="q-ma-md">
      <q-img
        src="../../assets/meteor-card-icon-with-text.png" spinner-color="red"
        style="height: 80px; max-width: 90px"
      />
    </div>
    <div class="q-ma-md flex justify-center items-center column text-accent footer-link">
      <router-link v-for="link in links" :key="link.text" :to="link.page" replace>
        {{ t(link.text) }}
      </router-link>
    </div>
    <div style="flex: 1;" class="q-ma-md justify-end flex content-center">
      © 2022 Meteor Card
    </div>
  </q-footer>
</template>

<style lang="scss">
@media (min-width: $breakpoint-sm-min) {
  .footer-link { flex: 4; }
}

@media (max-width: $breakpoint-sm-max) {
 .footer-link { flex: 1; }
}

</style>
