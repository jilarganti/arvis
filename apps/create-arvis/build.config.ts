import path from 'node:path'
import url from 'node:url'
import { defineBuildConfig } from 'unbuild'
import licensePlugin from '../arvis/rollupLicensePlugin'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

export default defineBuildConfig({
    entries: ['src/index'],
    clean: true,
    rollup: {
        inlineDependencies: true,
        esbuild: {
            target: 'node18',
            minify: true,
        },
    },
    alias: {
        // we can always use non-transpiled code since we support node 18+
        prompts: 'prompts/lib/index.js',
    },
    hooks: {
        'rollup:options'(ctx, options) {
            options.plugins = [
                options.plugins,
                // TODO: unbuild uses rollup v3 and arvis uses rollup v4
                licensePlugin(path.resolve(__dirname, './LICENSE'), 'create-app license', 'create-app'),
            ]
        },
    },
})
