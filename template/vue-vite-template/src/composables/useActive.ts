import { ref } from 'vue'

import type { Ref } from 'vue'
/**
 * 用法：
 *
 * ```ts
 * const { activeValue, changeActive } = useActive('1',
 *   () => {
 *     console.log(123)
 *    }
 * )
 * ```
 *
 * 取得 active tab => activeValue.value;
 *
 * 切換 toggle tab => changeActive('value')
 */
const useActive = <T = any>(
  rawData: T,
  cb?: (newData: T) => void | undefined,
) => {
  const activeValue = ref<T>(rawData) as Ref<T>

  const changeActive: (newData: T) => void = (newData) => {
    if (newData === activeValue.value)
      return

    activeValue.value = newData
    /**
     * 更改 active 時的副作用
     * 有傳入 callback 就會執行
     */
    cb?.(newData)
  }
  return [activeValue, changeActive] as const
}

export default useActive
