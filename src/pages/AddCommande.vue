 <template>
  <div>
    <div class="row justify-center full-height full-width text-center">
      <div>
        <span class="text-h1">Passez Commandes</span>
        <q-space> </q-space>
      </div>
    </div>
    <div class="box">
      <div>
        <q-select
          outlined
          v-model="model"
          :options="options"
          label="Adresse"
          style="width: 250px; justify-center items-center"
        />
      </div>
      <div><q-btn label="+" color="primary" @click="alert = true" /></div>
    </div>
    <div class="box">
      <div><ListesProduit /></div>
      <div><q-btn label="+" color="primary" @click="alert = true" /></div>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  align-items: stretch;
}
</style>