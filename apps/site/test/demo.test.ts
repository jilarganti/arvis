import { expect, test } from 'vitest'

import { divFunc } from '@utils'
import { testFunc } from '@arvis'

test('div 10 / 2 to equal 5', () => {
    expect(divFunc(10, 2)).toBe(5)
})

test('adds 2 + 2 to equal 4', () => {
    expect(testFunc(2, 2)).toBe(4)
})
