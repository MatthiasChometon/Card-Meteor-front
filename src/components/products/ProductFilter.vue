<script setup lang="ts">
import { useConnectedUser } from '../../stores/users/connected'
const { isValidator, isUser } = useConnectedUser()
</script>

<template>
  <q-card class="flex items-center shadow-4 q-my-md full-width" style="flex: 5;">
    <div class="q-pa-md flex" style="flex: 1.1; min-width: 280px;">
      <ProductOrderDirection style="flex: 0.1;" />
      <ProductOrderBy style="flex: 1;" />
    </div>
    <ProductSearch class="q-pa-md" style="flex: 1; min-width: 280px;" />
    <ProductStepFilter v-if="isValidator" class="q-pa-md" style="flex: 1;  min-width: 280px;" />
    <UserProductFilter v-if="isUser" class="q-pa-md" style="flex: 0.6;  min-width: 280px;" />
  </q-card>
</template>
