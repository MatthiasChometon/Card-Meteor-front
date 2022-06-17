<script setup lang="ts">
import { useMutation } from '@vue/apollo-composable'
import { CREATE_CARD } from '~/graphql/CreateCard'
import { useCreateCard } from '~/stores/Card/CreateCard'

const { mutate: createcard, onDone } = useMutation(CREATE_CARD, {
  fetchPolicy: 'network-only',
})
const newCard = useCreateCard()
const level = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
const Atribut = ['Tenebre', 'Lumière', 'Terre', 'Eau', 'Feu', 'Vent', 'Divin']
const type = ['Effet', 'fusion', 'xyz', 'synchron', 'magie', 'Piege']
const arcetype = ['demon', 'magicien', 'machine', 'poisson', 'plante', 'dragon', 'guerrier']

defineEmits(['findname'])


</script>

<template>
  <div class="row">
    <div class="col-4" style="height: 150px.; margin-right: 30%">
      <q-form
        class="q-gutter-md q-pt-md"
      >
        <div class="col-8 col-md-6" />
        <div class="col-4 col-md-6">
          <div class="q-gutter-md">
             <q-select
                 v-model="newCard.type"
                  outlined
                  :options="type"
                  label="Atribut"
                  style="width: 150px"
                />
            <q-input
              v-model="newCard.name"
              outlined
              label="Nom de la carte"
              style="width: 250px"
            />
            <span>Image de la carte</span>
            <q-file
              v-model="newCard.backgroundPicture"
              outlined
              style="width: 250px"
              label="Image de la carte"
            >
              <q-icon name="attach_file" />
            </q-file>
            <span>Description de la carte</span>
            <q-input
              v-model="newCard.description"
              outlined
              style="width: 250px"
              label="Description de la carte"
            />
            <q-input
              v-model="newCard.attack"
              outlined
              label="Attak"
              style="width: 250px"
            />
            <q-input
              v-model="newCard.defense"
              outlined
              label="Defense"
              style="width: 250px"
            />
              <div class="col">
                <q-select
                 v-model="newCard.attribute"
                  outlined
                  :options="Atribut"
                  label="Atribut"
                  style="width: 150px"
                  v-if="newCard.type!='Piege' "
                />
              </div>
                  <div class="col">
                <q-select
                 v-model="newCard.level"
                  outlined
                  :options="level"
                  label="Niveau"
                  style="width: 150px"
                 v-if="newCard.type!='Piege' "
                />
              </div>
               <div class="col">
                <q-select
                 v-model="newCard.archetype"
                  outlined
                  :options="arcetype"
                  label="Type"
                  style="width: 150px"
                 v-if="newCard.type!='Piege' "
                />
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
