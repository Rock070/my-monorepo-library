<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useAsyncData } from '#imports'
import { idText } from 'typescript'
import { useEventListener } from '@vueuse/core'

interface Item {
  id: number;
  name: string;
}

const containerEl = ref<HTMLDivElement | null>(null)
const wrapper = ref<HTMLDivElement | null>(null)
const contentEl = ref<HTMLDivElement[] | null>(null)

const data = Array.from({ length: 2000 }, (_, id) => ({
  id,
  name: 'name' + id
}))

const nowData = ref<Item[]>([])
nowData.value = data.slice(0, 20)

const scrollTop = ref(0)
onMounted(() => {
  /**
   * init
   */
  const len = Math.floor(wrapper.value.clientHeight / 24) + 1
  nowData.value = data.slice(0, len)

  console.debug(wrapper.value)
  useEventListener(wrapper.value, 'scroll', event => {
    console.debug(wrapper.value.scrollTop)
    scrollTop.value = wrapper.value.scrollTop
    const start = Math.floor(wrapper.value.scrollTop / 24)
    const end = start + Math.floor(wrapper.value.clientHeight / 24) + 1
    nowData.value = data.slice(start, end)
  })
})

</script>

<template>
  <div class="px-10">
    <h1 class="text-xl font-bold py-3">
      Virtual Scroll
    </h1>
    <div
      ref="wrapper"
      class="
        relative h-[50vh]
        overflow-y-auto
        border-4 border-solid border-purple-400
      "
    >
      <div
        ref="containerEl"
        :style="{ height: 24 * 2000 + 'px' }"
      >
        <div
          v-for="(item, index) in nowData"
          :key="item.id"
          ref="contentEl"
          class="absolute"
          :style="{ transform: `translateY(${scrollTop + index * 24}px)` }"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
html {
 @apply bg-yellow-200;
}
</style>
