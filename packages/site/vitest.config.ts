import { defineProject, mergeConfig } from "vitest/config"
import configShared from "../../configs/vite.config"

export default mergeConfig(
  configShared,
  defineProject({
    test: {
      setupFiles: ["vitest.setup.ts"],
    },
  }),
)
