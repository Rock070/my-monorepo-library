<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import { usePointer } from 'composables'

// TODO: 讓 style 跟 js 打包在一起
import { ContextMenu } from 'ui'

console.debug(ContextMenu)
const [isMenuOpen, toggleMeunOpen] = useToggle()
const { x, y } = usePointer()

</script>

<template>
  <div>
    <button class="bg-yellow-200">
      123
    </button>
  </div>
  <div
    class="h-screen w-screen relative"
    @contextmenu.prevent="toggleMeunOpen(true)"
  >
    <div>123</div>
    <ContextMenu
      v-if="isMenuOpen"
      v-model="isMenuOpen"
      :x="x"
      :y="y"
    />
  </div>
</template>
