<script setup lang="ts">
import { useEventListener, useToggle } from '@vueuse/core'
import { isClient } from 'utils/is'
import { debounce } from 'utils'

const [isShow, toggleShow] = useToggle(true)

if (isClient) {
  useEventListener(
    window,
    'scroll',
    debounce(() => {
      toggleShow(true)
    }, 150),
    { passive: true }
  )
  useEventListener(
    window,
    'pointermove',
    () => {
      if (isShow.value) toggleShow(false)
    },
    { passive: true }
  )
}
</script>

<template>
  <transition>
    <div
      v-show="isShow"
      class="fixed bottom-0 w-screen"
    >
      <slot />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(100%);
}

.v-enter-to,
.v-leave-from {
  transform: translateX(0);
}
</style>
