/// <reference types= "Cypress" />

require("cypress-plugin-tab");

describe("Función Tab", () => {
  it("Type con Tab", () => {
    cy.visit("https://testingqarvn.com.es/datos-personales/");

    cy.title().should("eq", "Datos Personales | TestingQaRvn");
    cy.wait(1000);

    //Con el Tab todo es más rápido pero se pierden los assert
    cy.get("#wsf-1-field-21")
      .type("Estefania")
      .tab()
      .type("Bermudez")
      .tab()
      .type("tefyberal09@gmail.com");
  });
});
