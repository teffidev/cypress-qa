const { defineConfig } = require("cypress");

//* Configuración para el preprocesador de archivos
const webpackPreprocessor = require("@cypress/webpack-preprocessor");

module.exports = defineConfig({
  viewportWidth: 1600,
  viewportHeight: 900,
  e2e: {
    baseUrl: "https://qa.xell.shop/",
    setupNodeEvents(on, config) {
      on("file:preprocessor", webpackPreprocessor());
    },
    experimentalStudio: true,
  },
});
