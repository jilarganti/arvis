import { defaultExclude, defineProject } from 'vitest/config'

export default defineProject({
    test: {
        name: 'arvis-scoped:unit',
        includeSource: ['src/**/*.ts'],
        exclude: [...defaultExclude, 'test/fixtures/**'],
    },
})
