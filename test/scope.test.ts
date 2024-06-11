// sum.test.js
import { expect, test } from 'vitest'
import { sum } from '../packages/utils/src'
// import { sum } from '@arvis/utils/src'

test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4)
})
