/**
 * @func count 尋找一個「子字串」在主字串中出現的次數
 * @param str 字串
 * @param target 要尋找的文字
 * @returns 文字出現在字串內的次數
 */

export const count = (str: string, target: string) => {
  const regex = new RegExp(target, 'g')
  return str.match(regex)?.length || 0
}

/**
 * 內建在 String prototype 中
  String.prototype.count = function (target) {
    const regex = new RegExp(target, 'g')
    return this.match(regex)?.length || 0
  }
 */
