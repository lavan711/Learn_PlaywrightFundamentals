# Learn Playwright Fundamentals

This repository is a hands-on Playwright learning project covering the basics of browser automation, locators, assertions, test annotations, frames, uploads, downloads, and more.

## What is included

- Playwright configuration in `playwright.config.ts`
- Example and practice tests under the `tests/` folder
- TypeScript support via `tsconfig.json`
- Project dependencies and scripts in `package.json`
- Generated Playwright reports in `playwright-report/`
- Generated Allure results and custom test reports are stored in `allure-results/` and `tta-report/` and are excluded from version control.

## Project structure

- `tests/01_Basics/` - Core Playwright concepts and test annotations
- `tests/02_first_tests/` - First test examples and basic validations
- `tests/03_Locators_Commands/` - Locators, XPath, and command usage
- `tests/04_Session_Storage/` - Session storage related examples
- `tests/05_Allure_Reporting/` - Reporting examples
- `tests/06_Multiple_Element/` onward - Advanced UI and automation scenarios

## Setup

Install dependencies:

```bash
npm install
```

## Run tests

Run all tests:

```bash
npm test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Generate and open the HTML report:

```bash
npx playwright show-report
```

## Notes

- The project uses `@playwright/test`.
- Test results are stored in `test-results/`.
- HTML reports are generated in `playwright-report/`.
- Additional generated report artifacts are written to `allure-results/` and `tta-report/` and are not committed to Git.
- The repository is intended for learning and practicing Playwright fundamentals.

## Contribution

Feel free to add new examples or improve existing tests. Create a branch, make your changes, and open a pull request with a clear summary.
