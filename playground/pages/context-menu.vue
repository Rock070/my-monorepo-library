<script setup lang="ts">
import { reactive, ref, onMounted, onUnmounted, Ref, ButtonHTMLAttributes } from 'vue'
import { useToggle } from '@vueuse/core'
import { ContextMenu } from 'ui'
import { isClient } from 'utils'
import ui from './ui.vue'
import { usePointer, useEventListener } from 'composables'

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
