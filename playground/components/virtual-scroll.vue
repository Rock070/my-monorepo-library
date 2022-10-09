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

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.debug(entry)
      console.debug(entry.target.dataset.id)
    })
  }, {
    threshold: [0]
  })

  console.debug(itemsEl.value)

  itemsEl.value.forEach(element => {
    observer.observe(element)
  })
})

</script>

<template>
  <div ref="outerEl">
    <div
      ref="virtualBoxEl"
    >
      <div
        v-for="(item, index) in nowData"
        :key="item.id"
        ref="itemsEl"
        :data-id="index"
        class="will-change-transform"
      >
        <slot
          :item="item"
        />
      </div>
    </div>
  </div>
</template>
