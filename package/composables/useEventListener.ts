import { onMounted, onUnmounted } from 'vue'
import { isClient } from 'utils/main'

interface EventListener {
  (evt: Event): void
}

export function useEventListener (
  target: Window,
  event: string,
  listener: EventListener,
  options?: boolean | AddEventListenerOptions
) {
  /**
    * TODO: 處理 SSR 情境
    * TODO: Event 型別優化
    */
  console.debug('onMounted')
  console.debug(target, event, listener)
  onMounted(() => {
    target.addEventListener(event, listener, options)
  })

  onUnmounted(() => {
    target.removeEventListener(event, listener, options)
  })
}
