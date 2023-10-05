/// <reference types= "Cypress" />
import "cypress-file-upload";
import "../../support/commands";

require("@4tw/cypress-drag-drop");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Cypress eventos del mouse", () => {
  it("Primer event Drag and Drop", () => {
    let tiempo = 1500;
    cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
    cy.title("eq", "The Internet");
    cy.wait(tiempo);

    cy.get("#column-a").drag("#column-b", { force: true });
  });

  it.only("Segundo ejemplo del event Drag and Drop", () => {
    let tiempo = 1500;
    cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
    cy.title("eq", "The Internet");
    cy.wait(tiempo);

    cy.get("#column-a").drag("#column-b", { force: true });
  });
});
