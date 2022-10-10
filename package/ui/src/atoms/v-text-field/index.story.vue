<script setup lang="ts">
import VTextField from './v-text-field.vue'
import { ref } from 'vue'

const value = ref('apple')
</script>

<template>
  <Story title="Atoms/v-text-field">
    <v-text-field
      v-model="value"
    />
  </Story>
</template>
