/// <reference types="Cypress" />

describe("Sección 1 - Validando el título", () => {
  it("Test validar el título", () => {
    cy.visit("https://testingqarvn.com.es/datos-personales/");

    cy.title().should("eq", "Datos Personales | TestingQaRvn");

    cy.log("La función title esta ok");
  });
});
