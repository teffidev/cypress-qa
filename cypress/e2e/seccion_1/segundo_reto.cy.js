/// <reference types= "Cypress" />

require("cypress-xpath");
require("cypress-plugin-tab");

describe("Segundo Reto", () => {
  it("Test segundo reto, probando la aplicación", () => {
    cy.visit("https://computer-database.gatling.io/computers");
    cy.title().should("eq", "Computers database");
    cy.wait(1500);

    //buscando
    cy.xpath("//*[@id='searchbox']").should("be.visible").type("ASCI Red");
    cy.wait(1000);

    cy.get("#searchsubmit").should("be.visible").click();
    cy.wait(1000);

    //agregando
    cy.get("#add").should("be.visible").click();
    cy.get("#name")
      .should("be.visible")
      .type("cypress-computer")
      .tab()
      .type("2021-03-15")
      .tab()
      .type("2025-03-15");

    //Select
    cy.get("#company")
      .should("be.visible")
      .select("Nokia")
      .should("have.value", "16")
      .wait(1500);

    //botón crear
    cy.get(".primary").should("be.visible").click();

    //buscamos el que acabamos de crear
    cy.xpath("//*[@id='searchbox']").should("be.visible").type("cypress-computer");
    cy.wait(1000);

    cy.get("#searchsubmit").should("be.visible").click();
    cy.wait(1000);
  });
});
