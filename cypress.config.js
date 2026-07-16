const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6js9bo',
  allowCypressEnv: false,

  e2e: {
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do curso de Cypress',
      reportPageTitle: 'Projeto do curso de Cypress',
    },
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
