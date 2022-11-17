// global-setup.ts
import { SetupEnvironment } from './setup-environment';

/**
 * globalSetup
 */
async function globalSetup() {
  SetupEnvironment.initialise();
}

export default globalSetup;
