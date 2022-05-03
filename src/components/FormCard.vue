<template>
  <div class="column" style="height: 150px">
    <div class="col-4 col-md-6"></div>
    <div class="col-4 col-md-6">
           <div class="q-gutter-md">
      <q-input outlined v-model="text" label="Nom de la carte" style="width: 500px "/>
      <q-file outlined v-model="model" style="width: 500px" label="Image de la carte">
          <q-icon name="attach_file" />
      </q-file>
      <q-input
       outlined
      type="textarea"
      style="width: 500px "
      label="Description de la carte"
    />
      <div class="q-gutter-md row items-start">
           <q-input outlined v-model="text" label="Attak" style="width: 200px "/>
            <q-input outlined v-model="text" label="Defense" style="width: 200px "/>
           </div>

      </div>
    </div>
    <div class="col-4 col-md-6">
          <q-btn color="BD35C9"> Proposer</q-btn>
      </div>
  </div>
</template>