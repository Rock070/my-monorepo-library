<script setup lang="ts">
import { ref, reactive } from 'vue';
import BasicDialog from './BasicDialog.vue';
const show = ref(false)

const state = reactive({
  disabled: false,
  content: "Hello world"
})

</script>

<template>
  <Story title="Basic/BasicDialog">
    <BasicDialog 
      v-model:show="show"
      clickOutsideClose
    >
      <div> 這是一個 Dialog </div>
    </BasicDialog>
    <button @click="show = !show"> 按鈕 </button>
  </Story>
</template>