import { ref } from 'vue'
import { useEventListener } from './useEventListener'
import { isClient } from 'utils/main'

export function usePointer () {
  const x = ref(0)
  const y = ref(0)
  // TODO: 更名 useClick or useClickbutton = 2
  if (isClient) {
    useEventListener(window, 'pointerdown', (evt: PointerEvent) => {
      x.value = evt.pageX
      y.value = evt.pageY
    })
  }

  return {
    x, y
  }
}
