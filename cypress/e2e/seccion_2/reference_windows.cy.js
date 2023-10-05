/// <reference types= "Cypress" />

import "../../support/commands";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Referencias a Windows", () => {
  it("Windows propiedades charset", () => {
    cy.visit("https://testsheepnz.github.io/random-number.html");
    cy.title("eq", "The Number Game");
    cy.wait(1500);

    //*Desde el documento estamos validando el funcionamiento de la página
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });

  //?Validaciones de URL (dirección IP)
  it.only("Windows url", () => {
    cy.visit("https://testsheepnz.github.io/random-number.html");
    cy.title("eq", "The Number Game");
    cy.wait(1500);

    //*Validamos toda la URL
    cy.url().should("include", "/random-number.html");
    
    //*Validamos un fragmento - la URL debe ser completa
    cy.url().should("eq", "https://testsheepnz.github.io/random-number.html");
  });

  //?Como podemos configurar tiempos, memoria
});
