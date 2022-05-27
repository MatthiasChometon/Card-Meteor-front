<template>
    <div>
        <h5 class="column items-center">Payement</h5>
<div style=" margin-left: auto;
    margin-right: auto;
">
 <q-input
 align:center
          filled
          v-model="name"
          label="Votre email*"
          lazy-rules
           style="outline-color::#6182c3"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />      
</div>
    </div>
</template>