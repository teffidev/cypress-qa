/// <reference types= "Cypress" />

describe("Introducción a los assert - validaciones de links", () => {
  it("Demo de los assert", () => {
    cy.visit("https://testingqarvn.com.es/datos-personales/");

    cy.title().should("eq", "Datos Personales | TestingQaRvn");
    cy.wait(1000);

    //Con esto estamos diciendo si el campo es visible o no para la página
    //Se validan los campos y vemos si si existe
    cy.get("#wsf-1-field-21").should("be.visible").type("Juan");
    cy.wait(1000);

    cy.get("#wsf-1-field-22").should("be.visible").type("Perez");
    cy.wait(1000);

    //saber si el campo esta visible y habilitado
    cy.get("#wsf-1-field-23")
      .should("be.visible")
      .should("be.enabled")
      .type("juanperez@perez.com");
    cy.wait(1000);
  });
});
