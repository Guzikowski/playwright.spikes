// global-setup.ts
import { SetupEnvironment } from './setup-environment';

async function globalSetup() {
  SetupEnvironment.initialise();
}

export default globalSetup;
