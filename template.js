//*Para validar los comandos de Cypress
/// <reference types= "Cypress" />

//*Cuando vayamos a cargar archivos
import 'cypress-file-upload';

import "../../support/commands";

//*Cuando vayamos a usar la busqueda por el selector xpath
require("cypress-xpath");

//*Cuando vayamos a usar la función de TAB
require("cypress-plugin-tab");

Cypress.on("uncaught:exception", (err, runnable) => {
  //?Evitar que Cypress no pase la prueba retornando false
  //?Para que funcione se importa ../support/commands
  return false;
});

describe(" ", () => {
  it(" ", () => {
    cy.visit(" ");
    cy.title("eq", "");
    cy.wait(1500);
  });
}); //*Cierre de describe
