<script setup lang="ts">
const { t } = useI18n()

</script>
<template>
  <div class="q-pa-md">
    <div>
      <div class="col-6">
        <q-card-section>
          <div class="text-h6" align="center" justify="center">
            {{ t(`Form.Register.title`) }}
          </div>
        </q-card-section>
      </div>
      <q-input size="22px" class="q-px-xl q-py-xs" outlined type="Text" :placeholder="t(`Form.Register.name`)" />

      <q-input a size="22px" class="q-px-xl q-py-xs" outlined type="Text" :placeholder="t(`Form.Register.firstName`)" />
      <q-input a size="22px" class="q-px-xl q-py-xs" outlined type="email" :placeholder="t(`Form.Register.mail`)" />
      <q-input a size="22px" class="q-px-xl q-py-xs" outlined type="number" :placeholder="t(`Form.Register.phone`)" />

      <q-input a size="22px" class="q-px-xl q-py-xs" type="text" outlined :placeholder="t(`Form.Register.address`)" />
      <q-input a size="22px" class="q-px-xl q-py-xs" type="text" outlined :placeholder="t(`Form.Register.pseudo`)" />
      <q-input a size="22px" class="q-px-xl q-py-xs" type="text" outlined :placeholder="t(`Form.Register.password`)" />
      <q-input  size="22px" class="q-px-xl q-py-xs" type="text" outlined :placeholder="t(`Form.Register.confirmPassword`)" />
    </div>
  </div>
  <div align="center" justify="center">
    <q-btn style="width: 150px;background: linear-gradient(#BD35C9, #6182C3,#6182C3,#22B7BF)">
      {{ t(`Form.Register.buttonRegiste`) }}
    </q-btn>
  </div>
</template>
