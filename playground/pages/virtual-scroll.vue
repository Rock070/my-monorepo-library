<script setup lang="ts">
import Virtual from '@/components/virtual-scroll.vue'
import { $fetch } from 'ohmyfetch'

const data = await $fetch('https://jsonplaceholder.typicode.com/posts')

</script>

<template>
  <div class="px-10">
    <h1 class="text-xl font-bold py-3">
      Virtual Scroll
    </h1>
    <virtual
      :list="data"
      :item-min-height="64"
      class="
        relative
        h-[50vh]
        overflow-y-auto
        border-4
        border-solid
        border-purple-400
      "
    >
      <template #default="{ item }">
        <div
          class="py-2 relative"
        >
          {{ item.id }}. {{ item.body }}
        </div>
        <!-- <div>{{height}}</div> -->
      </template>
    </virtual>
  </div>
</template>
