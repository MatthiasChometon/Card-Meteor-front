<script setup lang="ts">
import { UserRoles } from '~/enums/users/UserRoles'
import { useInCreationCard } from '~/stores/card/create'
import { useConnectedUser } from '~/stores/users/connected'

const { t } = useI18n()
const inCreationCard = useInCreationCard()
const { connectedUser } = useConnectedUser()
const isUser = computed(() => connectedUser.role === UserRoles.user)
const editor = computed(() => isUser.value ? connectedUser.username : t('card.create.editorMessage'))
</script>

<template>
  <div
    style="height: 5.2%; width: 100%; padding-left: 4%; padding-right: 10%;"
    class="text-black flex"
  >
    <div class="flex justify-between content-center" style="width: 100%; height: 60%;">
      <div class="text-caption" style="font-size: 0.43rem;">
        {{ inCreationCard.serialNumber }}
      </div>
      <div class="text-caption" style="font-size: 0.43rem;">
        {{ editor }}
      </div>
    </div>
  </div>
</template>
