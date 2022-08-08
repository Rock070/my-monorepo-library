<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useAsyncData } from '#imports'

interface ImgList {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
}

const imgList = reactive([])

const El = ref<null | HTMLDivElement>(null)
const observerEl = ref<null | HTMLDivElement>(null)

onMounted(() => {
  const intersectionObserver = new IntersectionObserver(([entries]) => {
    if (entries && entries.isIntersecting) {
      console.debug('進入可視區域')
      page.value++
      refresh()
    }
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
  return $fetch<ImgList[]>('https://picsum.photos/v2/list', {
    params: {
      page: page.value,
      limit: IMAGE_PER_PAGE
    }
  }).then(res => {
    imgList.push(...res)
    return res
  })
}, {
  server: false
})
</script>

<template>
  <div
    class="w-screen h-screen flex justify-center py-10"
  >
    <div
      ref="El"
      class="
        relative
        h-80vw w-500px
        mx-2 overflow-y-auto
        border-4 border-solid border-fuchsia-200
      "
    >
      <img
        v-for="item in imgList"
        :key="item.id"
        :src="item.download_url"
      >
      <div
        ref="observerEl"
        class="text-center"
      >
        碰到底了
        <!-- TODO: loding 動畫 -->
      </div>
    </div>
  </div>
</template>

<style>
html {
 @apply bg-yellow-200;
}
</style>
