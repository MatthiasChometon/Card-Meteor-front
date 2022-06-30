<template>
  <div >
    <Pannel class="row justify-center   text-center"/>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('alarms')
    }
  }
}
</script>
