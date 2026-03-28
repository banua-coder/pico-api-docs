## [v1.4.0] - 2026-03-25

### Added

- Add i18n support for all hardcoded text (en + id translations) (02aa5d4)
- Full docs redesign with stripe-style layout and updated response examples (6a7e4f8)
- Make all api urls configurable via vite_api_base_url env variable (f9da460)

### Fixed

- Resolve lint error in docsidebar and unused import in home (3d18d5b)
- Use tag push trigger instead of release published to prevent duplicate deploy runs (af978de)
- Exclude prismjs from vendor chunk so it co-locates with its consumers (2b4c4ea)
- Accept both v-prefixed and plain semver tags in deploy trigger (31fe5ac)
- Pin pnpm to 10.15.1 in dockerfile to match ci (9a273e9)
- Add pnpm.overrides to match lockfile (prevents lockfile_config_mismatch in docker) (e1c6d62)
- Do not assign prismjs to manual chunk, let rollup co-locate with importer (40e56cb)
- Use static imports for prism language plugins (no require, proper es module) (55a8e1c)
- Restore codeblock.vue with correct prism-setup import (662f463)
- Import prism from prism-setup to ensure window.prism is set before plugins (2bc66e9)
- Expose prism to window before language plugins load (3ba7d20)
- Do not split components chunk, keep prismjs co-located with codeblock (544d03a)
- Use workflow_pat org secret instead of workflow_token (7d3c22f)
- Remove trigger-deploy job (workflow_token not available, rely on pat tag push) (aab8593)

### Documentation

- Update changelog for 1.3.8 (a9e1b8d)
- Update changelog for 1.3.7 (9832774)
- Update changelog for 1.3.6 (8f0e9a1)
- Update changelog for 1.3.5 (81272a1)
- Update changelog for 1.3.4 (0bcfe71)
- Update changelog for v1.3.3 (5e9fb75)

### Maintenance

- Bump version to 1.3.8 (66900c4)
- Regenerate pnpm-lock.yaml after adding pnpm.overrides (e0a905e)
- Bump version to 1.3.7 (3cd0540)
- Prepare v1.3.7 hotfix (9df6c2e)
- Bump version to 1.3.6 (c2aba95)
- Prepare v1.3.6 hotfix (c029ec4)
- Bump version to 1.3.5 (54181e6)
- Prepare v1.3.5 hotfix (5ef9462)
- Bump version to 1.3.4 (e5ffb13)
- Prepare v1.3.4 hotfix (7f6ef19)
- Bump version to v1.4.0 for next development cycle (2c0abcd)


## [v1.3.7] - 2026-03-25

### Fixed

- Do not assign prismjs to manual chunk, let rollup co-locate with importer (40e56cb)
- Use static imports for prism language plugins (no require, proper es module) (55a8e1c)
- Restore codeblock.vue with correct prism-setup import (662f463)
- Import prism from prism-setup to ensure window.prism is set before plugins (2bc66e9)
- Expose prism to window before language plugins load (3ba7d20)
- Do not split components chunk, keep prismjs co-located with codeblock (544d03a)
- Use workflow_pat org secret instead of workflow_token (7d3c22f)
- Remove trigger-deploy job (workflow_token not available, rely on pat tag push) (aab8593)

### Documentation

- Update changelog for 1.3.6 (8f0e9a1)
- Update changelog for 1.3.5 (81272a1)
- Update changelog for 1.3.4 (0bcfe71)
- Update changelog for v1.3.3 (5e9fb75)

### Maintenance

- Bump version to 1.3.6 (c2aba95)
- Prepare v1.3.6 hotfix (c029ec4)
- Bump version to 1.3.5 (54181e6)
- Prepare v1.3.5 hotfix (5ef9462)
- Bump version to 1.3.4 (e5ffb13)
- Prepare v1.3.4 hotfix (7f6ef19)


## [v1.3.6] - 2026-03-25

### Fixed

- Do not split components chunk, keep prismjs co-located with codeblock (544d03a)
- Use workflow_pat org secret instead of workflow_token (7d3c22f)
- Remove trigger-deploy job (workflow_token not available, rely on pat tag push) (aab8593)

### Documentation

- Update changelog for 1.3.5 (81272a1)
- Update changelog for 1.3.4 (0bcfe71)
- Update changelog for v1.3.3 (5e9fb75)

### Maintenance

- Bump version to 1.3.5 (54181e6)
- Prepare v1.3.5 hotfix (5ef9462)
- Bump version to 1.3.4 (e5ffb13)
- Prepare v1.3.4 hotfix (7f6ef19)


## [v1.3.5] - 2026-03-25

### Fixed

- Do not split components chunk, keep prismjs co-located with codeblock (544d03a)
- Use workflow_pat org secret instead of workflow_token (7d3c22f)
- Remove trigger-deploy job (workflow_token not available, rely on pat tag push) (aab8593)

### Documentation

- Update changelog for 1.3.4 (0bcfe71)
- Update changelog for v1.3.3 (5e9fb75)

### Maintenance

- Bump version to 1.3.4 (e5ffb13)
- Prepare v1.3.4 hotfix (7f6ef19)


## [v1.3.4] - 2026-03-25

### Fixed

- Remove trigger-deploy job (workflow_token not available, rely on pat tag push) (aab8593)

### Documentation

- Update changelog for v1.3.3 (5e9fb75)


## [v1.3.3] - 2026-03-25

### Fixed

- Add push tags trigger alongside release published (b26f420)
- Keep prismjs and plugins in same chunk to avoid prism not defined error (8497024)
- Remove v prefix from version in package.json (cb6fc35)
- Add trigger-deploy job after release using pat (2efcc0a)

### Documentation

- Update changelog for v1.3.2 (4630a21)


## [v1.3.2] - 2026-03-25

### Fixed

- Trigger deploy on release published instead of tag push (ab066a1)

### Documentation

- Update changelog for v1.3.1 (a1b7bfd)


## [v1.3.0] - 2026-03-25

### Added

- Add i18n localization for all new endpoint sections (en + id) (7049a63)
- Add i18n localization for all new endpoint sections (en + id) (2faf3de)
- Add eslint config, fix lint errors, enable lint & typecheck in ci (e04e337)
- Add dockerfile, nginx config, and documentation for new api endpoints (76b621f)

### Fixed

- Explicitly pass lint-command and typecheck-command to reusable ci workflow (59f7f8b)
- Remove --ext flag from lint script (not supported in eslint v9 flat config) (308828f)
- Add terser as explicit dev dependency required by vite v8 (6dff0f1)
- Remove unused navbar ref in navigation.vue to fix vue-tsc build error (7feedac)
- Track pnpm-lock.yaml in git for reproducible ci builds (90ec9c3)
- Remove packagemanager field from package.json to fix pnpm version conflict in ci (64c915e)
- Specify exact pnpm version 10.15.1 to match package.json packagemanager field (06d0800)

### Tests

- Add vitest setup and component tests, enable tests in ci (8d9d56d)

### CI/CD

- Replace deploy workflow with docker build & push to ghcr (bc1cad4)
- Replace deploy.yml with reusable deploy-on-tag workflow (9b6ce13)
- Integrate banua-coder-workflow reusable workflows (d791537)

### Maintenance

- Bump version to v1.3.0 for next development cycle (99552b7)


## [v1.2.6] - 2025-09-14

### Fixed

- Resolve version extraction issue in deploy workflow release job (00458cf)

### Maintenance

- Prepare v1.2.6 hotfix (841d94f)


## [v1.2.5] - 2025-09-14

### Added

- Implement comprehensive bundle optimization and code splitting (79fa266)

### Fixed

- Resolve typescript errors in vite config for pnpm es modules (cc42a21)
- Resolve typescript errors in vue components (beebe25)

### Maintenance

- Prepare v1.2.5 hotfix (825a6f7)


## [v1.2.3] - 2025-09-14

### Fixed

- Resolve deployment trigger and merge abort issues in release automation (461ea90)


## [v1.2.2] - 2025-09-14

### Fixed

- Resolve pnpm workspace configuration error in deploy workflow (9b14edb)


## [v1.2.1] - 2025-09-14

### Fixed

- Resolve git fetch error in release-automation workflow (87b28f1)


## [v1.2.0] - 2025-09-14

### Added

- Implement liquid glass navigation and improve mobile ux (6f1240d)
- Enhance documentation with persistent sidebar and rt calculation examples (b4d9501)
- Implement selective dark mode image treatment and fix footer text size (4dd9192)
- Implement comprehensive frontend design improvements (7096d2d)
- Implement syntax highlighting with prism.js for api documentation (45f87aa)

### Changed

- Remove redundant quick api overview section from home page (8602ce4)

### Fixed

- Resolve all context access warnings in deploy.yml (5b6dcae)
- Resolve github actions workflow conflicts and deployment issues (99190d1)
- Improve mobile layout for hero section and data sources (ae203aa)
- Improve getting started section mobile layout to prevent cropping (087696b)
- Improve mobile responsiveness for samsung a33 and small screens (f9f4fe3)
- Correct changelog script arguments in workflows (327cdea)

### CI/CD

- Fix release automation workflow (workflow) (bf8c2f6)

### Maintenance

- Add claude.md configuration file (52d8463)
- Bump version to v1.2.0 for next development cycle (f2cfa92)
- Bump version to v1.2.0 for next development cycle (08a8d1e)


## [v1.1.1] - 2025-09-08

### Fixed

- Correct changelog script arguments in create-release workflow (4b1f559)

### Maintenance

- Prepare v1.1.1 hotfix (ebdc3b8)

### Other

- Duplicate create-release.yml workflow (2a30f06)

## [v1.1.0] - 2025-09-08

### Added

- Update api documentation to match latest backend implementation (79c1094)
- Enhance national historical data documentation (ae9edbb)
- Implement gitflow workflow automation following pico-api-go pattern (1178589)
- Complete api documentation overhaul with logo-matching design (04a2e51)
- Update api documentation with correct parameters and new endpoints (03eba28)

### Changed

- Redesign documentation sections with clean table-based layout (3b9de06)

### Fixed

- Workflow syntax and formatting improvements (5a0dca6)
- Remove outdated exclude_latest_case parameter from provinces endpoint (f1828d5)

### Maintenance

- Prepare v1.1.0 release (c269896)
- Remove unnecessary image.png file (e7807a8)

### Style

- Add trailing newlines to all source files (a970f94)

# Changelog for v1.0.0
## [1.5.0] - 2026-03-28

### ✨ Features

-  make all API URLs configurable via VITE_API_BASE_URL env variable (f9da460)
-  full docs redesign with Stripe-style layout and updated response examples (6a7e4f8)
-  add i18n support for all hardcoded text (EN + ID translations) (02aa5d4)
-  add back glossary section with Stripe-style design (cce1f72)
-  use CodeBlock with Prism syntax highlighting in CodePanel (9ba36b3)
-  restore full glossary with KaTeX formulas and calculation examples (ae58468)

### 🐛 Bug Fixes

-  remove trigger-deploy job (WORKFLOW_TOKEN not available, rely on PAT tag push) (aab8593)
-  use WORKFLOW_PAT org secret instead of WORKFLOW_TOKEN (7d3c22f)
-  do not split components chunk, keep prismjs co-located with CodeBlock (544d03a)
-  expose Prism to window before language plugins load (3ba7d20)
-  import Prism from prism-setup to ensure window.Prism is set before plugins (2bc66e9)
-  restore CodeBlock.vue with correct prism-setup import (662f463)
-  use static imports for prism language plugins (no require, proper ES module) (55a8e1c)
-  do not assign prismjs to manual chunk, let rollup co-locate with importer (40e56cb)
-  add pnpm.overrides to match lockfile (prevents LOCKFILE_CONFIG_MISMATCH in Docker) (e1c6d62)
-  pin pnpm to 10.15.1 in Dockerfile to match CI (9a273e9)
-  accept both v-prefixed and plain semver tags in deploy trigger (31fe5ac)
-  exclude prismjs from vendor chunk so it co-locates with its consumers (2b4c4ea)
-  use tag push trigger instead of release published to prevent duplicate deploy runs (af978de)
-  resolve lint error in DocSidebar and unused import in Home (3d18d5b)
-  remove duplicate release-branch-creation workflow (handled by reusable workflow) (ceda3e1)
-  use CodePanel component for glossary formula code blocks (21faf3f)
-  show correct parameters for each endpoint (73f3a90)
-  use Prism.highlight() instead of highlightElement() for reactive code rendering (81efb31)
-  improve mobile responsiveness - remove horizontal overflow (f6d3bcc)

### 📚 Documentation

-  update changelog for v1.3.3 (5e9fb75)
-  update changelog for 1.3.4 (0bcfe71)
-  update changelog for 1.3.5 (81272a1)
-  update changelog for 1.3.6 (8f0e9a1)
-  update changelog for 1.3.7 (9832774)
-  update changelog for 1.3.8 (a9e1b8d)
-  update changelog for 1.4.0 (f9b08c0)
-  update changelog for 1.4.1 (1e5fe80)
-  update changelog for 1.4.2 (6e890ff)
-  update changelog for 1.4.3 (a77da18)
-  update changelog for 1.4.4 (e3f6b3c)

### 🔧 Chores

-  bump version to v1.4.0 for next development cycle (2c0abcd)
-  back-merge v1.3.0 to develop (7cace92)
-  back-merge v1.3.1 to develop (66490af)
-  back-merge v1.3.2 to develop (7b22074)
-  back-merge v1.3.3 to develop (473940f)
-  prepare v1.3.4 hotfix (7f6ef19)
-  bump version to 1.3.4 (e5ffb13)
-  back-merge 1.3.4 to develop (44abde5)
-  prepare v1.3.5 hotfix (5ef9462)
-  bump version to 1.3.5 (54181e6)
-  back-merge 1.3.5 to develop (6b81bdf)
-  prepare v1.3.6 hotfix (c029ec4)
-  bump version to 1.3.6 (c2aba95)
-  back-merge 1.3.6 to develop (05d7997)
-  prepare v1.3.7 hotfix (9df6c2e)
-  bump version to 1.3.7 (3cd0540)
-  regenerate pnpm-lock.yaml after adding pnpm.overrides (e0a905e)
-  back-merge 1.3.7 to develop (e1f8738)
-  bump version to 1.3.8 (66900c4)
-  back-merge 1.3.8 to develop (a712d80)
-  prepare v1.4.0 release (8a52e4e)
-  bump version to v1.5.0 for next development cycle (814713a)
-  bump version to 1.4.1 (5f14ac9)
-  back-merge 1.4.1 to develop (550ee8f)
-  bump version to 1.4.2 (27c5b5c)
-  back-merge 1.4.2 to develop (2036271)
-  back-merge 1.4.3 to develop (beace1a)
-  back-merge 1.4.4 to develop (718613c)

### 📝 Other Changes

- Merge pull request #48 from banua-coder/chore/bump-version-to-v1.4.0-dev (31cdfb8)
- Merge pull request #51 from banua-coder/chore/back-merge-v1.3.0 (05c32bc)
- Merge pull request #54 from banua-coder/chore/back-merge-v1.3.1 (d939de7)
- Merge pull request #57 from banua-coder/chore/back-merge-v1.3.2 (dd4974b)
- Merge pull request #60 from banua-coder/chore/back-merge-v1.3.3 (80eb69c)
- Merge pull request #61 from banua-coder/chore/prepare-hotfix-v1.3.4 (1108df2)
- Merge pull request #62 from banua-coder/hotfix/1.3.4 (b4dbfcc)
- Merge pull request #63 from banua-coder/chore/back-merge-1.3.4 (9b7df39)
- Merge pull request #64 from banua-coder/chore/prepare-hotfix-v1.3.5 (8eef46c)
- Merge pull request #65 from banua-coder/hotfix/1.3.5 (132d70e)
- Merge pull request #66 from banua-coder/chore/back-merge-1.3.5 (8d99044)
- Merge pull request #67 from banua-coder/chore/prepare-hotfix-v1.3.6 (6a2e396)
- Merge pull request #68 from banua-coder/hotfix/1.3.6 (985bc35)
- Merge pull request #69 from banua-coder/chore/back-merge-1.3.6 (4e7f847)
- Merge pull request #70 from banua-coder/chore/prepare-hotfix-v1.3.7 (72c249a)
- Merge pull request #71 from banua-coder/hotfix/1.3.7 (95df5e9)
- Merge pull request #72 from banua-coder/chore/back-merge-1.3.7 (ad3828c)
- Merge pull request #74 from banua-coder/hotfix/1.3.8 (ae7c28f)
- Merge pull request #75 from banua-coder/chore/back-merge-1.3.8 (9eef133)
- Merge pull request #76 from banua-coder/fix/remove-duplicate-deploy-trigger (3ed94ef)
- Merge pull request #77 from banua-coder/feature/configurable-api-url (b150a5a)
- Merge pull request #78 from banua-coder/feature/docs-redesign-stripe-style (910c96d)
- Merge pull request #79 from banua-coder/chore/prepare-release-v1.4.0 (87c0b06)
- Merge pull request #81 from banua-coder/chore/bump-version-to-v1.5.0-dev (2c10b45)
- Merge pull request #80 from banua-coder/release/1.4.0 (75657a2)
- Merge pull request #85 from banua-coder/chore/back-merge-1.4.0 (756950a)
- Merge pull request #86 from banua-coder/hotfix/1.4.1 (9e66e9f)
- Merge pull request #87 from banua-coder/chore/back-merge-1.4.1 (bb9f6a1)
- Merge pull request #88 from banua-coder/hotfix/1.4.2 (46b02da)
- hotfix(glossary): full editorial redesign - replace AI-generic card layout with clean editorial style (4586fd2)
- Merge pull request #89 from banua-coder/chore/back-merge-1.4.2 (338d433)
- Merge pull request #90 from banua-coder/hotfix/1.4.3 (f44ef6e)
- hotfix(1.4.4): sidebar scroll-spy, version badge, code tabs light mode, glossary padding, real API responses (48f0df3)
- Merge pull request #91 from banua-coder/chore/back-merge-1.4.3 (66ecde0)
- Merge pull request #92 from banua-coder/hotfix/1.4.4 (05a61ef)
- Merge pull request #94 from banua-coder/chore/back-merge-1.4.4 (a08096c)
- Merge pull request #95 from banua-coder/fix/mobile-responsiveness (97e0960)
- Merge pull request #96 from banua-coder/release/1.5.0 (53ee259)

## [1.4.4] - 2026-03-26

### ✨ Features

-  make all API URLs configurable via VITE_API_BASE_URL env variable (f9da460)
-  full docs redesign with Stripe-style layout and updated response examples (6a7e4f8)
-  add i18n support for all hardcoded text (EN + ID translations) (02aa5d4)
-  add back glossary section with Stripe-style design (cce1f72)
-  use CodeBlock with Prism syntax highlighting in CodePanel (9ba36b3)
-  restore full glossary with KaTeX formulas and calculation examples (ae58468)

### 🐛 Bug Fixes

-  remove trigger-deploy job (WORKFLOW_TOKEN not available, rely on PAT tag push) (aab8593)
-  use WORKFLOW_PAT org secret instead of WORKFLOW_TOKEN (7d3c22f)
-  do not split components chunk, keep prismjs co-located with CodeBlock (544d03a)
-  expose Prism to window before language plugins load (3ba7d20)
-  import Prism from prism-setup to ensure window.Prism is set before plugins (2bc66e9)
-  restore CodeBlock.vue with correct prism-setup import (662f463)
-  use static imports for prism language plugins (no require, proper ES module) (55a8e1c)
-  do not assign prismjs to manual chunk, let rollup co-locate with importer (40e56cb)
-  add pnpm.overrides to match lockfile (prevents LOCKFILE_CONFIG_MISMATCH in Docker) (e1c6d62)
-  pin pnpm to 10.15.1 in Dockerfile to match CI (9a273e9)
-  accept both v-prefixed and plain semver tags in deploy trigger (31fe5ac)
-  exclude prismjs from vendor chunk so it co-locates with its consumers (2b4c4ea)
-  use tag push trigger instead of release published to prevent duplicate deploy runs (af978de)
-  resolve lint error in DocSidebar and unused import in Home (3d18d5b)
-  remove duplicate release-branch-creation workflow (handled by reusable workflow) (ceda3e1)
-  use CodePanel component for glossary formula code blocks (21faf3f)
-  show correct parameters for each endpoint (73f3a90)
-  use Prism.highlight() instead of highlightElement() for reactive code rendering (81efb31)

### 📚 Documentation

-  update changelog for v1.3.3 (5e9fb75)
-  update changelog for 1.3.4 (0bcfe71)
-  update changelog for 1.3.5 (81272a1)
-  update changelog for 1.3.6 (8f0e9a1)
-  update changelog for 1.3.7 (9832774)
-  update changelog for 1.3.8 (a9e1b8d)
-  update changelog for 1.4.0 (f9b08c0)
-  update changelog for 1.4.1 (1e5fe80)
-  update changelog for 1.4.2 (6e890ff)
-  update changelog for 1.4.3 (a77da18)

### 🔧 Chores

-  bump version to v1.4.0 for next development cycle (2c0abcd)
-  back-merge v1.3.0 to develop (7cace92)
-  back-merge v1.3.1 to develop (66490af)
-  back-merge v1.3.2 to develop (7b22074)
-  back-merge v1.3.3 to develop (473940f)
-  prepare v1.3.4 hotfix (7f6ef19)
-  bump version to 1.3.4 (e5ffb13)
-  back-merge 1.3.4 to develop (44abde5)
-  prepare v1.3.5 hotfix (5ef9462)
-  bump version to 1.3.5 (54181e6)
-  back-merge 1.3.5 to develop (6b81bdf)
-  prepare v1.3.6 hotfix (c029ec4)
-  bump version to 1.3.6 (c2aba95)
-  back-merge 1.3.6 to develop (05d7997)
-  prepare v1.3.7 hotfix (9df6c2e)
-  bump version to 1.3.7 (3cd0540)
-  regenerate pnpm-lock.yaml after adding pnpm.overrides (e0a905e)
-  back-merge 1.3.7 to develop (e1f8738)
-  bump version to 1.3.8 (66900c4)
-  back-merge 1.3.8 to develop (a712d80)
-  prepare v1.4.0 release (8a52e4e)
-  bump version to 1.4.1 (5f14ac9)
-  bump version to 1.4.2 (27c5b5c)

### 📝 Other Changes

- Merge pull request #48 from banua-coder/chore/bump-version-to-v1.4.0-dev (31cdfb8)
- Merge pull request #51 from banua-coder/chore/back-merge-v1.3.0 (05c32bc)
- Merge pull request #54 from banua-coder/chore/back-merge-v1.3.1 (d939de7)
- Merge pull request #57 from banua-coder/chore/back-merge-v1.3.2 (dd4974b)
- Merge pull request #60 from banua-coder/chore/back-merge-v1.3.3 (80eb69c)
- Merge pull request #61 from banua-coder/chore/prepare-hotfix-v1.3.4 (1108df2)
- Merge pull request #62 from banua-coder/hotfix/1.3.4 (b4dbfcc)
- Merge pull request #63 from banua-coder/chore/back-merge-1.3.4 (9b7df39)
- Merge pull request #64 from banua-coder/chore/prepare-hotfix-v1.3.5 (8eef46c)
- Merge pull request #65 from banua-coder/hotfix/1.3.5 (132d70e)
- Merge pull request #66 from banua-coder/chore/back-merge-1.3.5 (8d99044)
- Merge pull request #67 from banua-coder/chore/prepare-hotfix-v1.3.6 (6a2e396)
- Merge pull request #68 from banua-coder/hotfix/1.3.6 (985bc35)
- Merge pull request #69 from banua-coder/chore/back-merge-1.3.6 (4e7f847)
- Merge pull request #70 from banua-coder/chore/prepare-hotfix-v1.3.7 (72c249a)
- Merge pull request #71 from banua-coder/hotfix/1.3.7 (95df5e9)
- Merge pull request #72 from banua-coder/chore/back-merge-1.3.7 (ad3828c)
- Merge pull request #74 from banua-coder/hotfix/1.3.8 (ae7c28f)
- Merge pull request #75 from banua-coder/chore/back-merge-1.3.8 (9eef133)
- Merge pull request #76 from banua-coder/fix/remove-duplicate-deploy-trigger (3ed94ef)
- Merge pull request #77 from banua-coder/feature/configurable-api-url (b150a5a)
- Merge pull request #78 from banua-coder/feature/docs-redesign-stripe-style (910c96d)
- Merge pull request #79 from banua-coder/chore/prepare-release-v1.4.0 (87c0b06)
- Merge pull request #80 from banua-coder/release/1.4.0 (75657a2)
- Merge pull request #86 from banua-coder/hotfix/1.4.1 (9e66e9f)
- Merge pull request #88 from banua-coder/hotfix/1.4.2 (46b02da)
- hotfix(glossary): full editorial redesign - replace AI-generic card layout with clean editorial style (4586fd2)
- Merge pull request #90 from banua-coder/hotfix/1.4.3 (f44ef6e)
- hotfix(1.4.4): sidebar scroll-spy, version badge, code tabs light mode, glossary padding, real API responses (48f0df3)
- Merge pull request #92 from banua-coder/hotfix/1.4.4 (05a61ef)

## [1.4.3] - 2026-03-26

### ✨ Features

-  make all API URLs configurable via VITE_API_BASE_URL env variable (f9da460)
-  full docs redesign with Stripe-style layout and updated response examples (6a7e4f8)
-  add i18n support for all hardcoded text (EN + ID translations) (02aa5d4)
-  add back glossary section with Stripe-style design (cce1f72)
-  use CodeBlock with Prism syntax highlighting in CodePanel (9ba36b3)
-  restore full glossary with KaTeX formulas and calculation examples (ae58468)

### 🐛 Bug Fixes

-  remove trigger-deploy job (WORKFLOW_TOKEN not available, rely on PAT tag push) (aab8593)
-  use WORKFLOW_PAT org secret instead of WORKFLOW_TOKEN (7d3c22f)
-  do not split components chunk, keep prismjs co-located with CodeBlock (544d03a)
-  expose Prism to window before language plugins load (3ba7d20)
-  import Prism from prism-setup to ensure window.Prism is set before plugins (2bc66e9)
-  restore CodeBlock.vue with correct prism-setup import (662f463)
-  use static imports for prism language plugins (no require, proper ES module) (55a8e1c)
-  do not assign prismjs to manual chunk, let rollup co-locate with importer (40e56cb)
-  add pnpm.overrides to match lockfile (prevents LOCKFILE_CONFIG_MISMATCH in Docker) (e1c6d62)
-  pin pnpm to 10.15.1 in Dockerfile to match CI (9a273e9)
-  accept both v-prefixed and plain semver tags in deploy trigger (31fe5ac)
-  exclude prismjs from vendor chunk so it co-locates with its consumers (2b4c4ea)
-  use tag push trigger instead of release published to prevent duplicate deploy runs (af978de)
-  resolve lint error in DocSidebar and unused import in Home (3d18d5b)
-  remove duplicate release-branch-creation workflow (handled by reusable workflow) (ceda3e1)
-  use CodePanel component for glossary formula code blocks (21faf3f)
-  show correct parameters for each endpoint (73f3a90)
-  use Prism.highlight() instead of highlightElement() for reactive code rendering (81efb31)

### 📚 Documentation

-  update changelog for v1.3.3 (5e9fb75)
-  update changelog for 1.3.4 (0bcfe71)
-  update changelog for 1.3.5 (81272a1)
-  update changelog for 1.3.6 (8f0e9a1)
-  update changelog for 1.3.7 (9832774)
-  update changelog for 1.3.8 (a9e1b8d)
-  update changelog for 1.4.0 (f9b08c0)
-  update changelog for 1.4.1 (1e5fe80)
-  update changelog for 1.4.2 (6e890ff)

### 🔧 Chores

-  bump version to v1.4.0 for next development cycle (2c0abcd)
-  back-merge v1.3.0 to develop (7cace92)
-  back-merge v1.3.1 to develop (66490af)
-  back-merge v1.3.2 to develop (7b22074)
-  back-merge v1.3.3 to develop (473940f)
-  prepare v1.3.4 hotfix (7f6ef19)
-  bump version to 1.3.4 (e5ffb13)
-  back-merge 1.3.4 to develop (44abde5)
-  prepare v1.3.5 hotfix (5ef9462)
-  bump version to 1.3.5 (54181e6)
-  back-merge 1.3.5 to develop (6b81bdf)
-  prepare v1.3.6 hotfix (c029ec4)
-  bump version to 1.3.6 (c2aba95)
-  back-merge 1.3.6 to develop (05d7997)
-  prepare v1.3.7 hotfix (9df6c2e)
-  bump version to 1.3.7 (3cd0540)
-  regenerate pnpm-lock.yaml after adding pnpm.overrides (e0a905e)
-  back-merge 1.3.7 to develop (e1f8738)
-  bump version to 1.3.8 (66900c4)
-  back-merge 1.3.8 to develop (a712d80)
-  prepare v1.4.0 release (8a52e4e)
-  bump version to 1.4.1 (5f14ac9)
-  bump version to 1.4.2 (27c5b5c)

### 📝 Other Changes

- Merge pull request #48 from banua-coder/chore/bump-version-to-v1.4.0-dev (31cdfb8)
- Merge pull request #51 from banua-coder/chore/back-merge-v1.3.0 (05c32bc)
- Merge pull request #54 from banua-coder/chore/back-merge-v1.3.1 (d939de7)
- Merge pull request #57 from banua-coder/chore/back-merge-v1.3.2 (dd4974b)
- Merge pull request #60 from banua-coder/chore/back-merge-v1.3.3 (80eb69c)
- Merge pull request #61 from banua-coder/chore/prepare-hotfix-v1.3.4 (1108df2)
- Merge pull request #62 from banua-coder/hotfix/1.3.4 (b4dbfcc)
- Merge pull request #63 from banua-coder/chore/back-merge-1.3.4 (9b7df39)
- Merge pull request #64 from banua-coder/chore/prepare-hotfix-v1.3.5 (8eef46c)
- Merge pull request #65 from banua-coder/hotfix/1.3.5 (132d70e)
- Merge pull request #66 from banua-coder/chore/back-merge-1.3.5 (8d99044)
- Merge pull request #67 from banua-coder/chore/prepare-hotfix-v1.3.6 (6a2e396)
- Merge pull request #68 from banua-coder/hotfix/1.3.6 (985bc35)
- Merge pull request #69 from banua-coder/chore/back-merge-1.3.6 (4e7f847)
- Merge pull request #70 from banua-coder/chore/prepare-hotfix-v1.3.7 (72c249a)
- Merge pull request #71 from banua-coder/hotfix/1.3.7 (95df5e9)
- Merge pull request #72 from banua-coder/chore/back-merge-1.3.7 (ad3828c)
- Merge pull request #74 from banua-coder/hotfix/1.3.8 (ae7c28f)
- Merge pull request #75 from banua-coder/chore/back-merge-1.3.8 (9eef133)
- Merge pull request #76 from banua-coder/fix/remove-duplicate-deploy-trigger (3ed94ef)
- Merge pull request #77 from banua-coder/feature/configurable-api-url (b150a5a)
- Merge pull request #78 from banua-coder/feature/docs-redesign-stripe-style (910c96d)
- Merge pull request #79 from banua-coder/chore/prepare-release-v1.4.0 (87c0b06)
- Merge pull request #80 from banua-coder/release/1.4.0 (75657a2)
- Merge pull request #86 from banua-coder/hotfix/1.4.1 (9e66e9f)
- Merge pull request #88 from banua-coder/hotfix/1.4.2 (46b02da)
- hotfix(glossary): full editorial redesign - replace AI-generic card layout with clean editorial style (4586fd2)
- Merge pull request #90 from banua-coder/hotfix/1.4.3 (f44ef6e)

## [1.4.2] - 2026-03-26

### ✨ Features

-  make all API URLs configurable via VITE_API_BASE_URL env variable (f9da460)
-  full docs redesign with Stripe-style layout and updated response examples (6a7e4f8)
-  add i18n support for all hardcoded text (EN + ID translations) (02aa5d4)
-  add back glossary section with Stripe-style design (cce1f72)
-  use CodeBlock with Prism syntax highlighting in CodePanel (9ba36b3)
-  restore full glossary with KaTeX formulas and calculation examples (ae58468)

### 🐛 Bug Fixes

-  remove trigger-deploy job (WORKFLOW_TOKEN not available, rely on PAT tag push) (aab8593)
-  use WORKFLOW_PAT org secret instead of WORKFLOW_TOKEN (7d3c22f)
-  do not split components chunk, keep prismjs co-located with CodeBlock (544d03a)
-  expose Prism to window before language plugins load (3ba7d20)
-  import Prism from prism-setup to ensure window.Prism is set before plugins (2bc66e9)
-  restore CodeBlock.vue with correct prism-setup import (662f463)
-  use static imports for prism language plugins (no require, proper ES module) (55a8e1c)
-  do not assign prismjs to manual chunk, let rollup co-locate with importer (40e56cb)
-  add pnpm.overrides to match lockfile (prevents LOCKFILE_CONFIG_MISMATCH in Docker) (e1c6d62)
-  pin pnpm to 10.15.1 in Dockerfile to match CI (9a273e9)
-  accept both v-prefixed and plain semver tags in deploy trigger (31fe5ac)
-  exclude prismjs from vendor chunk so it co-locates with its consumers (2b4c4ea)
-  use tag push trigger instead of release published to prevent duplicate deploy runs (af978de)
-  resolve lint error in DocSidebar and unused import in Home (3d18d5b)
-  remove duplicate release-branch-creation workflow (handled by reusable workflow) (ceda3e1)
-  use CodePanel component for glossary formula code blocks (21faf3f)
-  show correct parameters for each endpoint (73f3a90)
-  use Prism.highlight() instead of highlightElement() for reactive code rendering (81efb31)

### 📚 Documentation

-  update changelog for v1.3.3 (5e9fb75)
-  update changelog for 1.3.4 (0bcfe71)
-  update changelog for 1.3.5 (81272a1)
-  update changelog for 1.3.6 (8f0e9a1)
-  update changelog for 1.3.7 (9832774)
-  update changelog for 1.3.8 (a9e1b8d)
-  update changelog for 1.4.0 (f9b08c0)
-  update changelog for 1.4.1 (1e5fe80)

### 🔧 Chores

-  bump version to v1.4.0 for next development cycle (2c0abcd)
-  back-merge v1.3.0 to develop (7cace92)
-  back-merge v1.3.1 to develop (66490af)
-  back-merge v1.3.2 to develop (7b22074)
-  back-merge v1.3.3 to develop (473940f)
-  prepare v1.3.4 hotfix (7f6ef19)
-  bump version to 1.3.4 (e5ffb13)
-  back-merge 1.3.4 to develop (44abde5)
-  prepare v1.3.5 hotfix (5ef9462)
-  bump version to 1.3.5 (54181e6)
-  back-merge 1.3.5 to develop (6b81bdf)
-  prepare v1.3.6 hotfix (c029ec4)
-  bump version to 1.3.6 (c2aba95)
-  back-merge 1.3.6 to develop (05d7997)
-  prepare v1.3.7 hotfix (9df6c2e)
-  bump version to 1.3.7 (3cd0540)
-  regenerate pnpm-lock.yaml after adding pnpm.overrides (e0a905e)
-  back-merge 1.3.7 to develop (e1f8738)
-  bump version to 1.3.8 (66900c4)
-  back-merge 1.3.8 to develop (a712d80)
-  prepare v1.4.0 release (8a52e4e)
-  bump version to 1.4.1 (5f14ac9)
-  bump version to 1.4.2 (27c5b5c)

### 📝 Other Changes

- Merge pull request #48 from banua-coder/chore/bump-version-to-v1.4.0-dev (31cdfb8)
- Merge pull request #51 from banua-coder/chore/back-merge-v1.3.0 (05c32bc)
- Merge pull request #54 from banua-coder/chore/back-merge-v1.3.1 (d939de7)
- Merge pull request #57 from banua-coder/chore/back-merge-v1.3.2 (dd4974b)
- Merge pull request #60 from banua-coder/chore/back-merge-v1.3.3 (80eb69c)
- Merge pull request #61 from banua-coder/chore/prepare-hotfix-v1.3.4 (1108df2)
- Merge pull request #62 from banua-coder/hotfix/1.3.4 (b4dbfcc)
- Merge pull request #63 from banua-coder/chore/back-merge-1.3.4 (9b7df39)
- Merge pull request #64 from banua-coder/chore/prepare-hotfix-v1.3.5 (8eef46c)
- Merge pull request #65 from banua-coder/hotfix/1.3.5 (132d70e)
- Merge pull request #66 from banua-coder/chore/back-merge-1.3.5 (8d99044)
- Merge pull request #67 from banua-coder/chore/prepare-hotfix-v1.3.6 (6a2e396)
- Merge pull request #68 from banua-coder/hotfix/1.3.6 (985bc35)
- Merge pull request #69 from banua-coder/chore/back-merge-1.3.6 (4e7f847)
- Merge pull request #70 from banua-coder/chore/prepare-hotfix-v1.3.7 (72c249a)
- Merge pull request #71 from banua-coder/hotfix/1.3.7 (95df5e9)
- Merge pull request #72 from banua-coder/chore/back-merge-1.3.7 (ad3828c)
- Merge pull request #74 from banua-coder/hotfix/1.3.8 (ae7c28f)
- Merge pull request #75 from banua-coder/chore/back-merge-1.3.8 (9eef133)
- Merge pull request #76 from banua-coder/fix/remove-duplicate-deploy-trigger (3ed94ef)
- Merge pull request #77 from banua-coder/feature/configurable-api-url (b150a5a)
- Merge pull request #78 from banua-coder/feature/docs-redesign-stripe-style (910c96d)
- Merge pull request #79 from banua-coder/chore/prepare-release-v1.4.0 (87c0b06)
- Merge pull request #80 from banua-coder/release/1.4.0 (75657a2)
- Merge pull request #86 from banua-coder/hotfix/1.4.1 (9e66e9f)
- Merge pull request #88 from banua-coder/hotfix/1.4.2 (46b02da)

## [1.4.1] - 2026-03-26

### ✨ Features

-  make all API URLs configurable via VITE_API_BASE_URL env variable (f9da460)
-  full docs redesign with Stripe-style layout and updated response examples (6a7e4f8)
-  add i18n support for all hardcoded text (EN + ID translations) (02aa5d4)
-  add back glossary section with Stripe-style design (cce1f72)
-  use CodeBlock with Prism syntax highlighting in CodePanel (9ba36b3)

### 🐛 Bug Fixes

-  remove trigger-deploy job (WORKFLOW_TOKEN not available, rely on PAT tag push) (aab8593)
-  use WORKFLOW_PAT org secret instead of WORKFLOW_TOKEN (7d3c22f)
-  do not split components chunk, keep prismjs co-located with CodeBlock (544d03a)
-  expose Prism to window before language plugins load (3ba7d20)
-  import Prism from prism-setup to ensure window.Prism is set before plugins (2bc66e9)
-  restore CodeBlock.vue with correct prism-setup import (662f463)
-  use static imports for prism language plugins (no require, proper ES module) (55a8e1c)
-  do not assign prismjs to manual chunk, let rollup co-locate with importer (40e56cb)
-  add pnpm.overrides to match lockfile (prevents LOCKFILE_CONFIG_MISMATCH in Docker) (e1c6d62)
-  pin pnpm to 10.15.1 in Dockerfile to match CI (9a273e9)
-  accept both v-prefixed and plain semver tags in deploy trigger (31fe5ac)
-  exclude prismjs from vendor chunk so it co-locates with its consumers (2b4c4ea)
-  use tag push trigger instead of release published to prevent duplicate deploy runs (af978de)
-  resolve lint error in DocSidebar and unused import in Home (3d18d5b)
-  remove duplicate release-branch-creation workflow (handled by reusable workflow) (ceda3e1)
-  use CodePanel component for glossary formula code blocks (21faf3f)
-  show correct parameters for each endpoint (73f3a90)

### 📚 Documentation

-  update changelog for v1.3.3 (5e9fb75)
-  update changelog for 1.3.4 (0bcfe71)
-  update changelog for 1.3.5 (81272a1)
-  update changelog for 1.3.6 (8f0e9a1)
-  update changelog for 1.3.7 (9832774)
-  update changelog for 1.3.8 (a9e1b8d)
-  update changelog for 1.4.0 (f9b08c0)

### 🔧 Chores

-  bump version to v1.4.0 for next development cycle (2c0abcd)
-  back-merge v1.3.0 to develop (7cace92)
-  back-merge v1.3.1 to develop (66490af)
-  back-merge v1.3.2 to develop (7b22074)
-  back-merge v1.3.3 to develop (473940f)
-  prepare v1.3.4 hotfix (7f6ef19)
-  bump version to 1.3.4 (e5ffb13)
-  back-merge 1.3.4 to develop (44abde5)
-  prepare v1.3.5 hotfix (5ef9462)
-  bump version to 1.3.5 (54181e6)
-  back-merge 1.3.5 to develop (6b81bdf)
-  prepare v1.3.6 hotfix (c029ec4)
-  bump version to 1.3.6 (c2aba95)
-  back-merge 1.3.6 to develop (05d7997)
-  prepare v1.3.7 hotfix (9df6c2e)
-  bump version to 1.3.7 (3cd0540)
-  regenerate pnpm-lock.yaml after adding pnpm.overrides (e0a905e)
-  back-merge 1.3.7 to develop (e1f8738)
-  bump version to 1.3.8 (66900c4)
-  back-merge 1.3.8 to develop (a712d80)
-  prepare v1.4.0 release (8a52e4e)
-  bump version to 1.4.1 (5f14ac9)

### 📝 Other Changes

- Merge pull request #48 from banua-coder/chore/bump-version-to-v1.4.0-dev (31cdfb8)
- Merge pull request #51 from banua-coder/chore/back-merge-v1.3.0 (05c32bc)
- Merge pull request #54 from banua-coder/chore/back-merge-v1.3.1 (d939de7)
- Merge pull request #57 from banua-coder/chore/back-merge-v1.3.2 (dd4974b)
- Merge pull request #60 from banua-coder/chore/back-merge-v1.3.3 (80eb69c)
- Merge pull request #61 from banua-coder/chore/prepare-hotfix-v1.3.4 (1108df2)
- Merge pull request #62 from banua-coder/hotfix/1.3.4 (b4dbfcc)
- Merge pull request #63 from banua-coder/chore/back-merge-1.3.4 (9b7df39)
- Merge pull request #64 from banua-coder/chore/prepare-hotfix-v1.3.5 (8eef46c)
- Merge pull request #65 from banua-coder/hotfix/1.3.5 (132d70e)
- Merge pull request #66 from banua-coder/chore/back-merge-1.3.5 (8d99044)
- Merge pull request #67 from banua-coder/chore/prepare-hotfix-v1.3.6 (6a2e396)
- Merge pull request #68 from banua-coder/hotfix/1.3.6 (985bc35)
- Merge pull request #69 from banua-coder/chore/back-merge-1.3.6 (4e7f847)
- Merge pull request #70 from banua-coder/chore/prepare-hotfix-v1.3.7 (72c249a)
- Merge pull request #71 from banua-coder/hotfix/1.3.7 (95df5e9)
- Merge pull request #72 from banua-coder/chore/back-merge-1.3.7 (ad3828c)
- Merge pull request #74 from banua-coder/hotfix/1.3.8 (ae7c28f)
- Merge pull request #75 from banua-coder/chore/back-merge-1.3.8 (9eef133)
- Merge pull request #76 from banua-coder/fix/remove-duplicate-deploy-trigger (3ed94ef)
- Merge pull request #77 from banua-coder/feature/configurable-api-url (b150a5a)
- Merge pull request #78 from banua-coder/feature/docs-redesign-stripe-style (910c96d)
- Merge pull request #79 from banua-coder/chore/prepare-release-v1.4.0 (87c0b06)
- Merge pull request #80 from banua-coder/release/1.4.0 (75657a2)
- Merge pull request #86 from banua-coder/hotfix/1.4.1 (9e66e9f)

## [1.4.0] - 2026-03-25

### ✨ Features

-  make all API URLs configurable via VITE_API_BASE_URL env variable (f9da460)
-  full docs redesign with Stripe-style layout and updated response examples (6a7e4f8)
-  add i18n support for all hardcoded text (EN + ID translations) (02aa5d4)

### 🐛 Bug Fixes

-  remove trigger-deploy job (WORKFLOW_TOKEN not available, rely on PAT tag push) (aab8593)
-  use WORKFLOW_PAT org secret instead of WORKFLOW_TOKEN (7d3c22f)
-  do not split components chunk, keep prismjs co-located with CodeBlock (544d03a)
-  expose Prism to window before language plugins load (3ba7d20)
-  import Prism from prism-setup to ensure window.Prism is set before plugins (2bc66e9)
-  restore CodeBlock.vue with correct prism-setup import (662f463)
-  use static imports for prism language plugins (no require, proper ES module) (55a8e1c)
-  do not assign prismjs to manual chunk, let rollup co-locate with importer (40e56cb)
-  add pnpm.overrides to match lockfile (prevents LOCKFILE_CONFIG_MISMATCH in Docker) (e1c6d62)
-  pin pnpm to 10.15.1 in Dockerfile to match CI (9a273e9)
-  accept both v-prefixed and plain semver tags in deploy trigger (31fe5ac)
-  exclude prismjs from vendor chunk so it co-locates with its consumers (2b4c4ea)
-  use tag push trigger instead of release published to prevent duplicate deploy runs (af978de)
-  resolve lint error in DocSidebar and unused import in Home (3d18d5b)
-  remove duplicate release-branch-creation workflow (handled by reusable workflow) (ceda3e1)

### 📚 Documentation

-  update changelog for v1.3.3 (5e9fb75)
-  update changelog for 1.3.4 (0bcfe71)
-  update changelog for 1.3.5 (81272a1)
-  update changelog for 1.3.6 (8f0e9a1)
-  update changelog for 1.3.7 (9832774)
-  update changelog for 1.3.8 (a9e1b8d)

### 🔧 Chores

-  bump version to v1.4.0 for next development cycle (2c0abcd)
-  back-merge v1.3.0 to develop (7cace92)
-  back-merge v1.3.1 to develop (66490af)
-  back-merge v1.3.2 to develop (7b22074)
-  back-merge v1.3.3 to develop (473940f)
-  prepare v1.3.4 hotfix (7f6ef19)
-  bump version to 1.3.4 (e5ffb13)
-  back-merge 1.3.4 to develop (44abde5)
-  prepare v1.3.5 hotfix (5ef9462)
-  bump version to 1.3.5 (54181e6)
-  back-merge 1.3.5 to develop (6b81bdf)
-  prepare v1.3.6 hotfix (c029ec4)
-  bump version to 1.3.6 (c2aba95)
-  back-merge 1.3.6 to develop (05d7997)
-  prepare v1.3.7 hotfix (9df6c2e)
-  bump version to 1.3.7 (3cd0540)
-  regenerate pnpm-lock.yaml after adding pnpm.overrides (e0a905e)
-  back-merge 1.3.7 to develop (e1f8738)
-  bump version to 1.3.8 (66900c4)
-  back-merge 1.3.8 to develop (a712d80)
-  prepare v1.4.0 release (8a52e4e)

### 📝 Other Changes

- Merge pull request #48 from banua-coder/chore/bump-version-to-v1.4.0-dev (31cdfb8)
- Merge pull request #51 from banua-coder/chore/back-merge-v1.3.0 (05c32bc)
- Merge pull request #54 from banua-coder/chore/back-merge-v1.3.1 (d939de7)
- Merge pull request #57 from banua-coder/chore/back-merge-v1.3.2 (dd4974b)
- Merge pull request #60 from banua-coder/chore/back-merge-v1.3.3 (80eb69c)
- Merge pull request #61 from banua-coder/chore/prepare-hotfix-v1.3.4 (1108df2)
- Merge pull request #62 from banua-coder/hotfix/1.3.4 (b4dbfcc)
- Merge pull request #63 from banua-coder/chore/back-merge-1.3.4 (9b7df39)
- Merge pull request #64 from banua-coder/chore/prepare-hotfix-v1.3.5 (8eef46c)
- Merge pull request #65 from banua-coder/hotfix/1.3.5 (132d70e)
- Merge pull request #66 from banua-coder/chore/back-merge-1.3.5 (8d99044)
- Merge pull request #67 from banua-coder/chore/prepare-hotfix-v1.3.6 (6a2e396)
- Merge pull request #68 from banua-coder/hotfix/1.3.6 (985bc35)
- Merge pull request #69 from banua-coder/chore/back-merge-1.3.6 (4e7f847)
- Merge pull request #70 from banua-coder/chore/prepare-hotfix-v1.3.7 (72c249a)
- Merge pull request #71 from banua-coder/hotfix/1.3.7 (95df5e9)
- Merge pull request #72 from banua-coder/chore/back-merge-1.3.7 (ad3828c)
- Merge pull request #74 from banua-coder/hotfix/1.3.8 (ae7c28f)
- Merge pull request #75 from banua-coder/chore/back-merge-1.3.8 (9eef133)
- Merge pull request #76 from banua-coder/fix/remove-duplicate-deploy-trigger (3ed94ef)
- Merge pull request #77 from banua-coder/feature/configurable-api-url (b150a5a)
- Merge pull request #78 from banua-coder/feature/docs-redesign-stripe-style (910c96d)
- Merge pull request #79 from banua-coder/chore/prepare-release-v1.4.0 (87c0b06)
- Merge pull request #80 from banua-coder/release/1.4.0 (75657a2)

## [1.3.8] - 2026-03-25

### 🐛 Bug Fixes

-  remove trigger-deploy job (WORKFLOW_TOKEN not available, rely on PAT tag push) (aab8593)
-  use WORKFLOW_PAT org secret instead of WORKFLOW_TOKEN (7d3c22f)
-  do not split components chunk, keep prismjs co-located with CodeBlock (544d03a)
-  expose Prism to window before language plugins load (3ba7d20)
-  import Prism from prism-setup to ensure window.Prism is set before plugins (2bc66e9)
-  restore CodeBlock.vue with correct prism-setup import (662f463)
-  use static imports for prism language plugins (no require, proper ES module) (55a8e1c)
-  do not assign prismjs to manual chunk, let rollup co-locate with importer (40e56cb)
-  add pnpm.overrides to match lockfile (prevents LOCKFILE_CONFIG_MISMATCH in Docker) (e1c6d62)
-  pin pnpm to 10.15.1 in Dockerfile to match CI (9a273e9)
-  accept both v-prefixed and plain semver tags in deploy trigger (31fe5ac)
-  exclude prismjs from vendor chunk so it co-locates with its consumers (2b4c4ea)

### 📚 Documentation

-  update changelog for v1.3.3 (5e9fb75)
-  update changelog for 1.3.4 (0bcfe71)
-  update changelog for 1.3.5 (81272a1)
-  update changelog for 1.3.6 (8f0e9a1)
-  update changelog for 1.3.7 (9832774)

### 🔧 Chores

-  prepare v1.3.4 hotfix (7f6ef19)
-  bump version to 1.3.4 (e5ffb13)
-  prepare v1.3.5 hotfix (5ef9462)
-  bump version to 1.3.5 (54181e6)
-  prepare v1.3.6 hotfix (c029ec4)
-  bump version to 1.3.6 (c2aba95)
-  prepare v1.3.7 hotfix (9df6c2e)
-  bump version to 1.3.7 (3cd0540)
-  regenerate pnpm-lock.yaml after adding pnpm.overrides (e0a905e)
-  bump version to 1.3.8 (66900c4)

### 📝 Other Changes

- Merge pull request #61 from banua-coder/chore/prepare-hotfix-v1.3.4 (1108df2)
- Merge pull request #62 from banua-coder/hotfix/1.3.4 (b4dbfcc)
- Merge pull request #64 from banua-coder/chore/prepare-hotfix-v1.3.5 (8eef46c)
- Merge pull request #65 from banua-coder/hotfix/1.3.5 (132d70e)
- Merge pull request #67 from banua-coder/chore/prepare-hotfix-v1.3.6 (6a2e396)
- Merge pull request #68 from banua-coder/hotfix/1.3.6 (985bc35)
- Merge pull request #70 from banua-coder/chore/prepare-hotfix-v1.3.7 (72c249a)
- Merge pull request #71 from banua-coder/hotfix/1.3.7 (95df5e9)
- Merge pull request #74 from banua-coder/hotfix/1.3.8 (ae7c28f)

## [1.3.7] - 2026-03-25

### 🐛 Bug Fixes

-  remove trigger-deploy job (WORKFLOW_TOKEN not available, rely on PAT tag push) (aab8593)
-  use WORKFLOW_PAT org secret instead of WORKFLOW_TOKEN (7d3c22f)
-  do not split components chunk, keep prismjs co-located with CodeBlock (544d03a)
-  expose Prism to window before language plugins load (3ba7d20)
-  import Prism from prism-setup to ensure window.Prism is set before plugins (2bc66e9)
-  restore CodeBlock.vue with correct prism-setup import (662f463)
-  use static imports for prism language plugins (no require, proper ES module) (55a8e1c)
-  do not assign prismjs to manual chunk, let rollup co-locate with importer (40e56cb)
-  add pnpm.overrides to match lockfile (prevents LOCKFILE_CONFIG_MISMATCH in Docker) (e1c6d62)
-  pin pnpm to 10.15.1 in Dockerfile to match CI (9a273e9)

### 📚 Documentation

-  update changelog for v1.3.3 (5e9fb75)
-  update changelog for 1.3.4 (0bcfe71)
-  update changelog for 1.3.5 (81272a1)
-  update changelog for 1.3.6 (8f0e9a1)

### 🔧 Chores

-  prepare v1.3.4 hotfix (7f6ef19)
-  bump version to 1.3.4 (e5ffb13)
-  prepare v1.3.5 hotfix (5ef9462)
-  bump version to 1.3.5 (54181e6)
-  prepare v1.3.6 hotfix (c029ec4)
-  bump version to 1.3.6 (c2aba95)
-  prepare v1.3.7 hotfix (9df6c2e)
-  bump version to 1.3.7 (3cd0540)
-  regenerate pnpm-lock.yaml after adding pnpm.overrides (e0a905e)

### 📝 Other Changes

- Merge pull request #61 from banua-coder/chore/prepare-hotfix-v1.3.4 (1108df2)
- Merge pull request #62 from banua-coder/hotfix/1.3.4 (b4dbfcc)
- Merge pull request #64 from banua-coder/chore/prepare-hotfix-v1.3.5 (8eef46c)
- Merge pull request #65 from banua-coder/hotfix/1.3.5 (132d70e)
- Merge pull request #67 from banua-coder/chore/prepare-hotfix-v1.3.6 (6a2e396)
- Merge pull request #68 from banua-coder/hotfix/1.3.6 (985bc35)
- Merge pull request #70 from banua-coder/chore/prepare-hotfix-v1.3.7 (72c249a)
- Merge pull request #71 from banua-coder/hotfix/1.3.7 (95df5e9)

## [1.3.6] - 2026-03-25

### 🐛 Bug Fixes

-  remove trigger-deploy job (WORKFLOW_TOKEN not available, rely on PAT tag push) (aab8593)
-  use WORKFLOW_PAT org secret instead of WORKFLOW_TOKEN (7d3c22f)
-  do not split components chunk, keep prismjs co-located with CodeBlock (544d03a)
-  expose Prism to window before language plugins load (3ba7d20)
-  import Prism from prism-setup to ensure window.Prism is set before plugins (2bc66e9)
-  restore CodeBlock.vue with correct prism-setup import (662f463)
-  use static imports for prism language plugins (no require, proper ES module) (55a8e1c)
-  do not assign prismjs to manual chunk, let rollup co-locate with importer (40e56cb)

### 📚 Documentation

-  update changelog for v1.3.3 (5e9fb75)
-  update changelog for 1.3.4 (0bcfe71)
-  update changelog for 1.3.5 (81272a1)

### 🔧 Chores

-  prepare v1.3.4 hotfix (7f6ef19)
-  bump version to 1.3.4 (e5ffb13)
-  prepare v1.3.5 hotfix (5ef9462)
-  bump version to 1.3.5 (54181e6)
-  prepare v1.3.6 hotfix (c029ec4)
-  bump version to 1.3.6 (c2aba95)

### 📝 Other Changes

- Merge pull request #61 from banua-coder/chore/prepare-hotfix-v1.3.4 (1108df2)
- Merge pull request #62 from banua-coder/hotfix/1.3.4 (b4dbfcc)
- Merge pull request #64 from banua-coder/chore/prepare-hotfix-v1.3.5 (8eef46c)
- Merge pull request #65 from banua-coder/hotfix/1.3.5 (132d70e)
- Merge pull request #67 from banua-coder/chore/prepare-hotfix-v1.3.6 (6a2e396)
- Merge pull request #68 from banua-coder/hotfix/1.3.6 (985bc35)

## [1.3.5] - 2026-03-25

### 🐛 Bug Fixes

-  remove trigger-deploy job (WORKFLOW_TOKEN not available, rely on PAT tag push) (aab8593)
-  use WORKFLOW_PAT org secret instead of WORKFLOW_TOKEN (7d3c22f)
-  do not split components chunk, keep prismjs co-located with CodeBlock (544d03a)

### 📚 Documentation

-  update changelog for v1.3.3 (5e9fb75)
-  update changelog for 1.3.4 (0bcfe71)

### 🔧 Chores

-  prepare v1.3.4 hotfix (7f6ef19)
-  bump version to 1.3.4 (e5ffb13)
-  prepare v1.3.5 hotfix (5ef9462)
-  bump version to 1.3.5 (54181e6)

### 📝 Other Changes

- Merge pull request #61 from banua-coder/chore/prepare-hotfix-v1.3.4 (1108df2)
- Merge pull request #62 from banua-coder/hotfix/1.3.4 (b4dbfcc)
- Merge pull request #64 from banua-coder/chore/prepare-hotfix-v1.3.5 (8eef46c)
- Merge pull request #65 from banua-coder/hotfix/1.3.5 (132d70e)

## [1.3.4] - 2026-03-25

### 🐛 Bug Fixes

-  remove trigger-deploy job (WORKFLOW_TOKEN not available, rely on PAT tag push) (aab8593)
-  use WORKFLOW_PAT org secret instead of WORKFLOW_TOKEN (7d3c22f)

### 📚 Documentation

-  update changelog for v1.3.3 (5e9fb75)

### 🔧 Chores

-  prepare v1.3.4 hotfix (7f6ef19)
-  bump version to 1.3.4 (e5ffb13)

### 📝 Other Changes

- Merge pull request #61 from banua-coder/chore/prepare-hotfix-v1.3.4 (1108df2)
- Merge pull request #62 from banua-coder/hotfix/1.3.4 (b4dbfcc)

## [v1.3.3] - 2026-03-25

### 🐛 Bug Fixes

-  add trigger-deploy job after release using PAT (2efcc0a)
-  remove v prefix from version in package.json (cb6fc35)
-  keep prismjs and plugins in same chunk to avoid Prism not defined error (8497024)
-  add push tags trigger alongside release published (b26f420)
-  remove v prefix from version (1.3.3) (f18c57f)

### 📚 Documentation

-  update changelog for v1.3.2 (4630a21)

### 🔧 Chores

-  prepare v1.3.3 hotfix (c7b531c)
-  bump version to v1.3.3 (ab60be6)
-  bump version to v1.3.3 (9c7b1f4)

### 📝 Other Changes

- Merge branch 'hotfix/v1.3.3' into chore/prepare-hotfix-v1.3.3 (31d4700)
- Merge pull request #58 from banua-coder/chore/prepare-hotfix-v1.3.3 (a667800)
- Merge pull request #59 from banua-coder/hotfix/v1.3.3 (ccad243)

## [v1.3.2] - 2026-03-25

### 🐛 Bug Fixes

-  trigger deploy on release published instead of tag push (ab066a1)

### 📚 Documentation

-  update changelog for v1.3.1 (a1b7bfd)

### 🔧 Chores

-  prepare v1.3.2 hotfix (9b501e3)
-  bump version to v1.3.2 (943664a)
-  bump version to v1.3.2 (65df9d3)

### 📝 Other Changes

- Merge branch 'hotfix/v1.3.2' into chore/prepare-hotfix-v1.3.2 (e62ff4e)
- Merge pull request #55 from banua-coder/chore/prepare-hotfix-v1.3.2 (2c6e06f)
- Merge pull request #56 from banua-coder/hotfix/v1.3.2 (3604173)

## [v1.3.1] - 2026-03-25

### 🐛 Bug Fixes

-  copy pnpm-lock.yaml in Dockerfile before install (e4f4b86)

### 📚 Documentation

-  update changelog for v1.3.0 (72dc9e2)

### 🔧 Chores

-  bump version to v1.3.1 (bb8af5e)

### 📝 Other Changes

- Merge pull request #53 from banua-coder/hotfix/v1.3.1 (dce30e4)

## [v1.3.0] - 2026-03-25

### ✨ Features

-  add Dockerfile, nginx config, and documentation for new API endpoints (76b621f)
-  add ESLint config, fix lint errors, enable lint & typecheck in CI (e04e337)
-  add i18n localization for all new endpoint sections (EN + ID) (2faf3de)
-  add i18n localization for all new endpoint sections (EN + ID) (7049a63)

### 🐛 Bug Fixes

-  specify exact pnpm version 10.15.1 to match package.json packageManager field (06d0800)
-  remove packageManager field from package.json to fix pnpm version conflict in CI (64c915e)
-  track pnpm-lock.yaml in git for reproducible CI builds (90ec9c3)
-  remove unused navbar ref in Navigation.vue to fix vue-tsc build error (7feedac)
-  add terser as explicit dev dependency required by Vite v8 (6dff0f1)
-  remove --ext flag from lint script (not supported in ESLint v9 flat config) (308828f)
-  explicitly pass lint-command and typecheck-command to reusable CI workflow (59f7f8b)
-  add pnpm-version to release workflow (4d5d316)

### 🧪 Tests

-  add Vitest setup and component tests, enable tests in CI (8d9d56d)

### 👷 CI

-  integrate banua-coder-workflow reusable workflows (d791537)
-  replace deploy.yml with reusable deploy-on-tag workflow (9b6ce13)
-  replace deploy workflow with Docker build & push to GHCR (bc1cad4)

### 🔧 Chores

-  bump version to v1.3.0 for next development cycle (99552b7)
-  back-merge v1.2.4 from main to develop (3a4a1bc)
-  back-merge v1.2.5 from main to develop (b94c5dd)
-  back-merge v1.2.6 from main to develop (adc3c88)
-  prepare v1.3.0 release (6e14674)
-  bump version to v1.3.0 (0aed4b8)

### 📝 Other Changes

- Merge pull request #26 from banua-coder/chore/bump-version-to-v1.3.0-dev (4432dc0)
- resolve: automatic conflict resolution for back-merge (5428c6d)
- Merge pull request #30 from banua-coder/chore/back-merge-v1.2.1-to-develop (5c1b6fc)
- Merge pull request #37 from banua-coder/chore/back-merge-v1.2.4-to-develop (6888dba)
- Merge pull request #40 from banua-coder/chore/back-merge-v1.2.5-to-develop (53fd83f)
- Merge pull request #43 from banua-coder/chore/back-merge-v1.2.6-to-develop (73b6f46)
- Merge pull request #44 from banua-coder/feature/add-new-endpoints-docs (ec5539f)
- Merge pull request #45 from banua-coder/feature/i18n-localization-new-endpoints (4d24a8f)
- Merge pull request #46 from banua-coder/feature/add-new-endpoints-docs (9a14761)
- Merge pull request #47 from banua-coder/chore/prepare-release-v1.3.0 (5a30f8f)
- Merge pull request #49 from banua-coder/release/v1.3.0 (1cd0f5e)


Generated on 2025-09-08
All changes

---

## ✨ Features

- implement complete i18n translations for documentation sections (
  c24cc38)
- redesign Documentation page with sidebar layout (
  7b7f287)
- implement comprehensive national endpoint documentation (
  94f6aab)
- add MIT license and API source code reference (
  95ed65b)
- create reusable Navigation component with mobile support (
  49f042a)
- implement comprehensive responsive design and mobile navigation (
  073591f)
- add comprehensive deployment system with health checks and rollback (
  ecafbf5)
- include version in backmerge PR titles (
  a2f029c)
- add changelog generation script and release automation workflow (
  05d2b27)
- add htaccess with api proxy and spa routing configuration (
  fe0d0e3)
- add partner logos and maintenance page (
  fd23051)
- implement vue spa with modern hero, features, and responsive design (
  cee2d15)
- add html entry point with comprehensive seo meta tags (
  1fc22b6)

## 🐛 Bug Fixes

- create separate branch for release preparation to avoid conflicts (c197f16f)
- handle multiline commit messages in changelog generation for first release (
  5edb93c)
- update API response examples to match actual response structure (
  3d09518)
- update branding and contact links (
  3f1961d)
- resolve CSS conflict in DataSources component (
  136a545)
- update data source URLs to correct endpoints (
  25ee3b8)
- update backmerge PR titles to use conventional commit style (
  99f59c7)

## 📝 Documentation

- update README with MIT license and API source references (
  17c22a2)

## 💎 Style

- add trailing newlines to all code files (
  71dcbee)

## 📦 Build System

- add vite, typescript, and tailwind configuration (
  9876bed)

## 👷 CI/CD

- add github action workflow for automatic backmerge to develop branch (
  8f7f494)

## 🔧 Chores

- Fix LaTeX rendering and clean up duplicate i18n setup (
  cc77722)
- Add LaTeX rendering for mathematical formulas in Rt calculation (
  495256f)
- Fix glossary section by removing broken i18n implementation (
  031088b)
- Fix i18n implementation in GlossarySection component (
  0aff2ef)
- Add Rt formula, references, and Vue i18n internationalization (
  98933e0)
- Add Indonesian COVID-19 terminology to glossary (
  2ea7fde)
- Refactor Documentation into subcomponents and add Glossary (
  5eed45c)
- Fix mobile layout spacing and improve Coming Soon styling (

685343.

- initial project setup with gitignore and readme (
  2960bc5)

---

## 📊 Statistics

- Total commits: 33

---
