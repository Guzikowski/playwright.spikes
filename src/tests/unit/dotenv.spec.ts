import { expect, test } from '@playwright/test';
import { allure } from 'allure-playwright';
import * as dotenv from 'dotenv';
import { SetupEnvironment } from '../../environments/setup-environment';

/**
 * SetupEnvironment Unit Tests
 *
 * [source](../../environments/setup-environment.ts) |
 * [wiki](https://github.com/)
 */
test.describe('Environment Configuration', () => {
  test.beforeEach(() => {
    allure.epic('Environment Setup');
    allure.story('Verify dotnet working properly');
    // required since it does not automatically override previous setting, valid since
    // you should only set the environment once
    // biome-ignore lint/performance/noDelete: <explanation>
    delete process.env.ENV;
  });
  test('Check Default with process', () => {
    let result = dotenv.config();
    result = dotenv.config({ path: `./src/environments/.env.${process.env.CONFIG_ENV_NAME}` });
    expect(result).not.toBe(null);
    expect(process.env.ENV).not.toBe(null);
  });
  test('Check Setup Environment Default', () => {
    SetupEnvironment.initialise();
    expect(process.env.ENV).not.toBe(null);
  });

  test('Check Setup Environment Default with override', () => {
    SetupEnvironment.initialise(undefined, true);
    expect(process.env.ENV).not.toBe(null);
  });
  test('Check Setup Environment Default with environment and override', () => {
    SetupEnvironment.initialise();
    expect(process.env.ENV).not.toBe(null);
    expect(process.env.SITE_PASSWORD).toBe('secret_sauce');
    SetupEnvironment.initialise('CI', true);
    expect(process.env.ENV).not.toBe(null);
    expect(process.env.ENV).toBe('CI');
  });
  test('Check Setup Environment Default with environment', () => {
    SetupEnvironment.initialise('CI');
    expect(process.env.ENV).not.toBe(null);
    expect(process.env.ENV).toBe('CI');
  });

  test('Check local with process', () => {
    const result = dotenv.config({ path: './src/environments/.env.local' });
    expect(result).not.toBe(null);
    expect(process.env.ENV).not.toBe(null);
    expect(process.env.ENV).toBe('local');
  });
  test('Check CI', () => {
    const result = dotenv.config({ path: './src/environments/.env.CI' });
    expect(result).not.toBe(null);
    expect(result.parsed).not.toBe(null);
    if (result.parsed?.ENV) {
      expect(result.parsed.ENV).toBe('CI');
    }
  });
  test('Check NODE ENV', () => {
    process.env.NODE_ENV = 'CI';
    const result = dotenv.config({ path: `./src/environments/.env.${process.env.NODE_ENV}` });
    expect(result).not.toBe(null);
    expect(result.parsed).not.toBe(null);
    if (result.parsed?.ENV) {
      expect(result.parsed.ENV).toBe('CI');
    }
  });
});
