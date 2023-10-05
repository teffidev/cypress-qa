/// <reference types= "Cypress" />

require("cypress-plugin-tab");

describe("Opciones de click", () => {
  it("Test click sencillo", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.title().should("eq", "OrangeHRM");
    cy.wait(1000);

    cy.get(
      "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input"
    )
      .should("be.visible")
      .type("Admin")
      .tab()
      .type("admin123");

    cy.get(
      "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button"
    )
      .should("be.visible")
      .click();

    cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text")
      .should("be.visible")
      .click();

    cy.get(":nth-child(2) > .oxd-topbar-body-nav-tab-item")
      .should("be.visible")
      .click();

    cy.get(".oxd-dropdown-menu > :nth-child(1)").should("be.visible").click();
  });

  it("Test click force true", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.title().should("eq", "OrangeHRM");
    cy.wait(1000);

    cy.get(
      "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input"
    )
      .should("be.visible")
      .type("Admin")
      .tab()
      .type("admin123");

    cy.get(
      "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button"
    )
      .should("be.visible")
      .click();

    cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text")
      .should("be.visible")
      .click();

    cy.get(":nth-child(2) > .oxd-topbar-body-nav-tab-item")
      .should("be.visible")
      .click();

    //Vamos a poner un click forzadao dentro del JOB, si no pasa es porque existe un error
    // en el selector.
    cy.get(".oxd-dropdown-menu > :nth-child(1)")
      .should("be.visible")
      .click({ force: true });
  });

  it.only("Click por cordenadas (x,y)", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.title().should("eq", "OrangeHRM");
    cy.wait(1000);

    cy.get(
      "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input"
    )
      .should("be.visible")
      .type("Admin")
      .tab()
      .type("admin123");

    cy.get(
      "#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button"
    )
      .should("be.visible")
      .click();
    cy.wait(1500);

    cy.get(".oxd-topbar-header-title").should("be.visible").click(50, 5);

    cy.get(".oxd-topbar-header-title").should("be.visible").click(300, 5);
  });
});
