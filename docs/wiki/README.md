# Swag - UI Regression Wiki

- [Swag - UI Regression Wiki](#swag---ui-regression-wiki)
  - [About the Project](#about-the-project)
    - [Built With](#built-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Useful Tools](#useful-tools)
    - [Setup](#setup)
  - [Usage](#usage)
  - [Reports](#reports)
  - [Wiki Sections](#wiki-sections)

## About the Project

> This test project is used to run critical end to end workflows that can be used as a Github action or be run locally or from Octopus. This will be used to replace needing to use TRON and Robot Framework during release hardening. This project will not be used for complete coverage but will be used to test critical integration and workflows that need to be verified for a release/deployment prior to pushing to production.

<!-- Built With -->

### Built With

- [TypeScript](https://www.typescriptlang.org/) as the programming language
- [Playwright](https://playwright.dev/) for browser automation
- [Playwright Test](https://playwright.dev/docs/api/class-test) as the core test framework
- [Chromium](https://www.chromium.org/chromium-projects/) as the local browser for testing
- [npm](https://www.npmjs.com/) for dependency management

Additionally, we are using the following:

- [ESLint](https://eslint.org/)
- [Falso](https://ngneat.github.io/falso/)
- [xml2js](https://www.npmjs.com/package/xml2js)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Prettier](https://prettier.io/)

<!-- Getting Started -->

## Getting Started

- Clone the repo using SSH

```sh
git@github.com:PartsTrader/ptus.e2e.regression.git
```

- Navigate to folder and install npm packages using:

```sh
npm install
npx playwright install
```

<!-- Prerequisites -->

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/download/) use recent version (>16)
- [typescript](https://www.npmjs.com/package/typescript)
- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

<!-- Useful Tools -->

### Useful Tools

> The following will be consider essential but you can you optional tools:

- [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [Playwright Trace Viewer for VSCode](https://marketplace.visualstudio.com/items?itemName=ryanrosello-og.playwright-vscode-trace-viewer)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Prettir ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

> Optional

- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Path Intellsense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [XML Tools](https://marketplace.visualstudio.com/items?itemName=DotJoshJohnson.xml)
- [JSON Tools](https://marketplace.visualstudio.com/items?itemName=eriklynd.json-tools)

<!-- Setup -->

### Setup

> You will need to [create a .env file](./tools/dotenv.md#configuration) to hold your initial settings when running locally. This file will NOT be commited to the repository it is in the .gitignore file. Once this is done you will be able to run your tests against this environment.

<!-- Usage -->

## Usage

> You can run locally any environment so long as a environment file is created for it, or you can use CUSTOM and this will allow you to tweak the .env file. Alternatively, you can execute the test via GH Actions, but only to environments that have been setup in the repository.

<!-- Reports -->

## Reports

> Currently the reporting is configured to run [list] when executing the tests. This makes it easier to follow in the GH Actions to know which test is running as well as getting an early indication of what tests are passing and failing. The final job execution file is using [html], this may be adjust to using allure reporting if we find them more useful.

<!-- Initial Project Setup -->

## Wiki Sections

> The Wiki has been organised into the following sections:

[Framework](framework/README.md) |
[Scenarios](scenarios/README.md) |
[Standards](standards/README.md) |
[Tools](tools/README.md)

[Back to Top](#swag---ui-regression-wiki)
