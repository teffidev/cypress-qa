/// <reference types= "Cypress" />
import "../../support/commands";

require("cypress-xpath");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Reto Asserts", () => {
  it("Prácticando assert", () => {
    //*Creamos una variable llamada tiempo para no tener que estar escribiendo el valor como tal
    let tiempo = 1500;

    cy.visit("https://demos.jquerymobile.com/1.4.5/forms-gallery/");

    cy.wait(tiempo);

    cy.get(
      "body > div.jqm-demos.ui-page.ui-page-theme-a.ui-page-footer-fixed.ui-page-active > div.ui-content.jqm-content > form:nth-child(2) > div:nth-child(1) > div"
    )
      .should("be.visible")
      .and(
        "have.class",
        "ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset"
      )
      .type("Demo del ejercicio");

    cy.get(
      "body > div.jqm-demos.ui-page.ui-page-theme-a.ui-page-footer-fixed.ui-page-active > div.ui-content.jqm-content > form:nth-child(2) > div:nth-child(2) > a"
    ).should("have.class", "jqm-view-source-link ui-btn ui-corner-all ui-btn-inline ui-mini").click();
  });
});
