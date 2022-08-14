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

interface ItemsHeight {
  offsetHeight: number;
  transformY: number;
}

const heightList = ref<ItemsHeight[]>([])

/**
 * 1. 抓 props default 高度，算資料量 & transform
 * 2. render
 * 3. 用正確高度，算資料量 & transform
 */

/**
 * bug:
 *   - item 間隔不對，translateY 應該要是前一個元素的 offsetHeight
 *   - 最後一個 item 間隔不對
 *   - 畫面初始化會擠在一起
 */

const updatedHeight = async () => {
  await nextTick(() => {
    console.debug('asasd', itemsEl.value[0].offsetHeight)
    heightList.value.length = 0
    itemsEl.value.reduce((acc, item, index) => {
      console.debug(item.offsetHeight)
      const lastItem = heightList.value[index - 1]
      let Y = lastItem?.offsetHeight + lastItem?.transformY

      if (index === 0) Y = outerEl.value.scrollTop
      acc.value.push({
        offsetHeight: item.offsetHeight,
        transformY: Y
      })

      console.debug('last offsetHeight', acc.value[index - 1]?.offsetHeight)
      console.debug('Y', Y)
      return acc
    }, heightList)
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
onMounted(async () => {
  /**
   * init
   */
  updateData()

  await updatedHeight()
  await updatedHeight()

  useEventListener(outerEl.value, 'scroll', async () => {
    /**
     * scroll 後要抓新的 Dom Element 計算 transform
     */
    updateData()
    await updatedHeight()
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
        class="absolute will-change-transform"
        :style="{ transform: `translateY(${heightList[index]?.transformY}px)` }"
      >
        <slot
          :item="item"
          :height="heightList[index]"
        />
      </div>
    </div>
  </div>
</template>
