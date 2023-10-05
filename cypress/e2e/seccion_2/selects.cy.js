/// <reference types= "Cypress" />
import "../../support/commands";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Testing de los Select", () => {
  it("Select para uno", () => {
    cy.visit("https://demos.jquerymobile.com/1.4.5/selectmenu/#ui-page-top");
    cy.title().should("eq", "Selects - jQuery Mobile Demos");
    cy.wait(1000);

    cy.get("#select-native-1")
      .select("The 4th Option")
      .should("have.value", "4");
    cy.wait(2000);

    cy.get("#select-native-1")
      .select("The 3rd Option")
      .should("have.value", "3");
  });

  it("Select para autocompletado", () => {
    cy.visit("https://www.google.com/");
    cy.title().should("eq", "Google");
    cy.wait(1000);

    cy.get(
      "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc"
    )
      .should("be.visible")
      .type("Ferrari")
      .type("{enter}");
    cy.wait(1500);

    // cy.get(".XDyW0e").click();

    cy.get(".MUFPAc > :nth-child(2) > a").should("be.visible").click();
  });

  it.only("Multi-select - selección de varios elementos", () => {
    cy.visit("https://demos.jquerymobile.com/1.4.5/selectmenu-custom/");
    cy.title().should("eq", "Custom selects - jQuery Mobile Demos");
    cy.wait(1000);

    cy.get("#select-custom-19-button").should("be.visible").click();
    cy.wait(1500);

    cy.get("#select-custom-19-menu > .ui-first-child > .ui-btn")
      .contains("The 1st Option")
      .click();
    cy.wait(1500);

    cy.get("#select-custom-19-menu > .ui-last-child > .ui-btn")
      .contains("The 4th Option")
      .click();
    cy.wait(1500);

    cy.get("#select-custom-19-listbox > .ui-header > .ui-btn").click();
  });
});
