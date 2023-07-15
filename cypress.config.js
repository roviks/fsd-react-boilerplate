const { defineConfig } = require('cypress')

require('dotenv').config()

console.log()

module.exports = defineConfig({
  e2e: {
    baseUrl: `http://localhost:${import.meta.env.VITE_PORT}`,

    supportFile: 'cypress/src/support/e2e.ts',
    specPattern: 'cypress/src/e2e/**/*.cy.ts',

    fixturesFolder: 'cypress/src/fixtures',
    videosFolder: 'cypress/assets/videos',
    screenshotsFolder: 'cypress/assets/screenshots',
    downloadsFolder: 'cypress/assets/downloads',
  },
})
