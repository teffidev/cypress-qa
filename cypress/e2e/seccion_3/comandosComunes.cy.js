/// <reference types= "Cypress" />

import "../../support/commands";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe(" ", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
  });
  it("Ejemplo de click", () => {
    cy.contains("Add/Remove Elements").click();
    cy.get("button").contains("Add Element").click();
    cy.wait(1500);
    cy.get(".added-manually").contains("Delete").click();
  });

  it("Ejemplo de escritura", () => {
    cy.contains("Form Authentication").click();
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.wait(1500);
    cy.get(".fa").click();
  });

  it("Ejemplo de checkboxes", () => {
    cy.contains("Checkboxes").click();
    cy.get("#checkboxes > :nth-child(1)").check();
    cy.wait(1500);
    cy.get("#checkboxes > :nth-child(3)").uncheck();
  });

  it("Dropdown", () => {
    cy.contains("Dropdown").click();
    cy.get("#dropdown").select("Option 2"); //*Podemos pasar el texto
    cy.wait(1500);
    cy.get("#dropdown").select(1); //*Podemos pasar la posición
  });

  it("Hover sobre el elemento", () => {
    cy.contains("Hovers").click();
    cy.get("#content > div > div:nth-child(4) > div > a").click({
      force: true,
    });

    cy.contains("Hovers").click();
    cy.get("#content > div > div:nth-child(4) > div > a")
      .invoke("show")
      .should("have.text", "View profile");
  });

  it.only("Click derecho", () => {
    cy.contains("Context Menu").click();
    cy.get("#hot-spot").rightclick(); //?validamos con la función click derecho

    //*Validamos el texto de la alerta
    cy.get("#hot-spot").invoke("trigger", "contextmenu"); //?validamos con la función invoke
    cy.on("window:alert", (alert) => {
      expect(alert).to.equal("You selected a context menu");
    });
  });
});
