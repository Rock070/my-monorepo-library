
/**
 * Get random number between min, max
 * @param min minimum boundary, result may equal
 * @param max maximum boundary, result may equal
 * @returns { number } number between min, max
 */
export const random = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min))
}
