<template>
  <div align="center" justify="center" >
    <h1 color="white">Meteor Card </h1>

    <p color="white" class="col-1 col-md-5">
      Meteor Card est un jeu de carte créé par la communauté. Tu peux créer et
      jouer tes propres cartes.
    </p>
    <q-btn color="white" text-color="#BD35C9" label="Creer ma Carte"  @click="$router.replace('/CreateCard')"/>

    <h3>Nos différents produit</h3>
<div class="box">
  <Produit2/>
    <Produit2/>
      <Produit2/>
      

  </div>
     <h3>Les tendances</h3>
    <div class="box">
  <Produit2/>
    <Produit2/>
      <Produit2/>
      

  </div>
 </div>

</template>

<style scoped>
.box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px 2em;
}
</style>
