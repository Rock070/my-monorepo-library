export function throttle (func, delay: number) {
  let timer
  return () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func()
    }, delay)
  }
}
