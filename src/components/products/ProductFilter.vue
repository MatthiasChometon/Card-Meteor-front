<script setup lang="ts">
import { useConnectedUser } from '../../stores/users/connected'
import { UserRoles } from '../../enums/users/UserRoles'
const { connectedUser } = useConnectedUser()
</script>

<template>
  <q-card class="flex items-center shadow-4 q-my-md full-width" style="flex: 5;">
    <div class="q-pa-md flex" style="flex: 1.1; min-width: 280px;">
      <ProductDirectionOrder style="flex: 0.1;" />
      <ProductTypeOrder style="flex: 1;" />
    </div>
    <ProductSearchFilter class="q-pa-md" style="flex: 1; min-width: 280px;" />
    <ProductStepFilter v-if="connectedUser.role === UserRoles.validator" class="q-pa-md" style="flex: 1;  min-width: 280px;" />
    <UserProductFilter v-if="connectedUser.role === UserRoles.user" class="q-pa-md" style="flex: 0.6;  min-width: 280px;" />
  </q-card>
</template>
