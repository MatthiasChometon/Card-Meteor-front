<script setup lang="ts">
const { t } = useI18n()

</script>
<template>
  <div class="q-pa-md">
    <div>
      <div class="col-6">
        <q-card-section>
          <div class="text-h6" align="center" justify="center">
            {{ t(`FormRegiste.title`) }}
          </div>
        </q-card-section>
      </div>
      <q-input size="22px" class="q-px-xl q-py-xs" outlined type="Text" :placeholder="t(`FormRegiste.name`)" />

      <q-input a size="22px" class="q-px-xl q-py-xs" outlined type="Text" :placeholder="t(`FormRegiste.first-name`)" />
      <q-input a size="22px" class="q-px-xl q-py-xs" outlined type="email" :placeholder="t(`FormRegiste.mail`)" />
      <q-input a size="22px" class="q-px-xl q-py-xs" outlined type="number" :placeholder="t(`FormRegiste.phone`)" />

      <q-input a size="22px" class="q-px-xl q-py-xs" type="text" outlined :placeholder="t(`FormRegiste.address`)" />
      <q-input a size="22px" class="q-px-xl q-py-xs" type="text" outlined :placeholder="t(`FormRegiste.pseudo`)" />
      <q-input a size="22px" class="q-px-xl q-py-xs" type="text" outlined :placeholder="t(`FormRegiste.password`)" />
      <q-input  size="22px" class="q-px-xl q-py-xs" type="text" outlined :placeholder="t(`FormRegiste.confirm-password`)" />
    </div>
  </div>
  <div align="center" justify="center">
    <q-btn style="width: 150px;background: linear-gradient(#BD35C9, #6182C3,#6182C3,#22B7BF)">
      {{ t(`FormRegiste.button-register`) }}
    </q-btn>
  </div>
</template>
