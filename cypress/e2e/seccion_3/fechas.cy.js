/// <reference types= "Cypress" />
import "../../support/commands";

require("cypress-plugin-tab");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Campos de tipo Fecha", () => {
  it.only("Test de fecha mm/dd/yyy", () => {
    cy.visit("https://demos.jquerymobile.com/1.4.5/datepicker/");
    cy.title("eq", "Datepicker - jQuery Mobile Demos");
    cy.wait(1500);

    //* Se obtiene el elemento de la fecha, se elige una fecha y se sale del input con esc
    cy.get(
      "#ui-page-top > div.jqm-demos.ui-page.ui-page-theme-a.ui-page-footer-fixed.ui-page-active > div.ui-content.jqm-content > div:nth-child(8) > div"
    )
      .should("exist")
      .should("be.visible")
      .type("10/04/2021")
      .then(() => {
        cy.wait(1000);
        cy.get(
          "#ui-page-top > div.jqm-demos.ui-page.ui-page-theme-a.ui-page-footer-fixed.ui-page-active > div.ui-content.jqm-content > div:nth-child(8) > div"
        )
          .should("exist")
          .should("be.visible")
          .type("{esc}");

        debugger;
      });

    // //* Otra forma
    // cy.get(
    //   "#ui-page-top > div.jqm-demos.ui-page.ui-page-theme-a.ui-page-footer-fixed.ui-page-active > div.ui-content.jqm-content > div:nth-child(8) > div"
    // )
    //   .should("be.visible")
    //   .click();
    // cy.wait(1000);
    // cy.get(
    //   "#ui-datepicker-div > .ui-datepicker-calendar > tbody > :nth-child(1) > .ui-datepicker-days-cell-over > .ui-state-default"
    // )
    //   .first()
    //   .click({ force: true });
  });

  it("Test de fecha mm/dd/yyy", () => {
    cy.visit("https://demos.jquerymobile.com/1.4.5/datepicker/");
    cy.title("eq", "Datepicker - jQuery Mobile Demos");
    cy.wait(1500);

    debugger;
  });
});
