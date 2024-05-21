
"git": {
			"commitMessage": "chore: release v${version}",
			"requireBranch": "main",
			"requireCleanWorkingDir": false
		},
		"hooks": {
			"before:init": [
				"git pull"
			],
			"after:bump": "npx auto-changelog -p --hide-credit --starting-version 0.1.4"
		},
		"github": {
			"release": true,
			"comments": {
				"submit": true
			}
		},
		"npm": {
			"publish": false
		},
		"plugins": {
			"@release-it/bumper": {
				"out": {
					"file": "package.json",
					"path": [
						"dependencies.docs"
					]
				}
			},
			"release-it-pnpm": {
				"disableRelease": true,
				"inFile": "CHANGELOG.md",
				"publishCommand": "pnpm -r publish --access public --no-git-checks"
			}
		}
	
