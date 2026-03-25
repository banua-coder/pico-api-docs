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
