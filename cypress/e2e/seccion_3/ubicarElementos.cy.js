/// <reference types= "Cypress" />
import "../../support/commands";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Pruebas sobre UI", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
  });

  it("Esperas", () => {
    cy.wait(1500);
    cy.contains("Challenging DOM").click();
  });

  it("Nueva Pestaña", () => {
    cy.contains("Multiple Windows").click();
    cy.contains("Click Here").invoke("removeAttr", "target").click();
    cy.contains("New Window").should("have.text", "New Window");
  });

  it("Shadow DOM", () => {
    cy.contains("Shadow DOM").click();
    cy.get("ul > :nth-child(2)")
      .shadow()
      .should("have.text", "In a list!")
      .click();
  });

  it("Primer y ultimo elemento", () => {
    cy.contains("Dynamic Content").click();
    cy.get("img").first().should("be.visible"); //*Validar primero
    cy.get("img").eq(2).should("be.visible"); //*Validar intermedio
    cy.get("img").last().should("be.visible"); //*Validar último
  });

  it("Padres e hijos", () => {
    cy.contains("Dynamic Content").click();
    cy.get(":nth-child(4) > .large-2 > img").parent();
    cy.get(".example > :nth-child(7)").children();
  });

  //*Para mostrar algo que no esta visible
  it.only("Invoke", () => {
    cy.contains("Dynamic Content")
      .should("be.hidden")
      .invoke("show")
      .should("be.visible");
  });
});
