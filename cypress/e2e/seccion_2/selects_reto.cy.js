/// <reference types= "Cypress" />
import "../../support/commands";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Reto selects", () => {
  it("Testing List Box Select", () => {
    cy.visit(
      "https://www.jqueryscript.net/demo/Efficient-Dual-List-Box-Plugin-with-jQuery-Bootstrap/"
    );
    cy.title().should("eq", "jQuery Dual List Box Demo");
    cy.wait(1000);

    cy.get(".unselected")
      .select(["Abigail Barber", "Aguilar Beasley", "Alicia Maldonado"])
      .then(() => {
        cy.get(
          "#dual-list-box-employees > div.col-md-2.center-block > button.btn.btn-default.col-md-8.col-md-offset-2.str"
        )
          .should("be.visible")
          .click()
          .then(() => {
            cy.wait(1500);
            cy.get(
              "#dual-list-box-employees > div.col-md-2.center-block > button.btn.btn-default.col-md-8.col-md-offset-2.atr"
            )
              .should("be.visible")
              .click()
              .then(() => {
                cy.wait(1500);
                cy.get(".atl")
                  .should("be.visible")
                  .click()
                  .then(() => {
                    cy.log("Se devolvieron todos los elementos");
                  });
              });
          });
      });
  });
});
