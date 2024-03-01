import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run nx-multi-feature:serve',
        production: 'nx run nx-multi-feature:preview',
      },
      ciWebServerCommand: 'nx run nx-multi-feature:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
