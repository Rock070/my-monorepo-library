<script setup lang="ts">
import { reactive } from 'vue'
import { useToggle } from '@vueuse/core'
import { ContextMenu } from 'ui'

const [isMenuOpen, toggleMeunOpen] = useToggle()
const position = reactive({
  x: 0,
  y: 0
})

const open = (event: PointerEvent) => {
  position.x = event.pageX
  position.y = event.pageY
  toggleMeunOpen(true)
}
</script>

<template>
  <div
    class="h-screen w-screen relative"
    @contextmenu.prevent="open"
  >
    <ContextMenu
      v-if="isMenuOpen"
      v-model:isMenuOpen="isMenuOpen"
      :position="position"
    />
  </div>
</template>
