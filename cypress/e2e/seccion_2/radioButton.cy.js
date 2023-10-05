/// <reference types= "Cypress" />
import "../../support/commands";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Testing de Radio Button", () => {
  it("Test radio button ", () => {
    cy.visit("https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/");
    cy.title().should("eq", "Radio buttons - jQuery Mobile Demos");
    cy.wait(1000);

    cy.get(":nth-child(6) > form > :nth-child(1) > .ui-btn")
      .should("be.visible")
      .click();
    cy.wait(1500);

    cy.get(
      ":nth-child(21) > form > .ui-controlgroup > .ui-controlgroup-controls > :nth-child(3) > .ui-btn"
    )
      .should("be.visible")
      .click();
    cy.wait(1500);

    cy.get(":nth-child(39) > .ui-radio > .ui-btn").should("be.visible").click();
    cy.wait(1500);
  });
});
