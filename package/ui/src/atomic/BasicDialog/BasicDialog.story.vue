<script setup lang="ts">
import { ref, reactive } from 'vue';
import BasicDialog from './BasicDialog.vue';

const state = reactive({
  show: false,
  isBackdrop: false,
  isCloseIcon: false,
  scrollLock: false,
  draggable: false,
  clickOutsideClose: false,
})

</script>

<template>
  <Story title="Basic/BasicDialog">
    <BasicDialog 
      v-model="state.show"
      clickOutsideClose
    >
      <div class="text-red"> 這是一個 Dialog </div>
    </BasicDialog>
    <button @click="state.show = !state.show"> 按鈕 </button>

    <template #controls>
      <div class="flex">
        show: <input type="checkbox" v-model="state.show" />
        isBackdrop: <input type="checkbox" v-model="state.isBackdrop" />
        isCloseIcon: <input type="checkbox" v-model="state.isCloseIcon" />
        scrollLock: <input type="checkbox" v-model="state.scrollLock" />
        draggable: <input type="checkbox" v-model="state.draggable" />
        clickOutsideClose: <input type="checkbox" v-model="state.clickOutsideClose" />
      </div>
    </template>
  </Story>
</template>