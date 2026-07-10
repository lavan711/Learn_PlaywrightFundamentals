# Learn Playwright Fundamentals

This repository contains a Playwright test project created with `npm init playwright@latest`.

## Project Contents

- `playwright.config.ts` - Playwright test runner configuration
- `tests/example.spec.ts` - Sample Playwright tests for the Playwright website
- `tsconfig.json` - TypeScript configuration for Playwright and Node
- `package.json` - Project dependencies and test script

## Setup

```bash
npm install
```

## Run tests

```bash
npm test
```

To run tests in headed mode:

```bash
npx playwright test --headed
```

## Notes

- The project uses `@playwright/test`.
- Test reports are generated in `playwright-report/`.
- `tsconfig.json` includes Node types required for Playwright config.
