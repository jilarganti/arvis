import { release } from '@vitejs/release-scripts'
import colors from 'picocolors'
import { logRecentCommits, run, updateDocsVersion, updateTemplateVersions } from './releaseUtils'

let path = 'packages/'

release({
    repo: 'arvis',
    packages: ['arvis', 'create-arvis', 'docs', 'ai', 'media'],
    toTag: (pkg, version) => (pkg === 'arvis' ? `v${version}` : `${pkg}@${version}`),
    logChangelog: (pkg) => logRecentCommits(pkg),
    generateChangelog: async (pkgName) => {
        if (pkgName === 'create-arvis') await updateTemplateVersions()
        if (pkgName === 'docs') {
            path = ''
            await updateDocsVersion()
        }

        const changelogArgs = [
            'conventional-changelog',
            '-p',
            'angular',
            '-i',
            'CHANGELOG.md',
            '-s',
            '--commit-path',
            '.',
        ]
        if (pkgName !== 'arvis') changelogArgs.push('--lerna-package', pkgName)
        await run('npx', changelogArgs, { cwd: `${path}${pkgName}` })
        console.log(colors.cyan('\nGenerating changelog...' + '\n' + changelogArgs + `${path}${pkgName}`))
    },
})
