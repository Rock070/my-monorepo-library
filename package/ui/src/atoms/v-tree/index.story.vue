<script setup lang="ts">
import VTree from './v-tree.vue'
const list = [
  {
    name: '第一篇',
    list: [
      {
        name: '第一章節',
        list: [
          { name: '第一小節' },
          { name: '第二小節' }
        ]
      },
      {
        name: '第二章節',
        list: [
          { name: '第一小節' },
          { name: '第二小節' }
        ]
      }
    ]
  },
  {
    name: '第二篇',
    list: [
      {
        name: '第一章節',
        list: [
          { name: '第一小節' },
          { name: '第二小節' }
        ]
      },
      {
        name: '第二章節',
        list: [
          { name: '第一小節' },
          { name: '第二小節' }
        ]
      }
    ]
  }
]
</script>

<template>
  <Story title="Atoms/v-tree">
    <v-tree :data="list" />
  </Story>
</template>
