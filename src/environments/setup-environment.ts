// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import fs from 'fs';
import * as dotenv from 'dotenv';

/**
 * RequiredConfigurationValues
 *
 * This array is for the accepted keys in the environemt and will be used for validation.
 */
export const RequiredConfigurationValues: Array<string> = [
  'CONFIG_NAME',
  'ENV',
  'SITE_BASE_URL',
  'API_BASE_URL',
  'ENV_PROTOCOL',
  'SITE_STANDARD_USER',
  'SITE_LOCKED_OUT_USER',
  'SITE_PROBLEM_USER',
  'SITE_PERF_USER',
  'SITE_PASSWORD',
  'MY_SECRET', // Remove once secret store is wired up
  /* Useful Constructed Variables */
  'SITE_URL',
  'API_URL'
];

/**
 * SetupEnvironment
 *
 * [unit](../tests/unit/dotenv.spec.ts) |
 * [.md file](../../docs/wiki/tools/dotenv.md) |
 * [wiki](https://github.com/Guzikowski/playwright.spikes/blob/master/docs/wiki/tools/dotenv.md)
 */
/**
 * initialise
 *
 * @param configName
 * @param requireOverride
 */
export namespace SetupEnvironment {
  export function initialise(configName?: string, requireOverride = false) {
    if (configName) {
      process.env.CONFIG_ENV_NAME = configName;
    } else {
      const result = dotenv.config();
      if (result.error) {
        throw new Error(`Unable to load inital .env configuration [${result.error}]`);
      }
    }
    if (process.env.CONFIG_ENV_NAME !== 'CUSTOM') {
      if (requireOverride) {
        overrideConfiguration();
      } else {
        const result = dotenv.config({ path: `./src/environments/.env.${process.env.CONFIG_ENV_NAME}` });
        if (result.error) {
          throw new Error(`Unable to load environment configuration [${result.error}]`);
        }
      }
    }
    getSecretStoreConfiguration();
    setAdditionalConstructedVariables();
    validateEnvironmentConfiguration();
  }

  /**
   * overrideConfiguration
   */
  function overrideConfiguration(): void {
    const envConfig: dotenv.DotenvParseOutput = dotenv.parse(fs.readFileSync(`./src/environments/.env.${process.env.CONFIG_ENV_NAME}`));
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in envConfig) {
      process.env[key] = envConfig[key];
    }
  }

  /**
   * validateEnvironmentConfiguration
   */
  function validateEnvironmentConfiguration(): void {
    const missingKeys: Array<string> = [];
    const missingValues: Array<string> = [];
    for (const key of RequiredConfigurationValues) {
      if (process.env[key] === undefined) {
        missingKeys.push(key);
      }
      if (process.env[key] !== undefined) {
        if ((process.env[key] as string).length <= 0) {
          missingValues.push(key);
        }
      }
    }
    if (missingKeys.length > 0) {
      throw new Error(`${process.env.CONFIG_ENV_NAME} environment missing variables: [${missingKeys.toString()}]`);
    }
    if (missingValues.length > 0) {
      throw new Error(`${process.env.CONFIG_ENV_NAME} environment missing value: [${missingValues.toString()}]`);
    }
  }

  /**
   * getSecretStoreConfiguration
   */
  function getSecretStoreConfiguration(): void {
    process.env.MY_SECRET = 'Squirrel runs with deez nuts!';
  }

  /**
   * setAdditionalConstructedVariables
   */
  function setAdditionalConstructedVariables(): void {
    process.env.SITE_URL = `${process.env.ENV_PROTOCOL}://${process.env.SITE_BASE_URL}`;
    process.env.API_URL = `${process.env.ENV_PROTOCOL}://${process.env.API_BASE_URL}`;
  }
}
export default SetupEnvironment;
