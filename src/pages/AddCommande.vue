 <template>
  <div>
    <div class="row justify-center full-height full-width text-center">
      <div>
        <span class="text-h1">Passez Commandes</span>
        <q-space> </q-space>
      </div>
    </div>
    <div class="select">
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
    <q-space></q-space>
    <div class="box">
      <div><ListesProduit /></div>
      <div><q-btn label="+" color="primary" @click="alert = true" /></div>
    </div>
  </div>
</template>

<style scoped>
.select {
  display: flex;
  align-items: stretch;
  justify-content: center;
}
.box {
  display: flex;
  align-items: stretch;
  max-width: 600px

}
</style>