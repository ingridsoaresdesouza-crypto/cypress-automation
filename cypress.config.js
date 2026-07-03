const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bw6vzs',
  allowCypressEnv: false,

  
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: 'https://automationpratice.com.br/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
