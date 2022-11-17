# Playwright Spikes

> This project is to spike and investigate features of Playwright. Currenlty attempting the following:

- POM
- API requests
- Configuration options
- Allure Report
- Lighthouse

## Built With

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

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/download/) use recent version (>16)
- [typescript](https://www.npmjs.com/package/typescript)
- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

### Useful Tools

> The following will be consider essential but you can use optional tools:

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

### Setup

- Ensure all prerequisties are installed as outlined above.

You will need to create a .env file at the root folder which will configure your local settings, this will _NOT_ be in source control. See [.env File Creation](docs/wiki/README.md)

In all of the following cases, there will multiple options and ways to perform these actions but this is a cut down CLI version. Review the [Wiki](docs/wiki/README.md) for alternatives. You will be running these commands via a VsCode terminal.

Build

```sh
npm run build
```

Linter

```sh
npm run lint
```

## Run tests

There are several ways to run tests and most configuration options will found in the [Wiki](docs/wiki/README.md), for more advanced options consult [Playwright](https://playwright.dev/)

All Tests

```sh
npm run test
```

Unit Test Only

```sh
npm run test --project=unit
```

Functional Test Only

```sh
npm run test --project=functional
```

E2e Test Only with Chromium

```sh
npm run test --project=e2e
```

## See also

- [Swag - UI Regression Wiki](docs/wiki/README.md)
