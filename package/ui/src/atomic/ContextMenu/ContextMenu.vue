<script setup lang="ts">
import { onClickOutside } from 'composables'

interface Props {
  position: {
    x: number;
    y: number;
  }
  isMenuOpen: boolean;
}

interface Emits {
  (e: 'update:isMenuOpen', value: boolean): void;
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const menuList = [
  {
    label: '關閉',
    event: () => emit('update:isMenuOpen', false)
  },
  {
    label: 'alert',
    event: () => { alert(123) }
  }
]
/**
 * TODO:
 *   - ClickOutsideClose
 *   - 根據螢幕寬度判斷展開方向
 */
</script>

<template>
  <div
    class="
    w-min-[200px]
    w-fit
    w-max-[500px]
    border border-stone-400 border-solid
    rounded-sm
    absolute
  "
    :style="{
      top: position.y + 'px',
      left: position.x + 'px'
    }"
  >
    <ul>
      <li
        v-for="item in menuList"
        :key="item.label"
        class="cursor-pointer hover:bg-light-500 px-4 py-1"
        @click="item.event"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>
