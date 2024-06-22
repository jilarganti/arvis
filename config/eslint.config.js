import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
    {
        ignores: ['**/dist'],
    },
    { languageOptions: { globals: globals.browser } },
    ...tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/no-unused-vars': 'warn',
        },
    },
]
