/**Con la función ONLY podemos indicar cuales son los test que quiero que corran */
/// <reference types= "Cypress" />

describe("Ejemplo de Type pageUp - pageDown", () => {
  it("Type pageUp primero", () => {
    cy.visit("https://testingqarvn.com.es/datos-personales/");

    cy.title().should("eq", "Datos Personales | TestingQaRvn");
    cy.wait(1000);

    cy.get("#wsf-1-field-21").type("{pageup}");
    cy.wait(2000);
  });

  it("Type pageDown", () => {
    cy.visit("https://testingqarvn.com.es/datos-personales/");

    cy.title().should("eq", "Datos Personales | TestingQaRvn");
    cy.wait(1000);

    cy.get("#wsf-1-field-21").type("{pagedown}");
    cy.wait(2000);
  });

  it("Type pageUp", () => {
    cy.visit("https://testingqarvn.com.es/datos-personales/");

    cy.title().should("eq", "Datos Personales | TestingQaRvn");
    cy.wait(1000);

    cy.get("#wsf-1-field-21").type("{pageup}");
    cy.wait(2000);
  });

  it("Type pageDown último", () => {
    cy.visit("https://testingqarvn.com.es/datos-personales/");

    cy.title().should("eq", "Datos Personales | TestingQaRvn");
    cy.wait(1000);

    cy.get("#wsf-1-field-21").type("{pagedown}");
    cy.wait(2000);
  });
});
