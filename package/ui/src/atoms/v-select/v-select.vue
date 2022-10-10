<script setup lang="ts">
import IconArrow from '@/assets/svg/triangle-arrow.svg?component'
import IconSearch from '@/assets/svg/search.svg?component'
import VIconBase from '@/atoms/v-icon-base/index.vue'
import { ref, computed, watch, onMounted, nextTick } from 'vue'

interface Option {
  text: string;
  value: string | number | symbol;
}

interface Props {
  modelValue: any;
  options: Option[];

  placeholder?: string;
  searchable?: boolean;
  clearable?: boolean;
  multiple?: boolean;
}

interface Emits {
  (type: 'update:modelValue', event: Props['modelValue']): void;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  searchable: false,
  clearable: false,
  multiple: false
})

const emits = defineEmits<Emits>()

/**
 * TODO:
  * - intersectionObserver change select direction
  * - click outside
 */

const isOpen = ref(false)
const toggle = (val?: boolean) => {
  if (val) {
    isOpen.value = val
    return
  }

  isOpen.value = !isOpen.value
}
const changeActive = (val: Props['modelValue']) => {
  emits('update:modelValue', val)
  toggle(false)
}

const modelValueDisplay = computed(() => {
  const item = props.options.find(item => props.modelValue === item.value)
  if (item) return item.text

  return ''
})

/**
 * 搜尋功能
 */
const searchHandler = (event: Event) => {
  if (!props.options || props.options.length === 0 || !event.target) return

  const inputValue = (event.target as HTMLInputElement).value
  const regex = new RegExp(inputValue, 'i')

  if (!inputValue) {
    displayOptions.value = props.options
    return
  }
  displayOptions.value = props.options.filter(item => regex.test(item.text))
}

const displayOptions = ref<Option[]>([])

onMounted(() => {
  displayOptions.value = props.options
})

const vSelectFieldRef = ref<HTMLDivElement | null>(null)
const liRefs = ref<HTMLLIElement| null>(null)

const vSelectDropdownStyle = ref({})

watch(isOpen, val => {
  if (!val) return
  /**
   * 計算 dropdown teleport 位置
   */
  if (vSelectFieldRef.value) {
    const vSelectRect = vSelectFieldRef.value.getBoundingClientRect()

    const { top, right, width, height } = vSelectRect

    vSelectDropdownStyle.value = {
      top: `${top + height - 2}px`,
      right: `${right - width}px`,
      width: `${width}px`
    }
  }

  /**
   * focus 已選項目
   */
  if (props.modelValue) {
    nextTick(() => {
      if (liRefs.value) {
        const entries = Object.entries(liRefs.value)
        entries.forEach(([_, el]) => {
          if (el.classList.contains('v-select--dropdown--li__active')) {
            el.focus()
          }
        })
      }
    })
  }
})

</script>
<template>
  <div class="v-select">
    <div
      ref="vSelectFieldRef"
      tabindex="0"
      class="v-select--field"
      :style="{
        'border-bottom-width': isOpen ? '0': '1.5px',
        'border-bottom-right-radius': isOpen ? '0': '6px',
        'border-bottom-left-radius': isOpen ? '0': '6px',
      }"
      @click="toggle(!isOpen)"
    >
      <div>{{ modelValueDisplay }}</div>
      <v-icon-base
        width="12"
        height="10"
        icon-name="toggle-arrow"
        icon-title="展開或收合內容"
        class="v-select--field--icon--arrow v-select--field--icon--arrow__active"
        :class="isOpen && 'v-select--field--icon--arrow__active'"
      >
        <icon-arrow class="fill-gray-500" />
      </v-icon-base>
    </div>
    <teleport to="body">
      <div
        v-if="isOpen"
        class="v-select--dropdown"
        :style="vSelectDropdownStyle"
      >
        <div
          class="v-select--dropdown--search"
        >
          <v-icon-base
            width="12"
            height="12"
            icon-name="search"
            icno-title="搜尋"
          >
            <icon-search />
          </v-icon-base>
          <input
            type="text"
            class="v-select--dropdown--search--input"
            :placeholder="placeholder"
            @input="searchHandler($event)"
          >
        </div>
        <ul role="menu">
          <li
            v-for="item in displayOptions"
            ref="liRefs"
            :key="item.value"
            role="menuitem"
            :data-value="item.value"
            tabindex="0"
            :class="
              { 'v-select--dropdown--li__active': item.value === modelValue }
            "
            @click="changeActive(item.value)"
          >
            {{ item.text }}
          </li>
        </ul>
      </div>
    </teleport>
  </div>
</template>

<style>
.v-select {
  @apply w-full min-h-5;
  @apply text-sm;
  @apply bg-white;

  &--field {
    border-top-width: 1.5px;
    border-left-width: 1.5px;
    border-right-width: 1.5px;
    border-style: solid;
    @apply border-[#DFDFDF];
    @apply px-5 py-1;
    @apply rounded-md;
    @apply h-full flex justify-between items-center;
    @apply cursor-pointer;

    &--icon--arrow {
      @apply transition-transform ease-in-out;
      @apply rotate-180;

      &__active {
        @apply rotate-180;
      }
    }
  }

  &--dropdown {
    @apply text-sm;
    @apply box-border;
    @apply px-3 pb-3;
    @apply rounded-b-md;
    @apply border-solid border-[#DFDFDF];
    @apply border-t-0;
    @apply absolute;

    &--search {
      @apply space-x-2;
      @apply flex items-center;
      @apply px-2 py-1;
      @apply my-1;
      @apply rounded-md;
      @apply border-solid border-[#DFDFDF];

      &--input {
        @apply outline-none border-none;
        @apply w-full;
        @apply bg-transparent;
      }
    }

    &--li__active {
      @apply bg-[#E9ECF4] text-[#66849C];
    }

    ul {
      @apply p-0 m-0;
      @apply h-[calc(12px+28px*3)];
      @apply overflow-y-scroll;
    }

    li {
      @apply list-none;
      @apply cursor-pointer;
      @apply rounded-md;
      @apply px-2 py-1;
      @apply my-1;
      @apply hover:bg-[#E9ECF4] hover:text-[#66849C];
    }
  }
}
</style>
