<script setup lang="ts">
import { useShoppingCart } from '~/stores/products/shoppingCart'

const { t } = useI18n()
const { shoppingPayment } = useShoppingCart()

const isPasswordVisible = $ref(false)
</script>

<template>
  <div class="primary-border q-ma-md q-pa-md flex justify-center">
    <div class="text-primary text-h4 q-mb-md">
      {{ t('product.shopping.paypal') }}
    </div>
    <div>
      <q-input
        v-model="shoppingPayment.email"
        class="q-ma-md" outlined :label="t('form.email')"
      />

      <q-input
        v-model="shoppingPayment.password"
        class="q-ma-md"
        :rules="[val => val && val.length > 6 || t('form.rulesError.empty', { key: t('form.password') })]"
        lazy-rules outlined :type="isPasswordVisible ? 'text' : 'password'" :label="t('form.password')"
      >
        <template #append>
          <q-icon
            :name="isPasswordVisible ? 'visibility' : 'visibility_off'" class="cursor-pointer"
            @click="isPasswordVisible = !isPasswordVisible"
          />
        </template>
      </q-input>
    </div>
  </div>
</template>
