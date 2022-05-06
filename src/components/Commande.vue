 <template>
  <q-card class="my-card">
    <img src="https://cdn.quasar.dev/img/parallax2.jpg" />

    <q-list>
      <q-item clickable>
        <q-item-section avatar> </q-item-section>

        <q-item-section>
          <q-item-label>Commande du:</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section avatar> </q-item-section>

        <q-item-section>
          <q-item-label>Lieu de livraison</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section avatar> </q-item-section>

        <q-item-section>
          <q-item-label>Etat Commande</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <q-btn>Détail Commande</q-btn>
  </q-card>
</template>

<style lang="sass" scoped>
.my-card
    width: 100%
    max-width: 300px
</style>
