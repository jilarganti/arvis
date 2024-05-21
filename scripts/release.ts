import { release } from '@vitejs/release-scripts'
import colors from 'picocolors'
import { logRecentCommits, run, updateTemplateVersions } from './releaseUtils'

release({
  repo: 'arvis',
  packages: ['arvis', 'create-arvis', 'ai', 'media'],
  toTag: (pkg, version) =>
    pkg === 'arvis' ? `v${version}` : `${pkg}@${version}`,
  logChangelog: (pkg) => logRecentCommits(pkg),
  generateChangelog: async (pkgName) => {
    if (pkgName === 'create-arvis') await updateTemplateVersions()

    console.log(colors.cyan('\nGenerating changelog...'))
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
    await run('npx', changelogArgs, { cwd: `packages/${pkgName}` })
  },
})
