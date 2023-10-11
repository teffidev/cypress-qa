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
    cy.get("h3").should("have.text", "Inputs");
    cy.get(".example").should("have.class", "example").and("be.visible");
  });

  it("Validaciones explícitas", () => {
    cy.contains("Inputs").click();
    cy.get("h3").expect("Inputs").to.equals("Inputs");
  });
});
