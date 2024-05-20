{
  "plugins": {
    "release-it-pnpm": {
      "disableRelease": true,
      "inFile": "CHANGELOG.md",
      "publishCommand": "vsce publish --no-dependencies"
    }
  },
  "git": {
    "commitMessage": "chore: release v${version}",
    "requireBranch": "main",
    "requireCleanWorkingDir": false
  },
  "hooks": {
    "before:init": [
      "git pull"
    ],
    "after:bump": "npx auto-changelog -p --hide-credit --starting-version 0.1.4 --hide-empty-releases --release-summary"
  },
  "github": {
    "release": true
  },
  "npm": {
    "publish": false
  }
}