/// <reference types= "Cypress" />
import "../../support/commands";

require("cypress-plugin-tab");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Primer reto", () => {
  it("Demo de los assert", () => {
    cy.visit("https://demoqa.com/webtables");

    cy.title().should("eq", "DEMOQA");
    cy.wait(1000);

    //Vamos a buscar el elemento
    cy.get("#searchBox").should("be.visible").type("Cierra");
    cy.wait(1000);

    //Vamos a borrar la busqueda del elemento
    cy.get("#searchBox").should("be.visible").clear();

    //Agregamos campo con el botón ADD
    cy.get("#addNewRecordButton").should("be.visible").click();
    cy.wait(1000);

    cy.get("#firstName")
      .should("be.visible")
      .type("Juan")
      .tab()
      .type("Perez")
      .tab()
      .type("juan@gmail.com")
      .tab()
      .type("31")
      .tab()
      .type("350000")
      .tab()
      .type("Sistemas");

    cy.get("#submit").should("be.visible").click();

    cy.get("#searchBox").should("be.visible").type("Juan");
    cy.wait(1000);

    cy.get("#searchBox").should("be.visible").clear();

    //Editar un campo
    cy.get("#edit-record-2").should("be.visible").click();
    cy.wait(1000);

    //Editamos edad
    cy.get("#age").should("be.visible").clear().type("50");
    cy.wait(1500);

    //Edtiamos salario
    cy.get("#salary").should("be.visible").clear().type("500000");

    //Presionamos el botón submit
    cy.get("#submit").should("be.visible").click();

    //Eliminamos un campo
    cy.wait(2000);
    cy.get("#delete-record-3").should("be.visible").click();
  });
});
