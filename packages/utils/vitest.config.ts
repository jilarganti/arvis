import { defaultExclude, defineProject } from 'vitest/config'

export default defineProject({
    test: {
        name: 'utils-scoped:unit',
        includeSource: ['src/**/*.ts'],
        exclude: [...defaultExclude, 'test/fixtures/**'],
    },
})
