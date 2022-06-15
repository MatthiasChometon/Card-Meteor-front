<script setup lang="ts">


</script>

<template>
  <div class="row flex self-center" style="height: 100%">
    <div style="flex: 1" class="self-center">
      <CretaeCrad style="height: 500px; max-width: 500px" />
    </div>

    <div style="flex: 1" class="self-center">
      <FormCard />
    </div>

    <div style="flex: 1" class="self-center">
      <HistoriqueUser  @createcard="createcard({})" class="justify-center" />
    </div>
  </div>
</template>
