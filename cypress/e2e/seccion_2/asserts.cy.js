/// <reference types= "Cypress" />
import "../../support/commands";

require("cypress-xpath");

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Asserts", () => {
  it("Assert Contains", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.title().should("eq", "My Shop");
    cy.wait(1000);

    cy.get(".sf-menu").contains("Women").click();
  });

  it("Assert Find (Buscar en una sección), eq (igual a)", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.title().should("eq", "My Shop");
    cy.wait(2000);

    cy.get(".sf-menu").contains("Women").click();
    cy.get(".product-container").find(".product-image-container").eq(0).click();
  });

  it("Validación de textos", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.title().should("eq", "My Shop");
    cy.wait(2000);

    cy.get(".sf-menu").contains("Women").click();
    cy.get(".product-container").find(".product-image-container").eq(0).click();

    //*Vamos a validar que el vestido tiene la palara 'New'
    cy.get("#product_condition .editable").then((e) => {
      // cy.log(e.text()); //*Vemos si si estamos obteniendo el texto

      //*Guardamos en una variable el texto que obtenemos del elemento
      const estado = e.text();

      //*Hacemos un condicional si se cumple lo que necesitamos
      if (estado === "New product") {
        cy.log("El vestido es nuevo");
      }
    });
  });

  it("Validación de precios", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.title().should("eq", "My Shop");
    cy.wait(2000);

    cy.get(".sf-menu").contains("Women").click();
    cy.get(".product-container").find(".product-image-container").eq(5).click();

    //?Vamos a validar precio
    cy.get("#our_price_display").then((e) => {
      cy.log(e.text()); //* Vemos si si estamos obteniendo el precio

      let precio = e.text(); //*Almacenamos el precio en una variable
      cy.log(precio);

      //*Aplicamos la función slice
      precio = precio.slice(1, 5);

      //*Creamos la condición
      if (precio > 30) {
        cy.log("El vestido está fuera de nuestro presupuesto");
        cy.xpath(
          "//header/div[3]/div[1]/div[1]/div[6]/ul[1]/li[1]/a[1]"
        ).click();
      } else {
        cy.log("El vestido está dentro de nuestro presupuesto");
        //*Si esta condición se cumple lo agregamos al carrito
        cy.get("#add_to_cart").click();

        cy.wait(5000);
      }
    });
  });

  it("Validaciones de textos con Contains", () => {
    cy.visit("https://demoqa.com/text-box");

    cy.get("#userName").should("be.visible").type("Estefania");
    cy.get("#userEmail").should("be.visible").type("teff@teeff.com");
    cy.get("#submit").should("be.visible").click();

    //*Validamos que los campos si tengan los textos
    cy.get("#name").should("have.text", "Name:Estefania");
    cy.get("#name").should("contain.text", "Estefania");
    cy.get("#email").should("contain.text", "teff@teeff.com");
  });

  it("Assert have.text más then", () => {
    cy.visit("https://demoqa.com/text-box");

    cy.get("#userName").should("be.visible").type("Estefania");

    //*Vamos a ver la parte negativa
    cy.get("#userName")
      .should("have.value", "Estefania")
      .then(() => {
        cy.get("#userEmail").should("be.visible").type("teff@teeff.com");
        cy.get("#submit").should("be.visible").click();
      });
  });

  it("Assert have.class", () => {
    cy.visit("https://demoqa.com/text-box");

    //*Validamos si es viisble y si contiene la clase que pongamos (validamos que tenga un objeto)
    cy.get("#userName")
      .should("be.visible")
      .should("have.class", "mr-sm-2")
      .then(() => {
        cy.get("#userName").type("Estefania");
      });
  });

  //?Validación positiva
  it("Assert have.class y la función and", () => {
    cy.visit("https://demoqa.com/text-box");

    //*Con la función 'and' podemos concatenar y obliga a que el sistema cumpla con las dos condiciones
    cy.get("#userName")
      .should("be.visible")
      .and("have.class", "mr-sm-2")
      .then(() => {
        cy.get("#userName").type("Estefania");
      });
  });

  //?Validación negativa
  it("Assert have.class y la función and", () => {
    cy.visit("https://demoqa.com/text-box");

    //*Si queremos obtener un elemento  que no este visible
    cy.get("#userName")
      .should("not.be.visible")
      .and("not.have.class", "mr-sm-22")
      .then(() => {
        cy.get("#userName").type("Estefania");
      });
  });

  it("Assert lenght y el css", () => {
    cy.visit(
      "https://demos.jquerymobile.com/1.4.5/table-column-toggle-options/"
    );

    //*Medir la longitud
    cy.get("#table-custom-2 > tbody >tr").should("have.length", 10);

    //*Validar CSS
    cy.get("#table-custom-2 > tbody >tr >td")
      .should("have.length", 40)
      .and("have.css", "border-collapse", "collapse");
  });

  it.only("Assert lenght y el css", () => {
    //*Creamos una variable llamada tiempo para no tener que estar escribiendo el valor como tal
    let tiempo = 1500;

    cy.visit(
      "https://demos.jquerymobile.com/1.4.5/forms-label-hidden-accessible/"
    );

    cy.wait(tiempo);

    cy.get("#textinput-4").should("be.visible").type("Demo del ejercicio");

    cy.contains("[type='button']","Show Message")
      .should("be.visible")
      .click({ force: true });
  });
});
