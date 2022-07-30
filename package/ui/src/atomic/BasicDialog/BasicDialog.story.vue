<script setup lang="ts">
import { reactive } from 'vue'
import BasicDialog from './BasicDialog.vue'

const state = reactive({
  show: false,
  isBackdrop: false,
  isCloseIcon: false,
  scrollLock: false,
  draggable: false,
  clickOutsideClose: false
})

</script>

<template>
  <Story title="Basic/BasicDialog">
    <BasicDialog
      v-model="state.show"
      click-outside-close
    >
      <div class="text-red">
        這是一個 Dialog
      </div>
    </BasicDialog>
    <button @click="state.show = !state.show">
      按鈕
    </button>

    <template #controls>
      <div class="flex">
        show: <input
          v-model="state.show"
          type="checkbox"
        >
        isBackdrop: <input
          v-model="state.isBackdrop"
          type="checkbox"
        >
        isCloseIcon: <input
          v-model="state.isCloseIcon"
          type="checkbox"
        >
        scrollLock: <input
          v-model="state.scrollLock"
          type="checkbox"
        >
        draggable: <input
          v-model="state.draggable"
          type="checkbox"
        >
        clickOutsideClose: <input
          v-model="state.clickOutsideClose"
          type="checkbox"
        >
      </div>
    </template>
  </Story>
</template>
