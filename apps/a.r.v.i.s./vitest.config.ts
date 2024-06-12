import { defaultExclude, defineProject } from 'vitest/config'

export default defineProject({
    test: {
        name: 'a.r.v.i.s.-scoped:unit',
        includeSource: ['src/**/*.ts'],
        exclude: [...defaultExclude, 'test/fixtures/**'],
    },
})
