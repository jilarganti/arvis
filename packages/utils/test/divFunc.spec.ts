import { expect, test } from "vitest"
import { divFunc } from "@utils"

test("div 10 / 2 to equal 5", () => {
  expect(divFunc(10, 2)).toBe(5)
})
