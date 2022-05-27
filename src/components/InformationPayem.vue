<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
    <div>
        <h5 class="column items-center">{{t(`ShopCar.payment`)}}</h5>
<div style=" margin-left: auto;
    margin-right: auto;
">
 <q-input
 align:center
          v-model="name"
          label="Votre email*"

          outlined
           
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />      
</div>
    </div>
</template>