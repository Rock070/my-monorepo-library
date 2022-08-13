<script setup lang="ts">
import Virtual from '@/components/virtual-scroll.vue'

const data = Array.from({ length: 2000 }, (_, id) => ({
  id,
  name: 'name' + id
}))

</script>

<template>
  <div class="px-10">
    <h1 class="text-xl font-bold py-3">
      Virtual Scroll
    </h1>
    <virtual
      :list="data"
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
        <div class="py-5">
          <div>
            {{ item.name }}
          </div>
          <div>123123</div>
        </div>
      </template>
    </virtual>
  </div>
</template>
