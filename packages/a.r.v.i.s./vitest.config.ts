import { defineProject, mergeConfig } from 'vitest/config'
import configShared from '../../config/vite.config'

export default mergeConfig(
  configShared,
  defineProject({
    test: {
      // setupFiles: ['vitest.setup.ts'],
    },
  }),
)
