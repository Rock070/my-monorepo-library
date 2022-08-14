import { random } from './index'
import { describe, expect, test } from 'vitest'

describe('random', () => {
  test('small range', () => {
    expect(random(2, 4)).toBeGreaterThanOrEqual(2)
    expect(random(2, 4)).toBeLessThanOrEqual(4)
  })

  test('big range', () => {
    expect(random(0, 10000)).toBeGreaterThanOrEqual(0)
    expect(random(0, 10000)).toBeLessThanOrEqual(10000)
  })

  test('min value bigger than max value ', () => {
    expect(random(4, 1)).toBeLessThanOrEqual(4)
  })
})
