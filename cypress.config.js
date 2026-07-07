const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bw6vzs',
  allowCypressEnv: false,

  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: 'https://automationpratice.com.br/',

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});