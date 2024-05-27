module.exports = {
    extends: 'semantic-release-monorepo',
    branches: ['main'],
    repositoryUrl: 'https://github.com/jilarganti/arvis',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        [
            '@semantic-release/github',
            {
                assets: [
                    { path: 'dist/asset.min.css', label: 'CSS distribution' },
                    { path: 'dist/asset.min.js', label: 'JS distribution' },
                ],
            },
        ],
    ],
}
