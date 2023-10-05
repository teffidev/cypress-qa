describe("Primer Test con Cypress", () => {
  it("Esto es un hola mundo desde Cypress", () => {
    cy.log("Bienvenidos a Cypress");
    cy.visit("https://testingqarvn.com.es/datos-personales/");

    //Escribir algo sobre un elemento Input con el ID del inspector
    cy.get("#wsf-1-field-21").type("Estefania");
    //Damos una ventana de tiempo para ver el proceso
    cy.wait(1000);
    //Apunta al siguiente elemento
    cy.get("#wsf-1-field-22").type("Bermúdez Álvarez");
    cy.wait(1000);
    //Vamos a tomar el siguiente elemento con el ID de nuevo
    cy.get("#wsf-1-field-23").type("tefyberal09@gmail.com");
    cy.wait(1000);
    //Vamos a tomar el siguiente elemento con el ID de nuevo
    cy.get("#wsf-1-field-24").type("12354687");
    cy.wait(1000);
    //Vamos a tomar el siguiente elemento con el ID de nuevo
    cy.get("#wsf-1-field-28").type("Demo de la dirección");
    //Submit
    cy.wait(1000);
    //Vamos a tomar el siguiente elemento con el ID de nuevo
    cy.get("#wsf-1-field-27").click();
    cy.wait(4000);
  });
});
