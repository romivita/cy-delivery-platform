const {defineConfig} = require("cypress");

module.exports = defineConfig({
    projectId: "erc8ph",
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    videoUploadOnPasses: false,
    retries: {
        runMode: 2,
        openMode: 0,
    },
    e2e: {
        baseUrl: "https://dashboard.sandbox.stuart.com/",
        specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
        supportFile: "cypress/support/e2e.js",
    },
});
