# Arvis Contributing Guide

Hi! We're really excited that you are interested in contributing to Arvis. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Pull Request Guidelines](#pull-request-guidelines)

## Pull Request Guidelines

- Checkout a topic branch from the relevant branch, e.g. `main`, and merge back against that branch.

- If adding a new feature:

  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing bug:

  - Provide a detailed description of the bug in the PR. Live demo preferred.

- It's OK to have multiple small commits as you work on the PR - GitHub can automatically squash them before merging.

- Commit messages must follow the [commit message convention](https://www.conventionalcommits.org/en/v1.0.0/) so that changelogs can be automatically generated.

## How To Contribute

### Triage Issues and Help Out in Discussions

Check out the issues and discussions for the project you want to help. For example, here are the [issues board](https://github.com/users/jilarganti/projects/4) and [discussions](https://github.com/jilarganti/arvis/discussions) for Arvis. Helping other users, sharing workarounds, creating reproductions, or even poking into a bug a little bit and sharing your findings makes a huge difference.

## Development Setup

You will need [pnpm](https://pnpm.io)

After cloning the repo, run:

```sh
# install the dependencies of the project
$ pnpm install
```

### Setup Arvis Dev Environment

The easiest way to start testing out Arvis is to tweak the Arvis docs. You may run `pnpm test` to boot up Arvis documentation site locally, with live reloading of the source code.

```sh
$ pnpm dev
```

After executing the above command, visit http://localhost:5173 and try modifying the source code. You'll get live update.
