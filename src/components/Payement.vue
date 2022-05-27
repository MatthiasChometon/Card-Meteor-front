<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
<div>

        <h4 style="text-align: center;">{{t(`ShopCar.finalize-order`)}}</h4>
<div style=" margin-left: auto;
    margin-right: auto;
" class="row">
 <h6 style="margin-left:10%">{{t(`ShopCar.my-articles`)}}</h6>  
 <h6 style="margin-left:25%">12 €</h6>
</div>
<div style=" margin-left: auto;
    margin-right: auto;
    margin-top:5%
    
" class="row">
 <h6 style="margin-left:10%">
{{t(`ShopCar.Delevery`)}}</h6>  
 <h6 style="margin-left:32%">2 €</h6>
</div>
<div style=" margin-left: auto;
    margin-right: auto;
    
" class="row">
 <h6 style="margin-left:10%">total</h6>  
 <h6 style="margin-left:42%">14 €</h6>
</div>
<q-btn style="margin-left:40%; margin-right:30%">{{t(`ShopCar.Validate`)}}</q-btn>
   
    </div>
</template>