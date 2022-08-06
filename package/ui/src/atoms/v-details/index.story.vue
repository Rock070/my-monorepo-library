<script setup lang="ts">
import VDetails from './v-details.vue'

</script>

<template>
  <Story title="Atoms/v-details">
    <v-details :style="{ width: '200px' }">
      <template #summary>
        這是一個 details
      </template>
      <template #default>
        <div>
          內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容
        </div>
      </template>
    </v-details>
  </Story>
</template>
