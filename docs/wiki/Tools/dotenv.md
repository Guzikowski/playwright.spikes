# Swag - UI Regression -> Tools -> dotenv

<!-- TABLE OF CONTENTS -->

- [Swag - UI Regression -> Tools -> dotenv](#swag---ui-regression---tools---dotenv)
  - [dotenv](#dotenv)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Configuration](#configuration)
    - [Helpful Hints](#helpful-hints)
      - [Test Configuration Override](#test-configuration-override)
      - [Update an Environment Setting](#update-an-environment-setting)
      - [Add / Delete an Environment Setting](#add--delete-an-environment-setting)
    - [Known Issues](#known-issues)
    - [Upgrading](#upgrading)

## dotenv

This is an NPM package that makes it easier to load environment files into the running process.

[dotnet](https://www.npmjs.com/package/dotenv)

### Installation

> dotnet is already in the packages.json so just run:

      npm install

> Alternatively. you can install individually:

      npm install dotenv

- Add .env to your .gitignore to ensure the file does not get committed
- Create a .env file at the root folder

### Usage

> All of the logic for dotnet resides in [setup-environment.ts](../../../src/environments/setup-environment.ts) which is instantiated in the [playwright.config.ts](../../../playwright.config.ts) using:

      globalSetup: require.resolve('./global-setup')

> This only runs once per execution run. The logic flow:

- Load .env file

      const result = dotenv.config();

- If process.env.CONFIG_ENV_NAME not CUSTOM load specific environment configuration
- Validate process.env has ALL the correct keys

### Configuration

> Initial setup, you will need to create a .env file at the root of you project. This file will need to have the projects secrets as well as the configuration environment name to add specific setting. An alternative for those that want to have an environment not setup in the repository you will need combine the .env with the environment configuration and name it CUSTOM. An example in using CUSTOM would be for local and dev environments. These are not configured in the repository for obvious reasons, in that they are not static, and will not be run in Github actions.

**NOTE** You will find the secrets in on the login page on the site for the .env file.

> The .env file will hold secrets and is the only place were they should be stored. The following keys are required:

      CONFIG_ENV_NAME=local
      SITE_PASSWORD=***

> The environment configuration files are named .env.{environment} an example is .env.CI. These environment files should be place in .\src\environments. The following keys are required:

      CONFIG_NAME=CI
      ENV=CI
      SITE_BASE_URL=www.saucedemo.com/
      API_BASE_URL=petstore.swagger.io/
      ENV_PROTOCOL=https
      SITE_STANDARD_USER=standard_user
      SITE_LOCKED_OUT_USER=locked_out_user
      SITE_PROBLEM_USER=problem_user
      SITE_PERF_USER=performance_glitch_user

> Setting up custom configuration for local or dev environments, you will need to add all the keys to the .env file. You will need to change the keys to the specific environment and the logic will require this setting:

      CONFIG_NAME=CUSTOM

### Helpful Hints

- If you get all tests being skipped, this usually indicates that there was an issue with the global setup.
- The error handling gives you information on what needs to be fixed, there are four issues that could occur:

  - .env file does not exist or not in the root folder
  - .env.ENVIRONMENT file does not exist or not in the src/environments folder
  - Environment Key does not exist in the loaded configuration
  - Environment Key does not have a value

#### Test Configuration Override

> If you require to change a setting for a specific test, for example you might want to change a setting to check a failure condition or test the configuration logic for multiple configuration.

- Change an individual setting

      process.env.SITE_STANDARD_USER = 'john_snow'

- Override a configuration with another or the same configuration

      SetupEnvironment.initialize('CI', true);

- Delete an environment configuration

      delete process.env.ENV

#### Update an Environment Setting

> To perform maintenance on an existing setting to change it value you will need to perform the following actions:

- Non-Secret setting
  - Update the environment configuration and then commit this change.
- Secret setting
  - Update the .env file and update the Github secret to apply the change.

#### Add / Delete an Environment Setting

> To perform maintenance on an new or existing setting to add or delete the setting have similar actions:

- Non-Secret setting

  - Update **ALL** environment configuration and then commit this change.
  - Update the [RequiredConfigurationValues](../../../src/environments/SetupEnvironment.ts)

- Secret setting
  - Update the .env file
  - Update **ALL** environment secrets in Github
  - Update **ALL** Github actions in creating the .env file
  - Update the [RequiredConfigurationValues](../../../src/environments/SetupEnvironment.ts)

### Known Issues

> The logic will check to see if keys are missing, but it is only as good as keeping the [RequiredConfigurationValues](../../../src/environments/SetupEnvironment.ts) maintained. This check only verifies that the key is present.

            Error: CI environment variables missing [SITE_STANDARD_USER]

> Tests and code will need to verify presence and existence, here is an example errors in the logs when a key does not have a value. Again, this is only as good as our validation and maintaining [RequiredConfigurationValues](../../../src/environments/SetupEnvironment.ts).

            Error: CI environment missing value: [SITE_STANDARD_USER]
            throw new Error('Config Error: SITE_STANDARD_USER is undefined');

### Upgrading

> The recommended upgrade approach is to use [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) since it is all automated for you.

- Check for updates by running:

      ncu

- Update package.json by running:

      ncu -u

- Install your changes:

      npm install

[Back to Top](#swag---ui-regression---tools---dotenv) | [Back to Section Home](README.md) | [Back to Wiki Home](../README.md)
