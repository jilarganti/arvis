// config.test.js
import { describe, it, expect } from 'vitest'
import { shared } from '../apps/site/.vitepress/config/shared'

describe('Shared Vitepress Config', () => {
    it('should have a title', () => {
        expect(shared.title).toBe('A.R.V.I.S.')
    })

    it('should have lastUpdated set to true', () => {
        expect(shared.lastUpdated).toBe(true)
    })

    it('should have cleanUrls set to true', () => {
        expect(shared.cleanUrls).toBe(true)
    })

    it('should have metaChunk set to true', () => {
        expect(shared.metaChunk).toBe(true)
    })

    //   it('should have math enabled in markdown', () => {
    //     expect(shared.markdown.math).toBe(true)
    //   })

    // Добавьте другие тесты для проверки свойств конфигурации
})
