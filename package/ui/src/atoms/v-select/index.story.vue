<script setup lang="ts">
import VSelect from './v-select.vue'
import { ref } from 'vue'

const options = [
  {
    text: 'Apple',
    value: 'apple'
  },
  {
    text: 'Banana',
    value: 'banana'
  },
  {
    text: 'Cat',
    value: 'cat'
  },
  {
    text: 'Dog',
    value: 'dog'
  },
  {
    text: 'Elephant',
    value: 'elephant'
  }
]

const value = ref('apple')
</script>

<template>
  <Story title="Atoms/v-select">
    <div class="h-full flex flex-col justify-between">
      <v-select
        v-model="value"
        :options="options"
      />
      <v-select
        v-model="value"
        :options="options"
      />
    </div>
  </Story>
</template>
