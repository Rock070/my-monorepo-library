<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue'
import { useEventListener } from '@vueuse/core'

interface Item {
  id: number;
  name: string;
}
interface Props {
  list: any[];
  itemMinHeight?: number;
}

const props = withDefaults(defineProps<Props>(), {
  itemMinHeight: 24
})

const virtualBoxEl = ref<HTMLDivElement | null>(null)
const outerEl = ref<HTMLDivElement | null>(null)
const itemsEl = ref<HTMLDivElement[] | null>(null)

const nowData = ref<Item[]>([])
nowData.value = props.list.slice(0, 20)

const totalHeight = computed(() => {
  return itemsHeightList.value.reduce((acc, item) => acc + item)
})
const itemsHeightList = ref([])

const scrollTop = ref(0)

/**
 * 1. 抓 props default 高度，算資料量 & transform
 * 2. render
 * 3. 用正確高度，算資料量 & transform
 */

const updatedHeight = () => {
  nextTick(() => {
    itemsHeightList.value.length = 0

    itemsEl.value.forEach((item, index) => {
      const accHeight = itemsHeightList.value[index - 1] || 0
      let calHeight = item.offsetHeight + accHeight
      if (index === 0) calHeight = outerEl.value.scrollTop

      itemsHeightList.value.push(calHeight)
    })
  })
}
onMounted(() => {
  /**
   * init
   */
  updatedHeight()
  const len = Math.floor(outerEl.value.clientHeight / 24) + 1
  nowData.value = props.list.slice(0, len)
  useEventListener(outerEl.value, 'scroll', () => {
    /**
     * scroll 後要抓新的 Dom Element 計算 transform
     */
    updatedHeight()
    // TODO: total height
    // TODO:
    // const totalHeight = item * itemHeight
    scrollTop.value = outerEl.value.scrollTop
    const start = Math.floor(outerEl.value.scrollTop / 24)
    const end = start + Math.floor(outerEl.value.clientHeight / 24) + 1
    nowData.value = props.list.slice(start, end)
  })
})

</script>

<template>
  <div ref="outerEl">
    <div
      ref="virtualBoxEl"
      :style="{ height: 24 * 2000 + 'px' }"
    >
      <div
        v-for="(item, index) in nowData"
        :key="item.id"
        ref="itemsEl"
        class="absolute"
        :style="{ transform: `translateY(${itemsHeightList[index]}px)` }"
      >
        <slot :item="item" />
      </div>
    </div>
  </div>
</template>
