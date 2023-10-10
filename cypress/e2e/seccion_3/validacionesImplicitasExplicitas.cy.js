/// <reference types= "Cypress" />
import "../../support/commands";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe(" ", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
  });
  it("Validaciones implícitas", () => {
    cy.contains("Inputs").click();
  });

  it("Validaciones explícitas", () => {
    cy.contains("Inputs").click();
  });
});
