<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue'
import { useEventListener } from '@vueuse/core'

interface Props {
  list: any[];
  itemMinHeight: number;
}

const props = defineProps<Props>()

const virtualBoxEl = ref<HTMLDivElement | null>(null)
const outerEl = ref<HTMLDivElement | null>(null)
const itemsEl = ref<HTMLDivElement[] | null>(null)

const nowData = ref<any[]>([])
nowData.value = props.list.slice(0, 20)

const totalHeight = computed(() => {
  return props.list.length * props.itemMinHeight
})

const itemsHeightList = ref([])

/**
 * 1. 抓 props default 高度，算資料量 & transform
 * 2. render
 * 3. 用正確高度，算資料量 & transform
 */

/**
 * bug:
 *   - item 間隔不對，translateY 應該要是前一個元素的 offsetHeight
 *   - 最後一個 item 間隔不對
 */

const updatedHeight = () => {
  nextTick(() => {
    itemsHeightList.value.length = 0

    itemsEl.value.reduce((acc, item, index) => {
      let accHeight = itemsHeightList.value[index - 1]
      console.debug('item.offsetHeight', item.offsetHeight)
      let height = item.offsetHeight + accHeight
      if (index === 0) {
        accHeight = 0
        height = outerEl.value.scrollTop
      }

      console.debug(accHeight)
      console.debug(height)
      acc.value.push(height)
      return acc
    }, itemsHeightList)
  })
}

const updateData = () => {
  /**
   * 外容器高度
   */
  const h = outerEl.value.clientHeight

  const start = Math.floor(outerEl.value.scrollTop / props.itemMinHeight)
  const end = start + Math.floor(h / props.itemMinHeight) + 1
  nowData.value = props.list.slice(start, end)
}
onMounted(() => {
  /**
   * init
   */
  updateData()
  updatedHeight()

  useEventListener(outerEl.value, 'scroll', event => {
    /**
     * scroll 後要抓新的 Dom Element 計算 transform
     */
    updatedHeight()
    updateData()
  })
})

</script>

<template>
  <div ref="outerEl">
    <div
      ref="virtualBoxEl"
      :style="{ height: totalHeight + 'px' }"
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
