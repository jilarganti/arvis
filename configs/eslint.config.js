// @ts-check

/**
 * @see https://typescript-eslint.io/getting-started/
 */
import tseslint from "typescript-eslint"

export default tseslint.config(
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,

  {
    ignores: ["**/.vitepress/{dist,cache}", "**/.nuxt", "vitest-report"],
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
)
