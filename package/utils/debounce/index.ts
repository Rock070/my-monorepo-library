/**
 * 正常電腦螢幕 fps 為 60Hz,
 * 代表每秒重繪 60 次,
 * 公式 1000ms/60 ≈ 16.67ms,
 * 為了避免某種可能性，resize 的時候導致重複觸發重繪,
 * 設定為 16.67 * 2 = 33.34
 *
 * Common computer monitor FPS is 60Hz,
 * which means 60 redraws per second.
 * Calculation formula: 1000ms/60 ≈ 16.67ms,
 * In order to avoid a certain chance of repeated triggering when `resize`,
 * set wait to 16.67 * 2 = 33.34
 */

export const debounce = <T extends (...args: any[]) => any>(fn: T, delay = 33.34) => {
  let timer: ReturnType<typeof setTimeout> | null

  return ((...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(args), delay)
  }) as T
}
