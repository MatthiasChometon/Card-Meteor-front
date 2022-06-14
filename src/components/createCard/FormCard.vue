<script setup lang="ts">
import { CREATE_CARD } from "~/graphql/CreateCard";

import { useMutation } from "@vue/apollo-composable";
const { mutate: createcard } = useMutation(CREATE_CARD, {
  fetchPolicy: "network-only",
});
const fruits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const Atribut = ["TÉNÈBRES", "LUMIÈRE", "TERRE", "EAU", "FEU", "VENT	", "DIVIN"];

const color = ref("#FF00FF");

const newCard = $ref({
  name: "",
  level: "",
  attribute: "",
  attack: "",
  defense: "",
  description: "",
  edition: "",
  editor: "",
  limitation: "",
  coverPicture: "",
  backgroundPicture: "",
  step: "",
  archetype: "",
});
</script>

<template>
  <div class="row">
    <div class="col-4" style="height: 150px.; margin-right: 30%">
      <q-form
        class="q-gutter-md q-pt-md"
        @submit="createcard({ input: newCard })"
      >
        <div class="col-8 col-md-6"></div>
        <div class="col-4 col-md-6">
          <div class="q-gutter-md">
            <span>Nom de la carte</span>
            <q-input
              outlined
              v-model="newCard.name"
              label="Nom de la carte"
              style="width: 500px"
            />
            <span>Image de la carte</span>
            <q-file
              outlined
              v-model="newCard.backgroundPicture"
              style="width: 500px"
              label="Image de la carte"
            >
              <q-icon name="attach_file" />
            </q-file>
            <span>Description de la carte</span>
            <q-input
              v-model="newCard.description"
              outlined
              style="width: 500px"
              label="Description de la carte"
            />
            <q-input
              v-model="newCard.attack"
              outlined
              label="Attak"
              style="width: 500px"
            />
            <q-input
              v-model="newCard.defense"
              outlined
              label="Defense"
              style="width: 500px"
            />
            <div class="row">
              <div class="col">
                <q-select
                  outlined
                  v-model="newCard.level"
                  :options="fruits"
                  label="niveau"
                  style="width: 150px; margin-right: 2%"
                />
              </div>
              <div class="col-3">
                <q-select
                  outlined
                  v-model="newCard.level"
                  :options="Arcétype"
                  label="Arcétype"
                  style="width: 150px"
                />
              </div>
              <div class="row">
                <div class="col">
                  <q-input filled v-model="color" class="my-input">
                    <template v-slot:append>
                      <q-icon name="colorize" class="cursor-pointer">
                        <q-popup-proxy
                          cover
                          transition-show="scale"
                          transition-hide="scale"
                        >
                          <q-color v-model="color" />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>
                <div class="col">
                  <q-select
                    outlined
                    v-model="newCard.level"
                    :options="Arcétype"
                    label="Atribut"
                    style="width: 150px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-form>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.my-input
  max-width: 100px
</style>