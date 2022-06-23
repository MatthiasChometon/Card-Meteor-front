<template>
  <div class="text-primary q-pl-md">
    <div class="flex justify-end">
      {{ new Date().toLocaleDateString() }}
    </div>
    <div class="flex justify-end">
      {{ new Date().getHours() }}h{{ new Date().getHours() }}
    </div>
  </div>
</template>
