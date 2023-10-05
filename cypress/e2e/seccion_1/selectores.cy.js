/// <reference types= "Cypress" />
import "../../support/commands";

require("cypress-xpath");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Tipos de selectores", () => {
  it("Selector por id", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    cy.get("#userName").should("be.visible").type("Carlos Bermudez");
    cy.wait(1000);
    cy.get("#userEmail").should("be.visible").type("carlos@gmail.com");
    cy.wait(1000);
  });

  it("Selector por atributo", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    cy.get("[placeholder='Full Name']")
      .should("be.visible")
      .type("Carlos Bermudez");
  });

  it("Selector por xpath", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    cy.xpath("//*[@id='userName']")
      .should("be.visible")
      .type("Carlos Bermudez");
    cy.wait(1000);

    cy.xpath("//input[@id='userEmail']")
      .should("be.visible")
      .type("carlos@gmail.com");
    cy.wait(1000);

    cy.xpath("//textarea[@id='currentAddress']")
      .should("be.visible")
      .type("Demo dirección");
  });

  it("Selector por Contains", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    //No recomendable usar las clases, pero en este caso nos servirá como referencia
    //Dentro de la función contains ponemos el texto que contiene ese elemento
    cy.get(".custom-control-label").contains("Female").click();
    cy.wait(1000);

    cy.get(".custom-control-label").contains("Other").click();
  });

  it.only("Selector por Copy Selector", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    //No recomendable usar las clases, pero en este caso nos servirá como referencia
    //Dentro de la función contains ponemos el texto que contiene ese elemento
    cy.get("#userNumber").should("be.visible").type("123");
  });
});
