<template>
  <div>
    <select name="fruit" id="">
      <option value="apple">蘋果</option>
      <option value="banana">香蕉</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BasicDropdowm',
  setup () {
    console.log(123)
  }
})
</script>