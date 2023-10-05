/// <reference types= "Cypress" />
import "../../support/commands";
import "cypress-file-upload";

require("cypress-xpath");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Cargando imagenes", () => {
  it("", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.title("eq", "DEMOQA");
    cy.wait(1500);
    
    const ruta = "img_random1.jpeg";    
    cy.get("[type ='file']").attachFile(ruta)
    cy.wait(2000);

  });
});
