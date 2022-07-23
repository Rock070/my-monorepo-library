<script setup lang="ts">
import { ref, reactive } from 'vue';
import BasicDropdown from 'ui';
import { hstEvent } from 'histoire/client'
const count = ref(0)

console.log(count)


const state = reactive({
  disabled: false,
  content: "Hello world"
})

const increment = () => {
  count.value++
  console.log(count.value)
}
</script>

<template>
  <Story 
    title="Folder/Test"
  >
  <template #controls>
        Content: <input type="text" v-model="state.content" />
        Disabled: <input type="checkbox" v-model="state.disabled" />
      </template>
    <Variant title="default">
      <BasicDropdown />
      <button @click="hstEvent('My event', $event)"> EventButton </button>
      <div @click="increment" class="cursor-pointer"> click </div>
      <div>{{count}}</div>
      <button :disabled="state.disabled"> 按鈕 </button>
       
    </Variant>
    <Variant title="Fast">
      🏎️
    </Variant>
    <Variant title="Slow">
      🚜
    </Variant>
  </Story>
</template>