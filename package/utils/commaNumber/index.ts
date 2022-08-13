// TODO: 第二個參數, 分隔符號

export const numberComma = (num: number) => {
  const comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
  return num.toString().replace(comma, ',')
}
