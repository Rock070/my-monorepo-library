<script setup lang="ts">
import { onMounted } from 'vue';
import BasicDropdown from 'ui';
import 'virtual:windi.css'
onMounted(() => {
  console.log(BasicDropdown)
})
</script>

<template>
  <div>
    <BasicDropdown />
    <NuxtWelcome />
  </div>
</template>


