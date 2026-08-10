# Learn Playwright Fundamentals

A hands-on TypeScript project for learning browser automation with Playwright. The examples progress from basic browser interactions to reusable test architecture, reporting, and data-driven testing.

## Topics covered

- Browser and page basics, locators, XPath, assertions, and test annotations
- Web tables, select controls, frames, iframes, alerts, SVG, and Shadow DOM
- Keyboard and mouse actions, hover, drag and drop, scrolling, uploads, and downloads
- Session storage, hooks, fixtures, and multiple-element handling
- Allure and custom reporting
- Data-driven tests using arrays, JSON, CSV, YAML, MySQL, XLSX, and Faker.js
- Page Object Model examples with reusable login and inventory page classes
- Miscellaneous and advanced framework examples

## Project structure

Each numbered directory contains focused examples and practice tests:

```text
tests/
├── 01_Basics/                    # Core Playwright concepts
├── 02_first_tests/               # First tests and validations
├── 03_Locators_Commands/         # Locators, XPath, and commands
├── 04_Session_Storage/           # Session storage
├── 05_Allure_Reporting/          # Allure reporting
├── 06_Multiple_Element/          # Multiple-element handling
├── 07_WebTables/                 # Web table interactions
├── 08_Web_Select_Frames_Iframe/  # Selects, frames, and iframes
├── 09_Frame_Iframe/              # Frame practice
├── 10_Keyboard_Hover_Drag_Drop/  # Keyboard and mouse actions
├── 11_JS_Alerts/                 # JavaScript dialogs
├── 12_Handle_SVG/                # SVG elements
├── 13_Shadow_DOM/                # Shadow DOM
├── 14_FileUpload/                # File uploads
├── 15_File_Download/             # File downloads
├── 16_Scroll_toElement/          # Scrolling
├── 17_Expect_Assertions/         # Assertions
├── 18_Test_hooks/                # Hooks and lifecycle
├── 19_Data_Driven_Testing/       # External test data and Faker.js
├── 20_Page_Object_Model/         # POM examples
├── 21_Fixture/                   # Custom fixtures
├── 22_Misc_Concepts/             # Miscellaneous concepts
└── 23_Advance_Framework/         # Advanced framework examples
```

The project configuration is in `playwright.config.ts`. Tests are discovered from `tests/` and files matching `**/*.spec.ts` run against Chromium. The default configuration runs headed with tracing, video, and failure screenshots enabled.

## Setup

Install Node.js dependencies and the Playwright browser:

```bash
npm install
npx playwright install chromium
```

## Run tests

Run the complete suite:

```bash
npm test
```

Run tests in headless mode or run a specific directory:

```bash
npx playwright test --headed=false
npx playwright test tests/19_Data_Driven_Testing
```

Generate and open the HTML report:

```bash
npx playwright show-report
```

## Data-driven testing

The examples in `tests/19_Data_Driven_Testing/` read test data from JSON, CSV, YAML, XLSX, and MySQL, and also demonstrate generated data with Faker.js. The MySQL example is opt-in: set `MYSQL_HOST` (and, if needed, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`, and `MYSQL_DATABASE`) and load `test-data/login-data.sql` before running it.

The XLSX example uses `test-data/login-data.xlsx`. Regenerate that file with:

```bash
node tests/19_Data_Driven_Testing/util/generateExcel.js
```

## Reports and generated files

- Playwright HTML reports are written to `playwright-report/`.
- Test artifacts are written to `test-results/`.
- Allure results are written to `allure-results/`.
- Custom reporter output is written to `tta-report/`.

These generated directories and local environment files are excluded from Git. To create an Allure report after a run:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Contributing

Add new examples or improve existing tests on a separate branch, then open a pull request with a clear summary.
