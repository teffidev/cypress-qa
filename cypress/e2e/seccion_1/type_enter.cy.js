/// <reference types= "Cypress" />

describe("Funciones para Type", () => {
  it("Type --> ENTER", () => {
    cy.visit("https://www.google.com/");

    cy.title().should("eq", "Google");

    cy.wait(1000);

    //usamos la función name desde el inspector del browser
    cy.get("[name='q']").type("cypress io {enter}");

    //copiamos el selector desde inspeccionar del browser
    cy.get(
      "#rso > div.hlcw0c > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3"
    ).click();
  });
});
