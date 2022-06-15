<script setup lang="ts">
import { useMutation } from '@vue/apollo-composable'
import { useCreateCard } from '../../../stores/Card/CreateCard'
import { CREATE_CARD } from '~/graphql/CreateCard'
const card = useCreateCard()
const { mutate: createcard } = useMutation(CREATE_CARD, {
  fetchPolicy: 'network-only',
})

</script>

<template>
  <div class="row flex self-center" style="height: 100%">
    <div style="flex: 1" class="self-center">
      <CretaeCrad style="height: 500px; max-width: 500px" />
    </div>

    <div style="flex: 1" class="self-center">
      <FormCard />
    </div>

    <div style="flex: 1" class="self-center">
      <HistoriqueUser  @createcard="createcard({card})" class="justify-center" />
    </div>
  </div>
</template>
