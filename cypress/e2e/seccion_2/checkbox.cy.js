/// <reference types= "Cypress" />
import "../../support/commands";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Testing de Checkbox", () => {
  it("Test checkbox con label", () => {
    cy.visit("https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/");
    cy.title().should("eq", "Checkbox - jQuery Mobile Demos");
    cy.wait(1000);

    cy.get("label:contains('Check me')").should("be.visible").click();
  });

  it("Test checkbox del mismo nombre (multiples) con label", () => {
    cy.visit("https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/");
    cy.title().should("eq", "Checkbox - jQuery Mobile Demos");
    cy.wait(1000);

    cy.get("label:contains('I agree')")
      .should("be.visible")
      .each(($label) => {
        cy.wrap($label).click();
      });
  });

  it.only("Test con checkbox por selección", () => {
    cy.visit("https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/");
    cy.title().should("eq", "Checkbox - jQuery Mobile Demos");
    cy.wait(1000);

    cy.get(
      ":nth-child(16) > form > .ui-controlgroup > .ui-controlgroup-controls > :nth-child(1) > .ui-btn"
    )
      .should("be.visible")
      .each(($label) => {
        cy.wrap($label).click();
      });

    cy.get(
      ":nth-child(16) > form > .ui-controlgroup > .ui-controlgroup-controls > :nth-child(2) > .ui-btn"
    )
      .should("be.visible")
      .click();
  });
});
