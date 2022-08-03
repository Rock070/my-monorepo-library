/**
 * 使用 Set 資料結構收集事件，不重複
 * 在 call stack 完全執行完後才會執行 queue 內的內容
 * 不阻塞 stack
 */

const queue = new Set()
const p = Promise.resolve()
let isFlushing = false

export const queueJob = (task: Function) => {
  queue.add(task)

  if (!isFlushing) {
    isFlushing = true
    p.then(() => {
      try {
        queue.forEach(job => job())
      } finally {
        isFlushing = false
        queue.clear()
      }
    })
  }
}
