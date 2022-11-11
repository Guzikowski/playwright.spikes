import * as dotenv from 'dotenv';
import fs from 'fs';

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

export class SetupEnvironment {
  public static initialise(configName?: string, requireOverride = false) {
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
        this.overrideConfiguration();
      } else {
        const result = dotenv.config({ path: `./src/environments/.env.${process.env.CONFIG_ENV_NAME}` });
        if (result.error) {
          throw new Error(`Unable to load environment configuration [${result.error}]`);
        }
      }
    }
    this.getSecretStoreConfiguration();
    this.setAdditionalConstructedVariables();
    this.validateEnvironmentConfiguration();
  }
  private static overrideConfiguration(): void {
    const envConfig: dotenv.DotenvParseOutput = dotenv.parse(
      fs.readFileSync(`./src/environments/.env.${process.env.CONFIG_ENV_NAME}`)
    );
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in envConfig) {
      process.env[key] = envConfig[key];
    }
  }
  private static validateEnvironmentConfiguration(): void {
    const missingKeys: Array<string> = [];
    const missingValues: Array<string> = [];
    RequiredConfigurationValues.forEach((key) => {
      if (process.env[key] === undefined) {
        missingKeys.push(key);
      }
      if (process.env[key] !== undefined) {
        if ((process.env[key] as string).length <= 0) {
          missingValues.push(key);
        }
      }
    });
    if (missingKeys.length > 0) {
      throw new Error(`${process.env.CONFIG_ENV_NAME} environemnt missing variables: [${missingKeys.toString()}]`);
    }
    if (missingValues.length > 0) {
      throw new Error(`${process.env.CONFIG_ENV_NAME} environemnt missing value: [${missingValues.toString()}]`);
    }
  }
  private static getSecretStoreConfiguration(): void {
    process.env.MY_SECRET = 'Squirrel runs with deez nuts!';
  }
  private static setAdditionalConstructedVariables(): void {
    process.env.SITE_URL = `${process.env.ENV_PROTOCOL}://${process.env.SITE_BASE_URL}`;
    process.env.API_URL = `${process.env.ENV_PROTOCOL}://${process.env.API_BASE_URL}`;
  }
}
