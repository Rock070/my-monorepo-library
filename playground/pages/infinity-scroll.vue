<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useAsyncData } from '#imports'

const imgList = reactive([])

const El = ref<null | HTMLDivElement>(null)
const observerEl = ref<null | HTMLDivElement>(null)

onMounted(() => {
  const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        console.debug('進入可視區域')
        page.value++
        refresh()
      }
    })
  }, {
    threshold: [0],
    root: El.value
  })
  intersectionObserver.observe(observerEl.value)
})

const page = ref(1)
const IMAGE_PER_PAGE = 3

const { refresh, pending } = useAsyncData(() => {
  /* eslint-disable no-undef */
  return $fetch('https://picsum.photos/v2/list', {
    params: {
      page: page.value,
      limit: IMAGE_PER_PAGE
    }
  }).then(res => {
    console.debug(res)
    imgList.push(...res)
    return res
  })
}, {
  server: false
})
</script>

<template>
  <div class="w-screen h-screen">
    <div
      ref="El"
      class="overflow-scroll text-centner"
    >
      <img
        v-for="item in imgList"
        :key="item.id"
        :src="item.download_url"
      >
      <div ref="observerEl">
        bottom {{ pending }}
      </div>
    </div>
  </div>
</template>
