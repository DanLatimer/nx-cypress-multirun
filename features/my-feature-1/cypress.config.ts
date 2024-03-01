import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'cypress',
      webServerCommands: { default: 'nx run nx-multi-feature:serve-static' },
      // ciWebServerCommand: 'nx run nx-multi-feature:serve-static',
    }),
    baseUrl: 'http://localhost:3030',
  },
});
