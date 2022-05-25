<template>
<div>
<div class="row"
>
    
    <q-card class="my-card" style="width: 1000%;
  max-width: 134em;
  min-width: 130em;
  " >
      <FiltreUser />
    </q-card>
    <div style=" border: 1px solid blue;
  width: 70%;
 margin-top: 2%;
  margin-right:5%
">
<h5 class="column items-center">Mes Articles</h5>
    <div class="row" >
      <Produit style="
margin-right: 5%;
" />

      <Produit style="
margin-right: 5%;max-width: 500px
" /> 
  
      <Produit  style="
margin-right: 5%;
" />
   </div>
    <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      :max="5"
      direction-links
    />
  </div>
    </div>
    <div >
 <div style=" border: 1px solid blue;
  width: 450px;
    height: 200px;
  margin-top: 8%;
" > 
   
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
 <div style=" border: 1px solid blue;
   width: 450px;
    height: 600px;
    margin-top: 2%;
 
" > 
   
<h4 style="text-align: center;">finaliser ma commande</h4>
<div style=" margin-left: auto;
    margin-right: auto;
    
" class="row">
 <h6 style="margin-left:10%">mes articles</h6>  
 <h6 style="margin-left:25%">12 €</h6>
</div>
<div style=" margin-left: auto;
    margin-right: auto;
    margin-top:5%
    
" class="row">
 <h6 style="margin-left:10%">Livraison</h6>  
 <h6 style="margin-left:32%">12 €</h6>
</div>
<div style=" margin-left: auto;
    margin-right: auto;
    
" class="row">
 <h6 style="margin-left:10%">total</h6>  
 <h6 style="margin-left:42%">14 €</h6>
</div>
<q-btn style="margin-left:40%; margin-right:30%">Valider</q-btn>
</div>

</div>
</div>
</div>
</template>

<script setup lang="ts">

</script>
