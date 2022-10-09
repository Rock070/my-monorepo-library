<script setup lang="ts">
import VDetails from './v-details.vue'
import Koala from '../../assets/koala.png?url'
import { reactive } from 'vue'

const state = reactive({
  summary: '這是一個 details',
  content: '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'
})

</script>

<template>
  <Story title="Atoms/v-details">
    <!-- default -->
    <Variant title="default">
      <v-details>
        <template #summary>
          {{ state.summary }}
        </template>
        <template #default>
          {{ state.content }}
        </template>
      </v-details>
    </Variant>
    <!-- custom-icon -->
    <Variant title="custom-icon">
      <v-details>
        <template #summary>
          {{ state.summary }}
        </template>
        <template #default>
          {{ state.content }}
        </template>
        <template #icon>
          <div>
            <img
              :src="Koala"
              width="12"
              height="12"
            >
          </div>
        </template>
      </v-details>
    </Variant>
    <template #controls>
      <div>
        <span> Summary: </span>
        <input
          v-model="state.summary"
          type="text"
        >
      </div>
      <div>
        <span> Content: </span>
        <input
          v-model="state.content"
          type="text"
        >
      </div>
    </template>
  </Story>
</template>
