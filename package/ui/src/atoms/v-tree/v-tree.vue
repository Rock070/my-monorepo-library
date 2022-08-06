<script setup lang="ts">
interface Props {
  data: any;
}

defineProps<Props>()

</script>

<template>
  <ul>
    <li
      v-for="item in data"
      :key="item.name"
    >
      {{ item.name }}
      <v-tree
        v-if="item.list && item.list.length > 0"
        :data="item.list"
      />
    </li>
  </ul>
</template>
