import { describe, it, expect } from "vitest"
import { en } from "@site/en"

describe("en.ts configuration", () => {
  it("should have correct lang", () => {
    expect(en.lang).toBe("en-US")
  })

  it("should have a non-empty description", () => {
    expect(en.description).toBeTruthy()
    expect(en.description?.length).toBeGreaterThan(0)
  })

  it("should have themeConfig with nav and sidebar", () => {
    expect(en.themeConfig).toBeDefined()
    expect(en.themeConfig?.nav).toBeDefined()
    expect(en.themeConfig?.sidebar).toBeDefined()
  })

  it("should have a footer with a message and copyright", () => {
    expect(en.themeConfig?.footer).toBeDefined()
    expect(en.themeConfig?.footer?.message).toBe("Released under the MIT License.")
    expect(en.themeConfig?.footer).toHaveProperty("copyright")
  })
})
