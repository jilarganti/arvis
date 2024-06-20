import { defaultExclude, defineProject } from 'vitest/config'

export default defineProject({
    test: {
        name: 'site-scoped:unit',
        includeSource: ['src/**/*.ts'],
        exclude: [...defaultExclude, 'test/fixtures/**'],
    },
})
