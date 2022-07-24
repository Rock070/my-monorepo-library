<script setup lang="ts">
import { ref, watchEffect, onMounted, computed } from 'vue';
// import CloseIcon from '@/assets/images/svg/closure.svg?component';
import { useVModel, onClickOutside } from '@vueuse/core';
// import { isClient } from '@/utils';

const isClient = true

interface Props {
  /**
   * 是否顯示 Modal
   */
  modelValue: boolean;
  /**
   * 是否有背景使 modal 外的東西不可被訪問
   */
  isBackdrop?: boolean;
  /**
   * 是否顯示 closeIcon
   */
  isCloseIcon?: boolean;
  /**
   * 是否鎖定 scroll
   */
  scrollLock?: boolean;
  /**
   * todo: 是否可以拖拉
   */
  draggable?: boolean;
  /**
   * 點擊外圍關閉
   */
  clickOutsideClose?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  isBackdrop: true,
  isCloseIcon: false,
  scrollLock: false,
  draggable: false,
  clickOutsideClose: false,
});

const emit = defineEmits(['update:modelValue', 'close', 'open']);

const dialogEl = ref<HTMLDialogElement | null>(null);
const containerEl = ref<HTMLDivElement | null>(null);

const contentHeight = ref<string>('');

const show = useVModel(props, 'modelValue', emit);

const close = () => {
  show.value = false;
  if (props.scrollLock) useScrollLock(false);
  emit('close');
};

const _triggerClose = () => {
  if (dialogEl.value) dialogEl.value.close();
};

const useScrollLock = (value: boolean) => {
  const htmlEl = document.querySelector('html') as HTMLHtmlElement;
  if (value) htmlEl.style.overflow = 'hidden';
  else htmlEl.style.overflow = 'visible';
};

const open = () => {
  emit('open');
  if (dialogEl.value !== null) {
    /**
     * 顯示 Modal
     */
    if (props.isBackdrop) dialogEl.value.showModal();
    else dialogEl.value.show();
    /**
     * 滾動軸鎖定
     */
    if (isClient) {
      if (props.scrollLock) useScrollLock(true);
    }
  }
};

onMounted(() => {
  // draggable
  if (dialogEl.value && props.draggable) {
    dialogEl.value.draggable = true;
    // todo Listen to dragover event and move
  }
});

/**
 * 點擊外圍關閉 modal
 */
if (props.clickOutsideClose) {
  onClickOutside(containerEl, () => _triggerClose());
}

/**
 * 監聽 props.show 判斷要開啟或關閉
 */
watchEffect(() => {
  if (show.value) open();
  else _triggerClose();

  if (dialogEl.value?.clientHeight) {
    const HEADER_HEIGHT = 55;
    const PADDING = 36;
    contentHeight.value = `calc(${
      window.innerHeight - HEADER_HEIGHT - PADDING
    }px)`;
  }
});
</script>

<template>
  <teleport to="body">
    <dialog
      ref="dialogEl"
      v-bind="$attrs"
      class="
        p-0
        min-w-[90%] md:min-w-[50%] lg:min-w-[31%]
        scroll-none
        overflow-hidden
        rounded-lg
      "
      @close="close"
    >
      <div 
        ref="containerEl"
        class="
          w-full h-fit
         "
        :class="isBackdrop && 'p-4 lg:p-8'"
      >
        <div
          v-if="isCloseIcon"
          class="
            sticky top-4 lg:top-8 flex 
            justify-between items-center
            mb-4 bg-white
          "
        >
          <div class="text-center grow">
            <slot
              name="title"
            />
          </div>
          <!-- <CloseIcon
            width="20"
            height="20"
            class="lg:cursor-pointer"
            @click="_triggerClose"
          /> -->
        </div>
        <div
          class="overflow-y-scroll pb-6"
          :style="{ 'max-height': contentHeight }"
        >
          <slot />
        </div>
      </div>
    </dialog>
  </teleport>
</template>

<style scoped>
dialog::backdrop {
  @apply bg-[#00000066];
}
</style>
