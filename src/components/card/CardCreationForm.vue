<script setup lang="ts">
import { useInCreationCard } from '~/stores/card/create'
const { t } = useI18n()
const inCreationCard = useInCreationCard()
</script>

<template>
  <div class="flex column no-wrap">
    <Title traduction-text="card.create.title" />
    <q-form class="flex">
      <div>
        <q-input
          v-model="inCreationCard.name" class="q-pa-sm" outlined :label="t('card.create.name')"
          :rules="[val => val && val.length > 0 || '']" :maxlength="32"
        />
        <CardAttributeInput />
        <CardRaceInput />
        <CardLevelInput />
        <q-input
          v-model="inCreationCard.attack" class="q-pa-sm" outlined :label="t('card.create.attack')"
          :rules="[val => val && val.length > 0 || '']" :maxlength="4"
        />
        <q-input
          v-model="inCreationCard.defense" class="q-pa-sm" outlined :label="t('card.create.defense')"
          :rules="[val => val && val.length > 0 || '']" :maxlength="4"
        />
        <q-toggle v-model="inCreationCard.hasEffect" class="q-pa-sm" :label="t('card.create.hasEffect')" />
        <q-input
          v-model="inCreationCard.description" class="q-pa-sm" outlined autogrow
          :label="t('card.create.description')"
        />
      </div>

      <div>
        <q-input
          v-model="inCreationCard.archetype" class="q-pa-sm" outlined :label="t('card.create.archetype')"
          :maxlength="30"
        />
        <CardBackgroundPictureInput />
        <CardTypeInput />
        <CardLimitationInput />
        <q-input
          v-model.number="inCreationCard.serialNumber" class="q-pa-sm" outlined :label="t('card.create.serialNumber')"
          :maxlength="30" type="number"
        />
        <q-input
          v-model="inCreationCard.edition" class="q-pa-sm" outlined :label="t('card.create.edition')"
          :rules="[val => val && val.length > 0 || '']" :maxlength="30"
        />
      </div>
    </q-form>
  </div>
</template>
