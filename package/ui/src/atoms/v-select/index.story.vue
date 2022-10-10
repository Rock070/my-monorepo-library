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
    <v-select
      v-model="value"
      :options="options"
    />
  </Story>
</template>
